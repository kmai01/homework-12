DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department (
    Id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (Id)
);

CREATE TABLE roles (
     Id INT NOT NULL AUTO_INCREMENT,
     title VARCHAR(30) NULL,
     salary VARCHAR(30) NULL,
     Department_ID INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id)
    
    );

CREATE TABLE employee (

 Id INT NOT NULL AUTO_INCREMENT,
 first_name varchar(30) NULL,
 last_name varchar(30) NULL,
 Role_ID INT NOT NULL,
 FOREIGN KEY(Role_Id) REFERENCES roles(Id),
 Manager_ID INT NOT NULL,
 FOREIGN KEY(Manager_ID) REFERENCES department(Id),
PRIMARY KEY(Id)

);




