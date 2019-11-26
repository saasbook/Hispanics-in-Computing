Feature: Only when a user is logged in should they see certain tabs
 
  As a member in Hispanics in Engineering
  So that the group members' data is only accessible to others within the group
  When a user is not logged in, they should not be able to access pages with member data

@omniauth-test @clear-user-db
Scenario: I am a member of the slack group and login to add my information
  Given I am a member of the slack group
  And I login
  Then I should see "Add Information" within navbar-wrapper

@omniauth-test @clear-user-db
Scenario: I am not a member of the slack group and attempt to login but cannot add information
  Given I am not a member of the slack group
  And I login
  Then I should not see "Add Information" within navbar-wrapper
  