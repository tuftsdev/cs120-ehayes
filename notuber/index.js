const PROXIMITY_RATIO_MILES_CONSTANT = 0.000621371192

function initMap() {
	const center = new google.maps.LatLng(40.7047, -73.9418);
    const map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 2,
    });

    setActiveRiderLocation(map);
}

function setActiveRiderLocation(map) {
	if ('geolocation' in navigator) {
		const watchID = navigator.geolocation.getCurrentPosition((position) => {
			sendRideRequest(position.coords.latitude, position.coords.longitude, map);
		});
	} 
	else {
		console.log("geolocation is not available");
	}
}

function sendRideRequest(lat, lng, map) {
	var http = new XMLHttpRequest();
	var name = "ZlrthCQi";
	var url = 'https://jordan-marsh.herokuapp.com/rides';
	var params = "username=" + name + "&lat=" + lat + "&lng=" + lng;
	
	http.open('POST', url, true);
	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	http.onreadystatechange = function() {//Call a function when the state changes.
	    if(http.readyState == 4 && http.status == 200) {
	        const jsonCars = JSON.parse(http.responseText);
	        const user = placeUserPin(lat, lng, map, jsonCars);
	        const cars = hailNearbyCars(map, user, jsonCars);
	    }
	}
	http.send(params);
}

function placeUserPin(lat, lng, map, jsonCars) {
	const user = new google.maps.Marker({
		position: { lat: lat, lng: lng},
		map
	});
	return user;
}

function hailNearbyCars(map, user, jsoncars) {
	const infoWindow = new google.maps.InfoWindow();
	const carList = [];
	const image = {
		url: "car.png",
		size: new google.maps.Size(30, 70),
	};

	const carmap = new Map(Object.entries(jsoncars));
	var polyline = new google.maps.Polyline();

	carmap.forEach(entry => {
		const marker = new google.maps.Marker({
			position: { lat: entry["lat"], lng: entry["lng"]},
			map,
			icon: image,
			title: `Ride #${entry["id"]}`,
		});

		marker.addListener("click", () => {
			infoWindow.close();
			infoWindow.setContent(findDistanceFromUser(map, user, marker));
			infoWindow.open(marker.getMap(), marker);
		});

		carList.push(marker);
	});

	user.addListener("click", () => {
		infoWindow.close();
		infoWindow.setContent(findcarNearestUser(map, user, jsoncars, polyline));
		infoWindow.open(map, user);
	});

	return carList;
}

function findcarNearestUser(map, user, carList, polyline) {
	var lowestDistance = 999999999999;
	var lowestDistanceIndex = -1;
	var cardistance = "didn't find any cars...";
	const u = user.position;
	carList.forEach(entry => { 
		const c = { lat: entry.lat, lng: entry.lng };
		const d = google.maps.geometry.spherical.computeDistanceBetween(u, c);	
		if (d < lowestDistance) {
			lowestDistance = d;
			lowestDistanceIndex = entry.id;
		}
	});

	carList.forEach(entry => {
		const c = { lat: entry.lat, lng: entry.lng };
		if (entry.id == lowestDistanceIndex) {
			polyline.setMap(null);
			cardistance = "<p>The nearest car is " + lowestDistance * PROXIMITY_RATIO_MILES_CONSTANT + " miles away.</p>";
			polyline = new google.maps.Polyline({path: [user.position, c], map: map})
		}
	});

	return cardistance;
}

function findDistanceFromUser(map, user, car) {
	const d = google.maps.geometry.spherical.computeDistanceBetween(user.position, car.position);	
	return "<p> This car is " + (d * PROXIMITY_RATIO_MILES_CONSTANT) + " miles away.";
}

window.initMap = initMap;