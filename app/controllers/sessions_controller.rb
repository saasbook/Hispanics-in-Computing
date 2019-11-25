class SessionsController < ApplicationController  
  def create
    user = User.update_or_create(env["omniauth.auth"])
    if User.valid_user(user)
      session[:id] = user.id
    end
    redirect_to root_path
  end

  def destroy
    # session.clear
    # redirect_to root_path
  end
  
end