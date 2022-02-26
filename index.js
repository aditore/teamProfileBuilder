//dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//employee array
const employee = [];

//inquirer function
function addEmployee() {
    //all roles include
    inquirer.prompt([{
        type: 'input',
        message: 'State the employee name',
        name: 'name',
    },
    {
        type: 'list',
        message: 'Please assign employee role',
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ],
        name: 'role',
    },
    {
        type: 'input',
        message: 'Enter the employee ID',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please enter the employee email address',
        name: 'email',
    }])
    //depending on selection another prompt will show
    .then(function({name, role, id, email}) {
        let roleType = '';
        if(role === 'Manager') {
            roleType = 'office phone number';
        } else if(role === 'Engineer') {
            roleType = 'GitHub username';
        } else {
            roleType = 'school'
        }
        //additional employee info
        inquirer.prompt([{
            type: 'input',
            message: `Enter employee ${roleType}`,
            name: 'roleType',
        },
        {
            //add another employee event
            type: 'list',
            message: 'Are there any more employees to add to your team?',
            choices: [
                'YES',
                'NO',
            ],
            name: 'nextEmployee',
        }])
        .then(function({roleType, nextEmployee}) {
            let newEmployee;
            if(role === 'Manager') {
                newEmployee = new Manager(name, id, email, roleType);
            } else if( role === 'Engineer') {
                newEmployee = new Engineer(name, id, email, roleType);
            } else {
                newEmployee = new Intern(name, id, email, roleType);
            }
            employee.push(newEmployee)
            //need to add to HTML file

            .then(function() {
                if(nextEmployee === 'YES') {
                    addEmployee();
                } else {
                    //stop function call and add/finish HTML
                }
            });
        });
    });
}

//html writefile
function baseHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">
        <title>teamProfileBuilder</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark">
            <h1 class="navbar-brand mb-0 w-100 text-center">Generated Team Profile</h1>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile('./dist/builtTeam.html', html, (err) => {
        if(err) {
            throw(err);
        }
    });
    console.log('Base HTML added');
}

function endHTML() {
    const html = `  </div>
    </div>
</body>
</html>`;
    fs.appendFile('./dist/builtTeam.html', html, (err) => {
        if(err) {
            throw(err);
        }
    });
}