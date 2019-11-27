class PostsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_filter :check_current_user
  
  def new
  end

  def show
  end

  def save
    # add saving stuff here
    redirect_to get_info_path
  end

end
