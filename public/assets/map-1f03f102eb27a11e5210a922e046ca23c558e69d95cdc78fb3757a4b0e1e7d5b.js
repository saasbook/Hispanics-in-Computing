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

var studentIcon = L.icon({
    iconUrl: "../assets/map-icons/student.png",
    iconSize: [30, 30],
 });
var professorIcon = L.icon({
    iconUrl: '/assets/map-icons/professor.png',
    iconSize: [30, 30],
});
var professionalIcon = L.icon({
    iconUrl: '/assets/map-icons/professional.png',
    iconSize: [30, 30],
 });
var otherIcon = L.icon({
    iconUrl: '/assets/map-icons/other.png',
    iconSize: [30, 30],
});


  for (var i = 0; i < gon.all_users.length; i++) {
    var thisUser = gon.all_users[i];
    if (thisUser.map_visibility) {
      let myIcon = otherIcon;
      switch (thisUser.profession) {
        case "Student":
          myIcon = studentIcon;
          break;
        case "Professor":
          myIcon = professorIcon;
          break;
        case "Professional":
          myIcon = professionalIcon;
          break;
        default:
          myIcon = otherIcon;
          break;
      }
      var marker = L.marker(gon.locations[i], {icon: myIcon}).addTo(mymap);
      p = document.createElement("p");
      let name = thisUser.first_name+' '+thisUser.last_name;
      let imgSrc = "/assets/profile_default.jpg";
      if (thisUser.photo_link != null && thisUser.photo_link.length > 5) {
        imgSrc = thisUser.photo_link
      }
      p.innerHTML = '<p align="center"><img class="map-pfp" src='+ imgSrc
      + '/></p><h4 style="text-align:center">'+name+'</h4>';
      if (thisUser.country_of_origin) {
        p.innerHTML+= '<p align="center" style="font-size:130%;">'+thisUser.country_of_origin+' '
          +'<span class=\"flag flag-'+String(thisUser.country_of_origin).toLowerCase()+'\"></span>'+'<br/></p>';
      }
      p.innerHTML+= '<p align="center" style="font-size:130%;">'+thisUser.profession+' @'+thisUser.organization+'</a></p>';
      p.innerHTML+= '<div align="center"><a target="blank" href='+thisUser.linkedin+' class="edit-profile"><i class="icon-square icon-linkedin icon-2x"></i></a>'
      +'<a target="blank" href=mailto:'+thisUser.email+' class="edit-profile"><i class="icon-square icon-envelope icon-2x"></i></a></div>';
      marker.bindPopup(p).openPopup();
    }

  }
;
