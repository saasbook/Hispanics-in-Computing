class SessionsController < ApplicationController  
  def create
    user = User.validate_and_create(env["omniauth.auth"])
    unless user.nil?
      session[:id] = user.id
    end
    redirect_to root_path
  end

  def destroy
    # session.clear
    # redirect_to root_path
  end
  
end