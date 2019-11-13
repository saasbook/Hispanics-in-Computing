class PostsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def new
  end

  def create

    @firstname = params[:firstname]
    @lastname = params[:lastname]
    @location = params[:location]

    redirect_to members_data_path

  end

  def all_data
  end
end
