require 'slack-ruby-client'
Slack.configure do |config|
    config.token = ENV['SLACK_API_TOKEN'] = "xoxp-831541929522-831541931122-834918434466-6082a23cf9775a1dee7088d3295d083c"
    raise 'Missing ENV[SLACK_API_TOKEN]!' unless config.token
  end