var map;
function initMap() {
  myLatLng = { lat: -31.397, lng: 150.644 };
  map = new google.maps.Map(document.getElementById("map1"), {
    center: myLatLng,
    zoom: 10,
  });
}
