DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE employee (
 id INT NOT NULL auto_increment,
 first_name varchar(30) NULL,
 last_name varchar(30) null,
 role_id INT FOREIGN KEY,
 manager_id INT FOREIGN key ,

PRIMARY KEY (id)

);

CREATE TABLE role (
     id INT NOT NULL auto_increment,
     title VARCHAR(30) NULL,
     salary VARCHAR(30) NULL,
     department_id INT FOREIGN KEY
    PRIMARY KEY (id)
    
    );

CREATE TABLE department (
    id INT NOT NULL auto_increment,
    name VARCHAR(30)
    PRIMARY KEY (id)
);
