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
		client = Slack::Web::Client.new
		all_members = []

		client.users_list(presence: true, limit: 10, sleep_interval: 5, max_retries: 20) do |response|
			all_members.concat(response.members.select { |member| !member["deleted"]})
		end

		return all_members.map { |member| member["email"]}
	end
end
