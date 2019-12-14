Given /I am (not )?a member of the slack group/ do |not_member|
  if not_member
    User.stub(:valid_user?).and_return(false)
  else
    User.stub(:valid_user?).and_return(true)
  end
end

When /I login/ do
  steps %Q{
    Given I am on the home page
    Then I press "Members Login"
    Then I press "Connect to Google"
    }
end

When /I logout/ do
  steps %Q{
    Given I am on the home page
    Then I press "Log out"
  }
end

Given /I have (never )?logged in before/ do |never|
  unless never
    @first_name = "bar"
    User.create!(:first_name => @first_name, :email => OmniAuth.config.mock_auth[:google][:info][:email])
  end
end

Then /my information is determined through my google profile/ do
  auth_hash = OmniAuth.config.mock_auth[:google][:info]
  user = User.find_by(email: auth_hash[:email])
  expect(user.first_name).to eq(auth_hash[:first_name])
  expect(user.last_name).to eq(auth_hash[:last_name])
  expect(user.email).to eq(auth_hash[:email])
end

Then /my information should not change/ do
  auth_hash = OmniAuth.config.mock_auth[:google][:info]
  user = User.find_by(email: auth_hash[:email])
  expect(user.first_name).to eq(@first_name)
end

Then /I should (not )?see the log out button/ do |no_btn|
  if no_btn
    expect(page.has_button?("logout-button")).to be(false)
  else
    expect(page.has_button?("logout-button")).to be(true)
  end
end
