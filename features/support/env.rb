require 'cucumber/rspec/doubles'
require 'cucumber/rails'

Before('@omniauth-test') do
  OmniAuth.config.test_mode = true
  OmniAuth.config.add_mock(:google, {
    :info => {:first_name => "foo",
              :last_name => "bar",
              :email => "foobar@gmail.com"
            }
  })
end

Before('@clear-user-db') do
  User.delete_all
end

After('@omniauth-test') do
  OmniAuth.config.test_mode = false
end