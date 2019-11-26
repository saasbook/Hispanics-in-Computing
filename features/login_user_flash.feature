Feature: When a user logs in/fails to log in a flash message should give the user an indication of what occured
 
  As a user of this website
  So that I can know if my log in was successful or not
  When I attempt to login I should see a message appear

@omniauth-test @clear-user-db
Scenario: I am not a member of the slack group and fail to login
  Given I am not a member of the slack group
  When I login
  Then I should be on the home page
  And I should see "Login unsuccessful: Please use the same email that you use for the Hispanics in Engineering Slack group" within alert

@omniauth-test @clear-user-db
Scenario: Show the success message if a slack group member logs in
  Given I am a member of the slack group
  When I login
  Then I should be on the home page
  And I should see "Login successful" within alert
