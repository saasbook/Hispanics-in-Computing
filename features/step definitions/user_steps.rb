Given /^(?:|I )am on (.+)$/ do |path|
  visit path
end

Given /I press "([^"]*)"/ do |text|
  click_on(text)
end







