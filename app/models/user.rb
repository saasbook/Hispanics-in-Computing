class User < ActiveRecord::Base
  validates_uniqueness_of :email
  before_save :validate_location_for_map

  def self.validate_and_create(auth)
    email = auth[:info][:email]
    if User.valid_user?(email)
      user = User.find_by(:email => email) || User.new(:first_name => auth[:info][:first_name],
                      :last_name => auth[:info][:last_name],
                      :email => auth[:info][:email])
      return user.save ? user : nil
    else
      return nil
    end
  end

  def self.valid_user?(email)
    return false if email.nil?
    begin
      Slack::Web::Client.new.users_lookupByEmail(:email => email)
      return true
    rescue Slack::Web::Api::Errors::SlackError
      return false
    end
  end

  def valid_map_user?
    not Geocoder.search(self.location).empty?
  end

  def validate_location_for_map
    if self.map_visibility && (not valid_map_user?)
      self.map_visibility = false
    end
    return true
  end

  def country_of_origin_to_array
    if self.country_of_origin.nil?
      return []
    else
      return self.country_of_origin.split(" ")
    end
  end
end
