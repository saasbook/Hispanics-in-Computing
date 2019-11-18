class PostsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def new
  end

  def save
    @name = params[:name]
    @email = params[:email]
    @location = params[:location]
    @country_of_origin = params[:country_of_origin]

    user = User.create(:name => @name,:email => @email,:location => @location,:country_of_origin => @country_of_origin)

  end
end
