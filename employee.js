var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "",
    database: "employee_trackerDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View employees",
                "View roles",
                "View departments",
                "Add employee",
                "Add role"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View employees":
                    employeesSearch();
                    break;

                case "View roles":
                    rolesSearch();
                    break;

                case "View departments":
                    depSearch();
                    break;

                case "Add employee":
                    addEmployee();
                    break;

                case "Add role":
                    addRole();
                    break;
            }
        });
}

function employeesSearch() {
    var query = "SELECT e.id, first_name, last_name, title, salary FROM employee AS e LEFT JOIN role AS r ON e.role_id = r.id;";
    connection.query(query, function (err, res) {
        console.table(res);
        runSearch();
    })
}

function rolesSearch() {
    var query = "SELECT r.id, title, salary, name AS department FROM role AS r LEFT JOIN department AS d ON r.department_id = d.id;";
    connection.query(query, function (err, res) {
        console.table(res);
        runSearch();
    })
}

function depSearch() {
    var query = "SELECT * FROM department;";
    connection.query(query, function (err, res) {
        console.table(res);
        runSearch();
    })
}

function addEmployee() {
    inquirer
        .prompt([
            {
                name: "first",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "last",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "role",
                type: "list",
                message: "What is the employee's role?",
                choices: [
                    "Lead Engineer",
                    "Engineer",
                    "Lead Sales",
                    "Sales",
                    "Lead Accountant",
                    "Accountant"
                ]
            }
        ]).then(function (answer) {
            connection.query("SELECT * FROM role WHERE ?", { title: answer.role }, function (err, res) {
                var roleId = res[0].id;
                connection.query("INSERT INTO employee SET ?",
                    {
                        first_name: answer.first,
                        last_name: answer.last,
                        role_id: roleId
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("The employee was added successfully!");
                        runSearch();
                    }
                )
            })
        })
}

function addRole() {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the title of the role?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary of the role?"
            },
            {
                name: "department",
                type: "list",
                message: "Which department does the role fall under?",
                choices: [
                    "Engineering",
                    "Sales",
                    "Finance"
                ]
            }
        ]).then(function (answer) {
            connection.query("SELECT * FROM department WHERE ?", { name: answer.department }, function (err, res) {
                var depId = res[0].id;
                connection.query("INSERT INTO role SET ?",
                    {
                        title: answer.title,
                        salary: answer.salary,
                        department_id: depId
                    },
                    function(err) {
                        if (err) throw err;
                        console.log("The role was added successfully!");
                        runSearch();
                    }
                )
            })
        })
}