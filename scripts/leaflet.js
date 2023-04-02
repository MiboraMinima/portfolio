$(document).ready(
    function () {

const mapDiv = document.getElementById("map");

var map = L.map('map', {
    center: [48.634475,-4.435818],
    zoom: 14
});

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
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
        // Add the GeoJSON data to the map as a layer

        L.geoJSON(geojson, {
            pointToLayer: function (feature, latlng) {
                // Create the marker
                var marker = L.marker(latlng, {
                    // Make the marker rise on hover
                    riseOnHover: true,

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
                // Set the content of the popup to an image element with custom CSS styles
                popup.setContent(`
                    <p><b>${feature.properties.places}</b></p>
                `);
                // Bind the popup to the marker
                marker.bindPopup(popup);

                // Return the marker
                return marker;
            }
        }).addTo(map);
    });
});