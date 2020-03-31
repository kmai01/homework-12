DROP DATABASE IF EXISTS employeedb;
CREATE DATABASE employeedb;

USE employeedb;

CREATE TABLE department (
    id UNIQUE NOT NULL AUTO_INCREMENTT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
     id INT UNIQUE NOT NULL AUTO_INCREMENT,
     title VARCHAR(30) NULL,
     salary VARCHAR(30) NULL,
     department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id)
    
    );

CREATE TABLE employee (

 id INT UNIQUE NOT NULL AUTO_INCREMENT,
 first_name varchar(30) NULL,
 last_name varchar(30) NULL,
 role_id INT NOT NULL,
 FOREIGN KEY(role_id) REFERENCES roles(id),
 manager_id INT NOT NULL,
 FOREIGN KEY(manager_id) REFERENCES department(id),
PRIMARY KEY(id)

); 