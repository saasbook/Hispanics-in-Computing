Feature: When a user logs out, they should no longer have access to the member only pages

  As a member in Hispanics in Engineering
  So that the group members' data is only accessible to others within the group
  When a user logs out, they should not be able to access pages with member data

Background: User logs in, then logs out
  Given I am a member of the slack group
  When I login
  Then I logout

@omniauth-test @clear-user-db
Scenario: Cannot access the "Add Information", "View Profile", and "Log out" links
  Then I should be on the members page
  And I should see "Logout successful" within alert
  Then I should not see "Add Information" within navbar-wrapper
  And I should not see "View Profile" within navbar-wrapper
  And I should not see the log out button
  And I should see "Members Login" within navbar-wrapper

@omniauth-test @clear-user-db
Scenario: Cannot access the "add_info" page
  When I go to the add information page
  Then I should be on the members page
  And I should see "You must login to gain access to that page" within alert

@omniauth-test @clear-user-db
Scenario: Cannot access the "get_info" page
  When I go to the profile page
  Then I should be on the members page
  And I should see "You must login to gain access to that page" within alert
