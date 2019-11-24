class User < ActiveRecord::Base
    def self.update_or_create(auth)
        user = User.find_by(google_uid: auth[:uid]) || User.new
        user.attributes = {
          google_uid: auth[:uid],
          first_name: auth[:info][:first_name],
          last_name: auth[:info][:last_name],
          email: auth[:info][:email],
          google_token: auth[:credentials][:token],
          google_refresh_token: auth[:credentials][:refresh_token],
          google_oauth_expires_at: auth[:credentials][:expires_at]
        }
        user.save!
        return user
      end
end
