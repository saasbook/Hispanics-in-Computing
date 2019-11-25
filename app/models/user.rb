class User < ActiveRecord::Base
  def self.update_or_create(auth)
    user = User.find_by(email: auth[:info][:email]) || User.new
    user.attributes = {
      first_name: auth[:info][:first_name],
      last_name: auth[:info][:last_name],
      email: auth[:info][:email]
    }
    user.save!
    return user
  end

  def self.valid_user(user)
    email = user["email"]
    return slack_member_emails.include? email
  end

end
