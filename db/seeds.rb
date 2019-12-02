# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = [{:first_name => 'Alice', :last_name => 'A.', :email => 'alice@testmail.com', :location => 'San Francisco, California'},
    	  {:first_name => 'Bob', :last_name => 'A.', :email => 'bob@testmail.com', :location => 'Fremont, California'},
    	  {:first_name => 'Carrie', :last_name => 'A.', :email => 'carrie@testmail.com', :location => 'Los Angeles, California'},
      	  {:first_name => 'Doug', :last_name => 'A.', :email => 'doug@testmail.com', :location => 'Fresno, California'},
      	  {:first_name => 'Emily', :last_name => 'A.', :email => 'emily@testmail.com', :location => 'San Diego, California'},
  	 ]

users.each do |user|
  User.create!(user)
end
