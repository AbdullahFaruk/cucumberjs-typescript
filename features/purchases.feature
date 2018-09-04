Feature: Purchase on the store

@CucumberScenario
Scenario Outline: Purchase an item on the shop

Given I am on the home page
When I type "<item keyword>" on the searchBox
And I add "<item keyword>" to the cart
And I follow the order process to checkout filling the shipping data
Then I see a success confirmation message
And I see a shipping confirmation message

  Examples:
    | item keyword | 
    |  Blouse                           | 
    |  Faded Short Sleeve T-shirts      |
    |  Failure pants                    | 