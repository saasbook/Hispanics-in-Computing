Feature: When a user submits the update information form, they should
         be able to see their new information

  As a member in Hispanics in Engineering
  So that I can keep my information up to date
  I should be able to modify my information on the update profile page

Background: User logs in
  Given I am a member of the slack group
  And I login
  And I go to the add information page

@omniauth-test @clear-user-db
Scenario: Modify information and press save changes
  Given I enter the following in the form:
  | current_user[first_name] | current_user[last_name] |
  | Newfirst                 | Newlast                 |
  Then I press "Save Changes"
  Then I should be on the profile page
  And I should see the following: Newfirst, Newlast

@omniauth-test @clear-user-db
Scenario: Add information to map without adding a location
  Given I enter the following in the form:
  | current_user[location] |
  | Berkeley               |
  And I check "current_user[map_visibility]"
  Then I press "Save Changes"
  Then I should be on the profile page
  And I should not see "Not Visible on Map"

@omniauth-test @clear-user-db
Scenario: Add information to map without adding a location
  Given I check "current_user[map_visibility]"
  Then I press "Save Changes"
  Then I should be on the profile page
  And I should see "Not Visible on Map"
  And I should see "Unable to add pin to map"