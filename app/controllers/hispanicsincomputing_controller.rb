class HispanicsincomputingController < ApplicationController
  def index
  end

  def members
  end

  def tapia_2018
  end

  def tapia_2017
  end

  def tapia_2016
  end

  def tapia_2013
  end

  def modify_data
  end

  def map
    all_map_users = User.where(map_visibility: true)
    gon.all_users = all_map_users

    @locations = []
    all_map_users.each do |user|
      @locations << Geocoder.search(user.location).first.coordinates
    end
    @user_num = @locations.length
    gon.locations = @locations
  end

end
