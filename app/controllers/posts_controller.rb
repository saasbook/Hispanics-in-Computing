class PostsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def new
  end

  def save
    @first_name = params[:first_name]
    @last_name = params[:last_name]
    @email = params[:email]
    @location = params[:location]
    @country_of_origin = params[:country_of_origin]

    user = User.create(:first_name => @first_name, :last_name => @last_name, :email => @email,:location => @location,:country_of_origin => @country_of_origin)

  end
end
