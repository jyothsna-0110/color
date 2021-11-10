Feature: login to SmartOps

    Feature Description : login to SmartOps and
    verifies the elements project listing and create new project
    logout from SmartOps

    Scenario: login into smartOps
        Given admin navigates to the SmartOps
        Then admin enters the username
        Then admin enters the password
        Then admin click on submitt button

    Scenario Outline:  verifying the elements
        Then admin verifies the project listing element is present or not
        And admin verifies the edit configuration element is present or not  
        Then admin selects the project name as "<projectName>"
        And admin clicks on project
    #     And admin clicks on alerts
    #     And admin clicks on filter by severity and selects the severity level as "<severityLevel>" 
        And admin clicks on tickets
    Examples:
        | projectName   | severityLevel | 
        | Automation_S1 |  Warning      | 
