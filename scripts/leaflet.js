$(document).ready(
    function () {

const mapDiv = document.getElementById("map");

var map = L.map('map', {
    center: [48.634475,-4.435818],
    zoom: 14
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
}).addTo(map);

const resizeObserver = new ResizeObserver(() => {
    map.invalidateSize();
  });
  
resizeObserver.observe(mapDiv);

fetch('DATA/Curnic.geojson')
    .then(function (response) {
        return response.json();
    })
    .then(function (geojson) {

        L.geoJSON(geojson, {
            pointToLayer: function (feature, latlng) {
                // Create the marker
                var marker = L.marker(latlng, {
                    riseOnHover: true, // Make the marker rise on hover
                    properties: feature.properties,
                    icon: L.icon({
                        iconUrl: 'figures/logos/marker.svg',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34]
                    })
                });

                // Create the popup
                var popup = L.popup();
                popup.setContent(`
                    <p><b>${feature.properties.places}</b></p>
                `);
                marker.bindPopup(popup);

                return marker;
            }
        }).addTo(map);
    });
});