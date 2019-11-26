class SessionsController < ApplicationController  
  def create
    user = User.validate_and_create(env["omniauth.auth"])
    if user.nil?
      flash[:error] = "Login unsuccessful: Please use " \
                      "the same email that you use for " \
                      "the Hispanics in Engineering Slack group"
    else
      session[:id] = user.id
      flash[:success] = "Login successful"
    end
    redirect_to root_path
  end

  def destroy
    # session.clear
    # redirect_to root_path
  end
  
end