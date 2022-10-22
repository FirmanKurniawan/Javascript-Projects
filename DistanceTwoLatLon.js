/**
 * 
 * @param {Double} lat1 latitude 1
 * @param {Double} lon1 longitude 1
 * @param {Double} lat2 latitude 2
 * @param {Double} lon2 longitude 2
 * @returns double in KM
 */
function distance(lat1, lon1, lat2, lon2) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }

    let radlat1 = Math.PI * lat1 / 180;
    let radlat2 = Math.PI * lat2 / 180;
    let theta = lon1 - lon2;
    let radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
        dist = 1;
    }

    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344

    return dist;
}

let resultDistance = distance(-8.443185, 115.278537, -8.443758, 115.280608);
console.log(resultDistance + " km");