require 'optparse'
require 'open-uri'
require 'json'
require 'csv'

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  helper_method :current_user, :slack_member_emails

  def current_user
    @current_user ||= User.find(session[:id]) if session[:id]
  end

  def slack_member_emails
  	mambers = nil
  	@slack_member_emails = []
  	# TODO: change token when we get the Hispanics in Computing slack
  	token = "xoxp-831541929522-831551475954-846883798502-80a37aeb89849a27761cbd6bacd65792"
  	mambers = JSON.parse(open("https://slack.com/api/users.list?token=" + token).read)['members']
  	if mambers
      	mambers.each do |member|
        	@slack_member_emails.push(member['profile']['email'])
      	end
	  end
	  return @slack_member_emails 
  end
end
