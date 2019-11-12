require 'omniauth-linkedin-oauth2'
Rails.application.config.middleware.use OmniAuth::Builder do
    provider :linkedin, '86aha6g6j6zx7k', 'JmvGfOOzga8l2EDx'
end