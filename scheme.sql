DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE employee (
 id INT NOT NULL auto_increment,
 first_name varchar(30) NULL,
 last_name varchar(30) null,
 role_id INT FOREIGN KEY,
 manager_id INT FOREIGN key ,

PRIMARY KEY (id),

)};
