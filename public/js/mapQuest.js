function initMap() {
  L.mapquest.key = 'buYUhbpk4Um0GI2ClyoOncIdAxenan0C';

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [37.7749, -122.4194],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  L.marker([37.7749, -122.4194]).addTo(map);
}