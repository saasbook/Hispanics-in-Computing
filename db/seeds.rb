# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = [{:first_name => 'Alice', :last_name => 'A.', :email => 'alic@testmail.com', :location => 'San Francisco, California', :map_visibility => true, :profession => "Professor"},
    	  {:first_name => 'Bob', :last_name => 'A.', :email => 'bo@testmail.com', :location => 'Fremont, California', :map_visibility => true, :profession => "Professor"},
    	  {:first_name => 'Carrie', :last_name => 'A.', :email => 'carri@testmail.com', :location => 'Los Angeles, California', :map_visibility => true, :profession => "Student"},
      	  {:first_name => 'Doug', :last_name => 'A.', :email => 'dog@testmail.com', :location => 'Fresno, California', :map_visibility => true, :profession => "Professional"},
      	  {:first_name => 'Emily', :last_name => 'A.', :email => 'emiy@testmail.com', :location => 'San Diego, California', :map_visibility => true, :profession => "Other"},
  	 ]

users.each do |user|
  User.create!(user)
end
