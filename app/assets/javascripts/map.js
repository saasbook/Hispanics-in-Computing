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
      let imgSrc = "/assets/images/profile_default.jpg";
      if (thisUser.photo_link) {
        imgSrc = thisUser.photo_link
      }
      // p.innerHTML = '<p align="center"><img class="map-pfp" src="/assets/profile_default.jpg"/></p><h4 style="text-align:center">'+name+'</h4>';
      p.innerHTML = '<p align="center"><img class="map-pfp" src='+ imgSrc + '/></p><h4 style="text-align:center">'+name+'</h4>';
      p.innerHTML+= createMapHTML(thisUser.country_of_origin.split(" "));
      p.innerHTML+= '<p align="center" style="font-size:130%;"><a href="mailto:'+thisUser.email+'">'+ thisUser.email+'</a></p>';
      marker.bindPopup(p).openPopup();
    }

  }

  function createMapHTML(countries) {
    var mapHTML = '<p align="center" style="font-size:130%;">Country: '
    for (var j = 1; j < countries.length; j++) {
      var country_name = countries[j];
      mapHTML+= country_name+' '+'<span class=\"flag flag-'+country_name.toLowerCase()+'" style="margin-right: 10px;"></span>';
    }
    return mapHTML + '<br/></p>'
  } 
