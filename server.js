var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employeeDB"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
  });

  function start() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View all employee",
          "View all employee by department",
          "View all employee by manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View all employee":
          viewAll();
          break;
  
        case "View all employee by department":
          viewAllByDepart();
          break;
  
        case "View all employee by manager":
            viewAllByManager();
          break;
  
        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employee":
            removeEmployee();
            break;
  
        case "Update Employee Role":
          updateEmployee();
          break;
        }
      });
  }