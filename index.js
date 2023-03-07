const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Array of questions
// function to initialize program

const  generateTeam = [];

const addManager = () => {
    return (
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the team manager?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'WHat is the email of the team manager?',
        },
        {
            type: 'input',
            name: 'office number',
            message: 'What is the office number of the team manager?',
        },
        

    ])
    .then(answer => {
        const manager = new Manager(
            answer.name,
            answer.id,
            answer.email,
            answer.officeNumber,
        );
         generateTeam.push(manager)
         addEmployee();
    })
    );
};
    
const addIntern = () => {
    return (
        inquirer.prompt([
        
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the intern?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the intern?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school of the intern?'
        },
    ])
    .then((answer) => {
        const intern = new Intern(
            answer.name,
            answer.id,
            answer.email,
            answer.school,
        );
        generateTeam.push(intern);
    })
    );
};

const addEngineer = () => {
        return(
            inquirer.prompt([
        {
            name: 'github',
            type: 'input',
        },
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the engineer?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the engineer?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the engineer?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'what is the github username of the engineer?',
        },
    ])
    .then((answer) => {
        const engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
    );
    generateTeam.push(engineer);
    addEmployee();
    })
    );
};

const addEmployee = () => {
    return (
        inquirer.prompt([
            {
                type: 'list',
                name: 'employee',
                message: 'Which type of team member would you like to add?',
                choices: ["Add an engineer", "Add an intern", "Finish buiding team"]
            },
        ])
    .then((options) => {
        if (options.employee === "Engineer") {
            addEngineer();
        }

        else if (options.employee === "Intern") {
            addIntern();
        }
        else {
          MakeTeam();  
        }
    })
    );
};
      function MakeTeam() {
        if (!fs.existsSync(OUTPUT_DIR)){
            fs.mkdirSync(OUTPUT_DIR);
        }
      
    
     fs.writeFile(outputPath, render(generateTeam), 'utf-8',function(err,file){
            
                console.log ('build my team');
     }
    )};
   function init() {
    addManager();
   }; 

init();