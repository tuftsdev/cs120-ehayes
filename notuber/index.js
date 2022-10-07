class Vehicle {
	constructor(id, lat, lng, map) {
		this.id = id;
		const pos = {lat: lat, lng: lng};
		this.marker = new google.maps.Marker({pos, map: map, optimized: false});
		console.log();
	}
}

function initMap() {
	const center = new google.maps.LatLng(42.352271, -71.0552400000001);
    const map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 14,
    });

    setVehicles(map);
}

const vehicles = [
	["mXfkjrFw", 42.3453, -71.0464],
	["nZXB8ZHz", 42.3662, -71.0621],
	["Tkwu74WC", 42.3603, -71.0547],
	["5KWpnAJN", 42.3472, -71.0802],
	["uf5ZrXYw", 42.3663, -71.0544],
	["VMerzMH8", 42.3542, -71.0704]
];

function setVehicles(map) {
	const image = {
		url: "car.png",
		size: new google.maps.Size(30, 70),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, 32)
	};

	const shape = {
		coords: [0, 0, 0, 0, 30, 70, 30, 0],
		type: "poly",
	};

	for (let i = 0; i < vehicles.length; ++i)
	{
		const v = vehicles[i];

		new google.maps.Marker({
			position: { lat: vehicles[i][1], lng: vehicles[i][2]},
			map,
			icon: image,
			shape: shape,
			title: vehicles[0],
		});
	}
}

window.initMap = initMap;