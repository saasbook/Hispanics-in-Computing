class SessionsController < ApplicationController  
  def create
    user = User.update_or_create(env["omniauth.auth"])
    if valid_user(user)
      session[:id] = user.id
    end
    redirect_to root_path
  end

  def valid_user(user)
    email = user["email"]
    puts slack_member_emails
    return slack_member_emails.include? email
  end

  def destroy
    # session.clear
    # redirect_to root_path
  end
  
end