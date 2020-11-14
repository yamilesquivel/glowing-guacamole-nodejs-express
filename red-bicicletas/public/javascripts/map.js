
const urlmap = "https://cdn.lima-labs.com/{z}/{x}/{y}.png?free";
const urlmap2 = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

var mymap = L.map("mapid");

mymap.setView([-34.625957,-58.380890], 15);

L.tileLayer(urlmap2 ,{attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, '}).addTo(mymap);

/*

 var layer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', { 
     maxZoom: 18, 
     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + 
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 
      'Imagery © <a href="http://mapbox.com">Mapbox</a>', 
     id: 'mapbox.streets' 
    });
 layer.addTo(mymap);
 */



var marker1 = L.marker([-34.625957,-58.380890]).addTo(mymap);
marker1.bindPopup("marker1");

var marker2 = L.marker([-34.625967,-58.385990]).addTo(mymap); 
marker2.bindPopup("marker2");
/*

var map = L.map("mapid");

map.setView([40.7484, -73.9857], 12);

var options = { attribution: "(c) OpenStreetMap Contributors" };

var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', options)
layer.addTo(map);

var marker = L.marker([40.7484, -73.9857]);
marker.addTo(map);
marker.bindPopup("Empire State Building<br/>350 5th Ave, New York, NY 10118");
marker.openPopup();*/