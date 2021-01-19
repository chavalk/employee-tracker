var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Culorico19*",
    database: "employee_trackerDB"
});

connection.connect(function(err) {
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
                "View departments"
            ]
        })
        .then(function(answer) {
            switch (answer.action) {
            case "View employees":
                employeesSearch();
                break;
            }
        });
}

function employeesSearch() {
    var query = "SELECT e.id, first_name, last_name, title, salary FROM employee AS e LEFT JOIN role AS r ON e.role_id = r.id;";
    connection.query(query, function(err, res) {
        console.log(res);
    })
}