class User < ActiveRecord::Base
  def self.validate_and_create(auth)
    email = auth[:info][:email]
    if User.valid_user(email)
      user = User.find_by(:email => email) || User.new(:first_name => auth[:info][:first_name],
                      :last_name => auth[:info][:last_name],
                      :email => auth[:info][:email])
      return user.save ? user : nil
    else
      return nil
    end
  end

  def self.valid_user(email)
    return slack_member_emails.include? email
  end

  def self.slack_member_emails
		client = Slack::Web::Client.new
    all_members = []

		client.users_list(presence: true, limit: 10, sleep_interval: 5, max_retries: 20) do |response|
			all_members.concat(response.members.select { |member| !member["deleted"]})
    end
		return all_members.map { |member| member["profile"]["email"]}
	end

end
