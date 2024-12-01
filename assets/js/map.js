// Using Mapbox styles in Leaflet  https://www.youtube.com/watch?v=b6Oh4ZBKf6o
// How to Customize Leaflet Map CSS  https://stackoverflow.com/questions/19367776/how-to-customize-leaflet-map-css
// Leaflet Providers  https://github.com/leaflet-extras/leaflet-providers
// Provider names for leaflet-providers.js  Stadia.AlidadeSatellite  зелёный

// Google Yandex leaflet-plugins  https://github.com/shramov/leaflet-plugins






$(window).on("load", function(){
		//Open street  Map
        var coord = [50.428489, 136.787781]; // <--- координаты

		var map = L.map('map-canvas', { scrollWheelZoom:true}).setView(coord, 12);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 22,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		// пользовательская иконка
		var customIcon = L.icon({
		iconUrl: 'assets/images/map/mapmarker.png',
		iconSize:     [64, 64], // размер иконки
		iconAnchor:   [32, 63] // точка иконки, которая будет соответствовать положению маркера
		});

		// объект маркера, передать пользовательскую иконку в качестве опции, добавить на карту
		var marker = L.marker(coord, {icon: customIcon}).addTo(map);
		});