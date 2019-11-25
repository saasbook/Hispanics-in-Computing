require 'cucumber/rspec/doubles'
require 'cucumber/rails'

Before() do
  OmniAuth.config.test_mode = true
  OmniAuth.config.add_mock(:google, {
    :info => {:first_name => "foo",
              :last_name => "bar",
              :email => "foobar@gmail.com"
            }
  })
end

After() do
  OmniAuth.config.test_mode = false
end