Given /^(?:|I )am on (.+)$/ do |page_name|
  visit path_to(page_name)
end

When /^(?:|I )go to (.+)$/ do |page_name|
  visit path_to(page_name)
end

Then /^(?:|I )should be on (.+)$/ do |page_name|
  current_path = URI.parse(current_url).path
  if current_path.respond_to? :should
    current_path.should == path_to(page_name)
  else
    assert_equal path_to(page_name), current_path
  end
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
