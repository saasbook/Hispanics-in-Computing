Feature: Only when a user is logged in should they see certain tabs
 
  As a member in Hispanics in Engineering
  So that the group members' data is only accessible to others within the group
  When a user is not logged in, they should not be able to access pages with member data

@omniauth-test @clear-user-db
Scenario: I am a member of the slack group and login to add my information
  Given I am a member of the slack group
  When I login
  Then I should see "Edit Profile" within navbar-wrapper

@omniauth-test @clear-user-db
Scenario: I am a member of the slack group and want to log out
  Given I am a member of the slack group
  When I login
  Then I should see the log out button

@omniauth-test @clear-user-db
Scenario: I am not a member of the slack group and attempt to login but cannot add information
  Given I am not a member of the slack group
  When I login
  Then I should not see "Edit Profile" within navbar-wrapper

@omniauth-test @clear-user-db
Scenario: I am not a member of the slack group and attempt to login but cannot add information
  Given I am not a member of the slack group
  When I login
  Then I should not see the log out button
@omniauth-test @clear-user-db
Scenario: I am not a member of the slack group and attempt to login but cannot
  Given I am not a member of the slack group
  When I login
  Then I should not see the log out button

@omniauth-test @clear-user-db
Scenario: I am not a member of the slack group and attempt to login but cannot so the menu should not change
  Given I am not a member of the slack group
  When I login
  Then I should see "Members Login" within navbar-wrapper

@clear-user-db
Scenario: Deny access to add_info page if not logged in
  When I go to the add information page
  Then I should be on the members page

  