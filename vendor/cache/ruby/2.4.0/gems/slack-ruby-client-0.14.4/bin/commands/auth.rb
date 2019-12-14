# This file was auto-generated by lib/tasks/web.rake

desc 'Auth methods.'
command 'auth' do |g|
  g.desc 'This method revokes an access token. Use it when you no longer need a token. For example, with a Sign In With Slack app, call this to log a user out.'
  g.long_desc %( This method revokes an access token. Use it when you no longer need a token. For example, with a Sign In With Slack app, call this to log a user out. )
  g.command 'revoke' do |c|
    c.flag 'test', desc: 'Setting this parameter to 1 triggers a testing mode where the specified token will not actually be revoked.'
    c.action do |_global_options, options, _args|
      puts JSON.dump($client.auth_revoke(options))
    end
  end

  g.desc 'This method checks authentication and tells "you" who you are, even if you might be a bot.'
  g.long_desc %( This method checks authentication and tells "you" who you are, even if you might be a bot. )
  g.command 'test' do |c|
    c.action do |_global_options, options, _args|
      puts JSON.dump($client.auth_test(options))
    end
  end
end
