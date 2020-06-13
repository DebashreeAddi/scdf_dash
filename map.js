var map;
function initMap() {
  myLatLng = { lat: -31.397, lng: 150.644 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 10
  });
  var marker1 = new google.maps.Marker({
    position: myLatLng,
    map: map,
    label: "Hrithik Roshan"
  });
  var marker2 = new google.maps.Marker({
    position: { lat: -31.41, lng: 150.8 },
    map: map,
    label: "Shah Rukh Khan"
  });
  var marker3 = new google.maps.Marker({
    position: { lat: -31.6, lng: 150.5 },
    map: map,
    label: "Maria"
  });
  var marker4 = new google.maps.Marker({
    position: { lat: -31.51, lng: 150.5 },
    map: map,
    label: "Albert"
  });
  marker1.setMap(map);
  marker2.setMap(map);
  marker3.setMap(map);
  marker4.setMap(map);
}
