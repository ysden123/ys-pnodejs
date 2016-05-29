Feature: Calculate

  Scenario: Add two numbers
    Given the input "2+2"
    When the calculator is run
    Then the output should be "4"

  Scenario: Subtract two numbers
    Given the input "9-4"
    When the calculator is run
    Then the output should be "5"
    
  Scenario: Add two negative numbers
    Given the input "-4-5"
    When the calculator is run
    Then the output should be "-9"
 
#  Scenario: Add two negative numbers
#    Given the input "-4-5"
#    When the calculator is run
#    Then the output should be "-11"
