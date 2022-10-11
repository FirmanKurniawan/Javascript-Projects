const map = L.map("map").setView([51.505, -0.09], 13)

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

const points = []
let marker = null
const convexBtn = document.querySelector("#convex-btn")
convexBtn.disabled = true

/*
    Click on the map
    Add marker onto the map and push the coordinates of the point to the points array
*/
map.on("click", (event) => {
	points.push(turf.point([event.latlng.lat, event.latlng.lng]))
	marker = L.marker(event.latlng).addTo(map)

	if (points.length >= 3) {
		convexBtn.disabled = false
	}
})

// Convert array of points into a Turf featureCollection
const convexPoints = turf.featureCollection(points)

convexBtn.addEventListener("click", () => {
	const hull = turf.convex(convexPoints)
	if (hull) {
		const convexHull = L.polygon(hull.geometry.coordinates)
		convexHull.addTo(map)
		resetBtn.disabled = false
	}
})
