class PostsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def new
  end

  def save
    @firstname = params[:firstname]
    @lastname = params[:lastname]
    @location = params[:location]
  end


end
