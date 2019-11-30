var mymap = L.map('leaflet-map', {
  center: [37.871758, -122.260929],
  zoom: 7,
});
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/ck24z3cvl3w731cnxddhxret7/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}', {
     attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> | © <a href="http://mapbox.com">Mapbox</a>',
     maxZoom: 18,
     id: 'shalandy',
     accessToken: 'pk.eyJ1Ijoic2hhbGFuZHkiLCJhIjoiY2syNHoxaHhsMDE2YzNlbjNpNTBueml3diJ9.zrIOoG7uEkskPY2icMP01w',
 }).addTo(mymap);


  for (var i = 0; i < gon.all_users.length; i++) {
    var marker = L.marker(gon.locations[i]).addTo(mymap);
    p = document.createElement("p");
    p.innerHTML = '<p align="center"><img src="/assets/default-profile.jpg"/></p><h3 style="text-align:center">'+gon.all_users[i].name+'</h2>';
    p.innerHTML+= '<p align="center" style="font-size:130%;">Country: '+gon.all_users[i].country_of_origin+'<br/></p>';
    p.innerHTML+= '<p align="center" style="font-size:130%;"><a href="mailto:'+gon.all_users[i].email+'">'+ gon.all_users[i].email+'</a></p>';
    marker.bindPopup(p).openPopup();
  }
