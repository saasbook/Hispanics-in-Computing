require 'uri'
require 'cgi'

module WithinHelpers
  def with_scope(locator)
    locator ? within(*selector_for(locator)) { yield } : yield
  end
end
World(WithinHelpers)

# Single-line step scoper
When /^(.*) within (.*[^:])$/ do |step, parent|
  with_scope(parent) { steps("When #{step}") }
end

Given /I have logged in/ do
end

Given /I have (never )?logged in before/ do |never|

end

Then /my information is determined through my google profile/ do

end

Then /my information should not change/ do
  
end

Given /I press "(.*)"/ do |button|
  click_button(button)
end






