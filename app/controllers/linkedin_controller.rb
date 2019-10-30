class LinkedinController < ApplicationController

	before_filter :authenticate_user!

	@@config = {
    :site => 'https://api.linkedin.com',
    :authorize_path => '/uas/oauth/v2/authenticate',
    :request_token_path => '/uas/oauth/v2/requestToken?scope=r_basicprofile',
    :access_token_path => '/uas/oauth/v2/accessToken'
  	}

  	def generate_linkedin_oauth_url

      	if LinkedinOauthSetting.find_by_user_id(current_user.id).nil?
        	client = LinkedIn::Client.new('864iep7yma91lx', 'zulE6jkZmxSbh18s', @@config)

        	# change localhost placeholder later
        	request_token = client.request_token(:oauth_callback => "https://localhost:3000/oauth_account")
        	session[:rtoken] = request_token.token
        	session[:rsecret] = request_token.secret
        	redirect_to request_token.authorize_url
      	else
        	redirect_to "/oauth_account"
      end
    end

    def oauth_account

  		client = LinkedIn::Client.new('864iep7yma91lx', 'zulE6jkZmxSbh18s', @@config)
  		pin = params[:oauth_verifier]
  		if pin
    		atoken, asecret = client.authorize_from_request(session[:rtoken], session[:rsecret], pin)
    		LinkedinOauthSetting.create!(:asecret => asecret, :atoken => atoken, :user_id => current_user.id)
  		end
  		redirect_to "/"
	end

	def get_client

    	linkedin_oauth_setting = LinkedinOauthSetting.find_by_user_id(current_user.id)
    	client = LinkedIn::Client.new('864iep7yma91lx', 'zulE6jkZmxSbh18s', @@config)
    	client.authorize_from_access(linkedin_oauth_setting.atoken, linkedin_oauth_setting.asecret)
    	client
  	end

  	def index

    	unless LinkedinOauthSetting.find_by_user_id(current_user.id).nil?
    	redirect_to "/linkedin_profile"
    	end
  	end

  	def linkedin_profile

    	@basic_profile = get_basic_profile
  	end
    def get_basic_profile
      bprofile = BasicProfile.find_by_user_id(current_user.id)
      if bprofile.nil?
        client = get_client
        profile = client.profile(:fields => ["first-name", "last-name", "maiden-name", "formatted-name" ,:headline, :location, :industry, :summary, :specialties, "picture-url", "public-profile-url"])

        basic_profile = profile.to_hash
        basic_profile[:location] = basic_profile["location"]["name"]
        new_basic_profile = BasicProfile.new(basic_profile)
        new_basic_profile.user = current_user
        new_basic_profile.save
        new_basic_profile
      else
        bprofile
      end
  end
end
