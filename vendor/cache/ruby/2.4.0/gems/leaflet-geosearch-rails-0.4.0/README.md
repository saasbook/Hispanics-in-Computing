# Leaflet::GeoSearch::Rails

Integrates the [Leaflet GeoSearch] plugin with Rails asset pipeline

## Installation

Add this line to your application's Gemfile:

    gem 'leaflet-geosearch-rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install leaflet-geosearch-rails

## Usage

Add the following to your `app/assets/javascripts/application.js`:

    //= require leaflet.geosearch
    //= require leaflet.geosearch.provider.openstreetmap
    //= require leaflet.geosearch.provider.xyz
    
Add the following to your `app/assets/stylesheets/application.css`:    
    
    *= require leaflet.geosearch
    
Examples can be found at [smeijer]

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License
MIT License, full text of license see [here][License]

*Free Software, Fuck Yeah!*

[License]: https://github.com/kendrikat/leaflet-geosearch-rails/blob/master/LICENSE.txt "LICENSE"
[Leaflet GeoSearch]: https://github.com/smeijer/L.GeoSearch
[smeijer]: https://github.com/smeijer/L.GeoSearch
