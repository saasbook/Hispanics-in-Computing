class SessionsController < ApplicationController  
  def create
    user = User.validate_and_create(env["omniauth.auth"])
    if user.nil?
      flash[:error] = "Login unsuccessful: Please email " \
                      "members@hispanicsincomputing.org to join " \
                      "the Hispanics in Engineering Slack group"
    else
      session[:id] = user.id
      flash[:success] = "Login successful"
    end
    redirect_to root_path
  end

  def destroy
    reset_session
    flash[:success] = "Logout successful"
    redirect_to members_path
  end
  
end