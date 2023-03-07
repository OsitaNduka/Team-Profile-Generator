# Team-Profile-Generator

## Description

This Node.js command-line application will take in information about employees on a software engineering team, and then generate an HTML webpage that displays summaries for each person's basic information.  This makes it easy to have quick access to their emails and Github profiles.

The Team-Profile-Generator have classes for each team member which will be exported for tests from the "_test_" directory. The first class the parent class "Employee" have these properties and methods:

1. name

2. id

3. email

4. getName()

5. getId()

6. getEmail()

7. getRole()—returns 'Employee'

The Parent class "Employee" will be extended/added other three classes, "Manager, Engineer and Intern".  In addition to "Employee"s properties and methods, each class has it's own properties and methods.  The "Manager"s class have the following:

1. officeNumber

2. getRole()—overridden to    return 'Manager'

The "Engineer"s class properties and methods:

1. github—GitHub username

2. getGithub()

3. getRole()—overridden to return 'Engineer'

The "Intern"s class have the following:

1. school

2. getSchool()

3. getRole()—overridden to return 'Intern'