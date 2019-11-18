# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = [{:name => 'Alice', :email => 'alice@testmail.com', :location => 'San Francisco, California'},
    	  {:name => 'Bob', :email => 'bob@testmail.com', :location => 'Fremont, California'},
    	  {:name => 'Carrie',:email => 'carrie@testmail.com', :location => 'Los Angeles, California'},
      	  {:name => 'Doug', :email => 'doug@testmail.com', :location => 'Fresno, California'},
      	  {:name => 'Emily', :email => 'emily@testmail.com', :location => 'San Diego, California'},
  	 ]

users.each do |user|
  User.create!(user)
end
