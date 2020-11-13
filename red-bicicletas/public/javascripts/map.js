
var urlmap = "https://a.tile.openstreetmap.org/${z}/${x}/${y}.png ";
var mapa = L.map('mapid').setView([-34.625957,-58.380890], 15);

L.tileLayer('urlmap',{
attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mapa);

/*
 L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', { 
     maxZoom: 18, 
     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + 
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 
      'Imagery © <a href="http://mapbox.com">Mapbox</a>', 
     id: 'mapbox.streets' 
    }).addTo(mapa);
  */



var marker = L.marker([-34.625957,-58.380890]).addTo(mapa);

var marker2 = L.marker([-34.625967,-58.385990]).addTo(mapa);
