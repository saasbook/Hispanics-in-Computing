class PostsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_filter :check_current_user, :except => [:visibility_modified?]

  def new
  end

  def show
  end

  def update
    filtered_params = params
            .require(:current_user)
            .permit(:first_name,
                    :last_name,
                    :location,
                    :country_of_origin,
                    :map_visibility)
    success = @current_user.update(filtered_params)

    if visibility_modified?(success, filtered_params[:map_visibility])
      flash[:warning] = "Unable to add pin to map:" \
                        " Location must be the name" \
                        " of a city in order for a pin" \
                        " to be visible on the map" 
                        
    elsif success
      flash[:success] = "Update successful"
    else
      flash[:error] = "Update unsuccessful"
    end
    redirect_to get_info_path
  end

  private
  def visibility_modified?(success, params_map_visibility)
    success && params_map_visibility && (not @current_user.map_visibility)
  end

end
