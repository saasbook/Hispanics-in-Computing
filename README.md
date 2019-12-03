[![Maintainability](https://api.codeclimate.com/v1/badges/b37257d72e1c0ba3d645/maintainability)](https://codeclimate.com/github/CS169-Group9/Hispanics-in-Computing/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/b37257d72e1c0ba3d645/test_coverage)](https://codeclimate.com/github/CS169-Group9/Hispanics-in-Computing/test_coverage) [![Build Status](https://travis-ci.com/CS169-Group9/Hispanics-in-Computing.svg?branch=master)](https://travis-ci.com/CS169-Group9/Hispanics-in-Computing)

<h1 align="center">Hispanics in Computing Website</h1>

<p align="center"><i>CS 169 Group 9 Fall 2019</i></p>
<p align="center">
  <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/79140623_743663496131268_6202584433631952896_n.png?_nc_cat=101&_nc_ohc=E6qR74qITKAAQndskkjBAxDanZHPvdRPIym44IWve_dFJwUvL_RhqSTfA&_nc_ht=scontent-lax3-1.xx&oh=2653660f1fcb80cc606169c2f8fda6ad&oe=5E858A5C"  height="300">
</p>
<p align="center">Special Thanks to Professor Nery Chapeton Lamas</p>

## Introduction

<h4>Hispanics in Computing Mission</h4>

> Hispanics in Computing is a group of Latinx/Hispanics that are interested or work in computing. The group includes industry representatives, faculty, researchers, students, and others. 

> _The sole purpose of our group is to serve as mentors and sponsors for other Latinx/Hispanics interested in computing._

In alignment with the group's vision, we migrated the existing website to a rails application with an accessible and modern redesign, and created an interactive map feature for the members. 

Members can login with Google and their email is cross-checked for membership within the existing Hispanics in Computing Slack group. They may customize their profile which is the information to be displayed on the members map, an interactive frame with pop-ups of other member's information across the globe (courtesy of Open Street Maps, MapBox, and Leaflet). Through this tool, all Latinx/Chicanx members, students, professors, and professionals alike, have a platform to network with geopgraphical context, and can even reach out when travelling to different regions. 

## Visit

Currently found at the [heroku app](https://murmuring-mountain-07471.herokuapp.com/).
To be migrated to [hispanicsincomputing.com](http://hispanicsincomputing.org/) soon.

## Pages

* [Home](#home) `/`
  * About `#about`
  * Events `#events`
  * Connect `#connect`
* Tapia 
  * Tapia 2018 `/tapia2018`
  * Tapia 2017 `/tapia2017`
  * Tapia 2016 `/tapia2016`
  * Tapia 2013 `/tapia2013`
* [Members](#portal)
  * `if logged in`
    * View Profile `/profile`
    * Edit Profile `/profile/edit`
    * View Map `/map`
    * Log Out `redirect /members`
  * `else`
    * Members Login `/members`

### Home

View of a side-by-side comparison of the old home page content and new home page redesign. 

Before | After
--- | ---
![](https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/78600498_2563566337063726_1739049949120692224_n.png?_nc_cat=110&_nc_ohc=7f6W157RI0oAQnTuDT9waS-9rvFe20C-FDFKSb75U9SPpFNJa4D2vUiHw&_nc_ht=scontent-lax3-1.xx&oh=e291a7ec79ac491da6a1ba1592333e43&oe=5E40EAF9) | ![](https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/78817505_470680540478784_3547178442833264640_n.png?_nc_cat=110&_nc_ohc=vEeHZj8ffD4AQkJapJxyqdPOFolz4jKRWGHQ12Uem-gRw21NvIH-brnvA&_nc_ht=scontent-lax3-1.xx&oh=86916e525c2048abe8d4943f20fad7a6&oe=5E8C4DA7)

### Portal

Use of OmniAuth for Google login and flash messages to show login status.

On login | On logout
--- | ---
![](https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/78101851_688629901661407_7859575068307750912_n.png?_nc_cat=108&_nc_ohc=SrbdM45wT7YAQmSLFKwNSQHehgKbYehHbyVS7jFVLqMTpsbVGSv6j-JMw&_nc_ht=scontent-lax3-1.xx&oh=9489475c4daddca7b523bd30828c67fb&oe=5E86EA40) | ![](https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/78657876_928906124169263_8975898765743357952_n.png?_nc_cat=109&_nc_ohc=Sw1XNOTVCj8AQnDeeT-8D9eRAq5mj_YrEMIhxEeSXoP09gOcbYbIpatQg&_nc_ht=scontent-lax3-1.xx&oh=8c7129ebc1ac4749dc80e5d20f245171&oe=5E7D7014)

## Demos


## Gem Dependencies
```
gem 'leaflet-rails'
gem 'gon'
gem 'geocoder'
gem 'jquery-rails'
gem 'bootstrap-sass'
gem 'font-awesome-rails'
gem 'country_select'
gem 'omniauth-google-oauth2'
gem 'slack-ruby-client'
```

## Contributors
* [David Monical](https://github.com/davidgmonical)
* [Danelle Nachum](https://github.com/dnachum)
* [Danny Sallurday](https://github.com/danonthemoon)
* [Amy Shen](https://github.com/shenamy)
* [Max Tang](https://github.com/MaxTang233)
* [Shalandy Zhang](https://github.com/shalandy) <br>
And thanks to [Srujay Korlakunta](https://github.com/srujayk) for the support.
