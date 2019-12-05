class PostsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_filter :check_current_user, :except => [:visibility_modified?]

  def new
  end

  def show
  end

  def update
    filtered_params = filter_and_modify_params(params)
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
  def filter_and_modify_params(params)
    filtered_params = params
            .require(:current_user)
            .permit(:first_name,
                    :last_name,
                    :location,
                    {:country_of_origin => []},
                    :map_visibility,
                    :photo_link)
    if filtered_params[:country_of_origin]
      filtered_params[:country_of_origin] = 
        filtered_params[:country_of_origin].join(" ")
    end
    return filtered_params
  end

  def visibility_modified?(success, params_map_visibility)
    success && (params_map_visibility.to_i == 1) && (not @current_user.map_visibility)
  end

end
