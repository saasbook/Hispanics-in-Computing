require 'optparse'
require 'open-uri'
require 'json'
require 'csv'

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  helper_method :current_user

  protected
  def current_user
    @current_user ||= User.find_by(:id => session[:id])
  end

  def check_current_user
    unless current_user
      flash[:danger] = "You must login to gain access to that page"
      redirect_to members_path and return
    end
  end
	
end
