# Team-Profile-Generator

## Description

This Node.js command-line application will take in information about employees on a software engineering team, and then generate an HTML webpage that displays summaries for each person's basic information. 

This makes it easy to have quick access to their emails and Github profiles.

The Team-Profile-Generator have classes for each team member which will be exported for tests from the _test_ directory. The first class the parent class "Employee" has these properties and methods:

name

id

email

getName()

getId()

getEmail()

getRole()—returns 'Employee'

The Parent class "Employee" will be extended/added other three classes, "Manager, Engineer and Intern".  In addition to "Employee"s properties and methods, each class has it's own properties and methods.  The "Manager" class has the following:

officeNumber

getRole()—overridden to return 'Manager'

The "Engineer" class properties and methods:

github—GitHub username

getGithub()

getRole()—overridden to return 'Engineer'
