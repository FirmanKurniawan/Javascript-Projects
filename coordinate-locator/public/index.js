if ('geolocation' in navigator) {
    console.log("geolocation is available");

    navigator.geolocation.getCurrentPosition(async function getData(position) {
        console.log(position);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const button = document.getElementById("geo");
        button.addEventListener('click', async function () {
            document.getElementById("lat").textContent = lat;
            document.getElementById("lon").textContent = lon;
            document.getElementById("city").textContent = cityName;

            const data = { lat, lon, cityName };
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            };

            const response = await fetch(`https://us1.locationiq.com/v1/reverse?key=pk.e8d4442f994b3bbd57e364572930ffce&lat=${lat}&lon=${lon}&format=json`);
            const data2 = await response.json();
            var cityName = " ";
            if (data2.address.state) {
                cityName = data2.address.state;
            }
            else if (data2.address.city) {
                cityName = data2.address.city;
            }
            console.log(cityName);
            document.getElementById("city").textContent = cityName;

            var marker = L.marker([lat, lon]).addTo(map);
            marker.setLatLng([lat, lon]);
            map.setView([lat, lon], 5)

        });
    });
}
else {
    console.log("geolocation is  NOT available");
}


