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
end
