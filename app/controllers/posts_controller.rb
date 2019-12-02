class PostsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_filter :check_current_user
  
  def new
  end

  def show
  end

  def update
    success = @current_user
              .update(params
                      .require(:current_user)
                      .permit(:first_name, 
                              :last_name, 
                              :location, 
                              :country_of_origin))
    if success
      flash[:success] = "Update successful"
    else
      flash[:error] = "Update unsuccessful"
    end
    redirect_to get_info_path
  end

end
