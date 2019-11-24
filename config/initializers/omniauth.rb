require 'omniauth-google-oauth2'
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV["GOOGLE_CLIENT_ID"] = "248188784981-07616iek6u1841hi095cro2v3j92hp7t.apps.googleusercontent.com", ENV["GOOGLE_SECRET"] = "9P0JDKFL9fF86rd-ADZSiCtR", {
    :name => "google",
    :scope => "profile, admin.directory.group.readonly", 
    :prompt => "select_account",
    :image_aspect_ratio => "square",
    :image_size => 50,
    :access_type => 'offline'
  }
end