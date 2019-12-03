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
    var thisUser = gon.all_users[i];
    if (thisUser.map_visibility) {
      var marker = L.marker(gon.locations[i]).addTo(mymap);
      p = document.createElement("p");
      let name = thisUser.first_name+' '+thisUser.last_name;
<<<<<<< HEAD
      let imgSrc = "/assets/profile_default.jpg";
      if (thisUser.photo_link){
        imgSrc = thisUser.photo_link
      }
      // p.innerHTML = '<p align="center"><img class="map-pfp" src="/assets/profile_default.jpg"/></p><h4 style="text-align:center">'+name+'</h4>';
      p.innerHTML = '<p align="center"><img class="map-pfp" src='+ imgSrc + '/></p><h4 style="text-align:center">'+name+'</h4>';

=======
      p.innerHTML = '<p align="center"><img class="map-pfp" src="/assets/images/profile_default.jpg"/></p><h4 style="text-align:center">'+name+'</h4>';
>>>>>>> aec52296652c3fb319a17ac12ce9c125f23a1df3
      if (thisUser.country_of_origin) {
        p.innerHTML+= '<p align="center" style="font-size:130%;">Country: '+thisUser.country_of_origin+' '+'<span class=\"flag flag-'+String(thisUser.country_of_origin).toLowerCase()+'\"></span>'+'<br/></p>';
      }
      p.innerHTML+= '<p align="center" style="font-size:130%;"><a href="mailto:'+thisUser.email+'">'+ thisUser.email+'</a></p>';
      marker.bindPopup(p).openPopup();
    }

  }
