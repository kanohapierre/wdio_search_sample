Feature: Search on DuckDuckGo

  Scenario Outline: As a user, I can search information on DuckDuckGo

    Given I am on the search page
    When I search the word <searchText>
    Then I should see a browser title containing <title>
    And I should see a Sonepar displayed in <message>

    Examples:
      | searchText | title   | message |
      | sonepar    | sonepar | Sonepar |