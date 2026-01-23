CREATE DATABASE college;
create database xyz_company;

DROP DATABASE xyz_company;

USE college;

CREATE TABLE student (
    roll_no INT,
    name VARCHAR(30),
    age INT
);

INSERT INTO student (roll_no, name, age) 
VALUES (101, 'adam', 23), (102, 'bob', 25);

SELECT * FROM student;


CREATE DATABASE IF NOT EXISTS instagram;

DROP DATABASE IF EXISTS instagram;

SHOW DATABASES;

USE college;
SHOW TABLES;


