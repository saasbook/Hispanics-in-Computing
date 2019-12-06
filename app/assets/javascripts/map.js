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
      let imgSrc = "/assets/images/profile_default.jpg";
      if (thisUser.photo_link != null && thisUser.photo_link.length > 5) {
        imgSrc = thisUser.photo_link
      }
      p.innerHTML = '<p align="center"><img class="map-pfp" src='+ imgSrc
      + '></p><h4 style="text-align:center">'+name+'</h4>';
      p.innerHTML+= createMapHTML(thisUser.country_of_origin.split(" "));
      let userProf = ""
      let userOrg = ""
      if (thisUser.profession != null && thisUser.profession != "") {
        userProf = thisUser.profession
      }
      if (thisUser.organization != null && thisUser.organization != "") {
        userOrg = ' @ ' + thisUser.organization
      }
      p.innerHTML+= '<p align="center" style="font-size:130%;">'+userProf+userOrg+'</a></p>';
      if (thisUser.linkedin != null && thisUser.linkedin != "") {
        p.innerHTML+= '<div align="center"><a target="blank" href='+thisUser.linkedin+' class="edit-profile"><i class="icon-square icon-linkedin icon-2x"></i></a>'
        +'<a target="blank" href=mailto:'+thisUser.email+' class="edit-profile"><i class="icon-square icon-envelope icon-2x"></i></a></div>';
      } else {
          p.innerHTML+= '<div align="center"><a target="blank" href=mailto:'+thisUser.email+' class="edit-profile"><i class="icon-square icon-envelope icon-2x"></i></a></div>';
      }
      marker.bindPopup(p).openPopup();
    }

  }

  function createMapHTML(countries) {
    // If the countries array only contains the empty string
    // then add nothing to the html
    if (countries.length <= 1 || countries[1].length == 0) {
      return "";
    }
    var mapHTML = '<p align="center" style="font-size:130%;">Country: '
    for (var j = 1; j < countries.length; j++) {
      var country_name = countries[j];
      mapHTML+= country_name+' '+'<span class=\"flag flag-'+country_name.toLowerCase()+'" style="margin-right: 10px;"></span>';
    }
    return mapHTML + '<br/></p>'
  }
