Given /^(?:|I )am on (.+)$/ do |path|
  visit path
end

Given /I press "([^"]*)"/ do |text|
  click_on(text)
end

Then /I should see "([^"]*)" within (.*)/ do |text, selector|
  within(class: selector) do
    should have_content text
  end
end

Then /I should not see "([^"]*)" within (.*)/ do |text, selector|
  within(class: selector) do
    should have_no_content text
  end
end
