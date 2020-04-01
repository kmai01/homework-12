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
  database: "employeedb"
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
          "Update Employee Role",
          "Add Department",
          "Add Role"
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

        case "Add Department":
        addDepartMent();
        break;

        case "Add Role":
          addRole();
          break;
          

        }
      });
 }

  function viewAll() {
    var query = "SELECT * FROM employee";
    connection.query(query, function(err,res) {
      if (err) throw err;
        console.log("   Employee ID  |   First Name   |   Last Name   |  Role ID | Manager ID")
      for (var i = 0; i < res.length; i++) {
        console.log("         " + res[i].id + "       |    " + res[i].first_name + "        |    " + res[i].last_name + "       |   " 
        + res[i].role_id + "      |   "  + res[i].manager_id
        )
      }
     start();
    });
    
  }
  
  function addEmployee() {
    inquirer
    .prompt([
      {
        name:"first_name",
        type:"input",
        message: "Enter the employee's first name"
      },

      {
        name:"last_name",
        type:"input",
        message:"Enter the employee's last name"

      },

      {
        name:"role_id",
        type:"input",
        message:"Enter the employee's role id"

      },

      {
        name:"manager_id",
        type:"input",
        message:"Enter the employee's manager id"

      }

    
      ]).then(function(answer) {

        connection.query(

      "INSERT INTO employee SET ?",
      {
        first_name: answer.first_name,
        last_name: answer.last_name,
        role_id: answer.role_id,
        manager_id: answer.manager_id


      },
      function(err) {
        if(err) throw err;
        console.log("Insert was created successfully!")
        start();
      }
        );
    });
  }

  function addDepartMent() 
     {
    inquirer
    .prompt([
      {
        name:"name",
        type:"input",
        message: "Enter the department name"
      },

    ]).then(function(answer) {

      connection.query(

    "INSERT INTO department SET ?",
    {
      name: answer.name,
    },
    function(err) {
      if(err) throw err;
      console.log("Department was created successfully!")
      start();
    }
      );
  });
}

function addRole() {
  inquirer
  .prompt([
    {
      name:"title",
      type:"input",
      message: "Enter the employee's title"
    },

    {
      name:"salary",
      type:"input",
      message:"Enter the employee's salary"

    },

    {
      name:"department_id",
      type:"input",
      message:"Enter the employee's deparment id"

    }

    ]).then(function(answer) {

      connection.query(

    "INSERT INTO roles SET ?",
    {
      title: answer.title,
      salary: answer.salary,
      department_id: answer.department_id,
    
    },
    function(err) {
      if(err) throw err;
      console.log("Role was created successfully!")
      start();
    }
      );
  });
}



