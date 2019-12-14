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

  var students = [];
  var professors = [];
  var professionals = [];
  var others = [];


  for (var i = 0; i < gon.all_users.length; i++) {
    var thisUser = gon.all_users[i];
    if (thisUser.map_visibility) {
      let myIcon = otherIcon;

      let userCoords = gon.locations[i]
      let offset0 = Math.random()/75;
      let offset1 = Math.random()/75;
      let switch0 = Math.random();
      let switch1 = Math.random();
      if (switch0 >= 0.5) {
        offset0 = -offset0;
      };
      if (switch1 >= 0.5) {
        offset1 = -offset1;
      };
      userCoords[0] = userCoords[0] + offset0
      userCoords[1] = userCoords[1] + offset1

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

      var marker = L.marker(userCoords, {icon: myIcon});
      p = document.createElement("p");
      let name = thisUser.first_name+' '+thisUser.last_name;
      let imgSrc = "/assets/profile_default.jpg";
      if (thisUser.photo_link != null && thisUser.photo_link.length > 5) {
        imgSrc = thisUser.photo_link
      };
      p.innerHTML = '<p align="center"><img class="map-pfp" src='+ imgSrc
      + '></p><h4 style="text-align:center">'+name+'</h4>';
      p.innerHTML+= createMapHTML(thisUser.country_of_origin.split(" "));
      let userProf = "";
      let userOrg = "";
      if (thisUser.profession != null && thisUser.profession != "") {
        userProf = thisUser.profession
      };
      if (thisUser.organization != null && thisUser.organization != "") {
        userOrg = ' @ ' + thisUser.organization
      };
      p.innerHTML+= '<p align="center" style="font-size:130%;">'+userProf+userOrg+'</a></p>';
      if (thisUser.linkedin != null && thisUser.linkedin != "") {
        p.innerHTML+= '<div align="center"><a target="blank" href='+thisUser.linkedin+' class="edit-profile"><i class="icon-square icon-linkedin icon-2x"></i></a>'
        +'<a target="blank" href=mailto:'+thisUser.email+' class="edit-profile"><i class="icon-square icon-envelope icon-2x"></i></a></div>';
      } else {
          p.innerHTML+= '<div align="center"><a target="blank" href=mailto:'+thisUser.email+' class="edit-profile"><i class="icon-square icon-envelope icon-2x"></i></a></div>';
      }
      marker.bindPopup(p).openPopup();

      switch (thisUser.profession) {
        case "Student":
          students.push(marker);
          break;
        case "Professor":
          professors.push(marker);
          break;
        case "Professional":
          professionals.push(marker);
          break;
        default:
          others.push(marker);
          break;
      }

    }

  }

  //add the groups of markers to layerGroups
  var sgroup = L.layerGroup(students);
  var pgroup = L.layerGroup(professors);
  var pfgroup = L.layerGroup(professionals);
  var ogroup = L.layerGroup(others);

  var tileLayer = {'Filtering' : L.tileLayer('https://api.mapbox.com/styles/v1/{id}/ck24z3cvl3w731cnxddhxret7/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}', {
       id: 'shalandy',
       accessToken: 'pk.eyJ1Ijoic2hhbGFuZHkiLCJhIjoiY2syNHoxaHhsMDE2YzNlbjNpNTBueml3diJ9.zrIOoG7uEkskPY2icMP01w',
       attributionControl: false // also to change position
   })
  };

  //Control on the Top Left that handles the switching between groups
  var overlayMaps = {
      "<span class='layername'><img src='../assets/map-icons/student.png'> Students": sgroup,
      "<span class='layername'><img src='../assets/map-icons/professor.png'> Professors": pgroup,
      "<span class='layername'><img src='../assets/map-icons/professional.png'> Professionals": pfgroup,
      "<span class='layername'><img src='../assets/map-icons/other.png'> Others": ogroup,
  };


  var mymap = L.map('leaflet-map', {
    center: [37.871758, -122.260929],
    zoom: 7,
    layers: [tileLayer['Filtering'], sgroup, pgroup, pfgroup, ogroup],
    zoomControl: false, // to be added to change default
    attributionControl: false // also to change position
  });

  // readd zoom to change position
  L.control.zoom({
       position:'topright'
  }).addTo(mymap);

  // readd to bottom right
  L.control.attribution({position: 'bottomright'}).addTo(mymap);

  L.control.layers(null, overlayMaps, {collapsed:false, collapsible: true, position:'topleft'}).addTo(mymap);

  // add search functionality

  // add a layer group, yet empty
  var allLayers = L.layerGroup([ogroup, sgroup, pgroup, pfgroup]);

  // // add the search bar to the map
  // var controlSearch = new L.Control.Search({
  //   position: 'topleft',    // where do you want the search bar?
  //   layer: allLayers,  // name of the layer
  //   initial: false,
  //   zoom: 11,        // set zoom to found location when searched
  //   marker: false,
  //   textPlaceholder: 'search...' // placeholder while nothing is searched
  // });
  //
  // mymap.addControl(controlSearch); // add it to the map

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
;
