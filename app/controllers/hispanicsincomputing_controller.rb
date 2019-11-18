class HispanicsincomputingController < ApplicationController
  def index
  end

  def members
  end

  def create
    render text: request.env['omniauth.auth'].to_yaml
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
    @first_user = User.first
    gon.first_user = @first_user
    gon.all_users = User.all
  end

end
