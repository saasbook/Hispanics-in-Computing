Given /^(?:|I )am on (.+)$/ do |page_name|
  visit path_to(page_name)
end

Given /^I enter the following in the form:$/ do |form_table|
  form_table.hashes.first.each do |form_input, form_value|
    steps %Q{
      When I fill in "#{form_input}" with "#{form_value}"
    }
  end
end

When /I press "([^"]*)"/ do |text|
  click_on(text)
end

When /^(?:|I )check "([^"]*)"$/ do |field|
  check(field)
end
  
When /^(?:|I )fill in "([^"]*)" with "([^"]*)"$/ do |field, value|
  fill_in(field, :with => value)
end

When /^(?:|I )go to (.+)$/ do |page_name|
  visit path_to(page_name)
end

When /^I select the following within (.*): (.*)$/ do |select_name, values|
  values.split(", ").each do |value|
    steps %Q{
      When I select "#{value}" within #{select_name}
    }
  end
end

When /^I select "([^"]*)" within (.*)$/ do |value, select_name|
  select_box = page.find(select_name)
  select_box.select(value)
end

Then /^(?:|I )should be on (.+)$/ do |page_name|
  current_path = URI.parse(current_url).path
  if current_path.respond_to? :should
    current_path.should == path_to(page_name)
  else
    assert_equal path_to(page_name), current_path
  end
end

Then /^I should see the following: (.*)$/ do |text_vals|
  text_vals.split(", ").each do |text|
    steps %Q{
      I should see "#{text}"
    }
  end
end

Then /^(?:|I )should see "([^"]*)"$/ do |text|
  if page.respond_to? :should
    page.should have_content(text)
  else
    assert page.has_content?(text)
  end
end

Then /^(?:|I )should not see "([^"]*)"$/ do |text|
  if page.respond_to? :should
    page.should have_no_content(text)
  else
    assert page.has_no_content?(text)
  end
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
