CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user (
	id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT age_check CHECK (age >= 13),
    PRIMARY KEY (id)
);

CREATE TABLE post (
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user (id)
);

INSERT INTO user 
(id, age, name, email, followers, following)  
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gmail.com", 200, 200),
(3, 16, "casey", "casey@email.com", 300, 306),
(4, 17, "donald", "donald@gmail.com", 200, 105);

SELECT * FROM user WHERE followers >= 200;
SELECT name, followers FROM user WHERE followers >= 200;
SELECT name, age FROM user WHERE age < 16;
SELECT name, age FROM user WHERE age + 1 = 18;

SELECT name, age, followers 
FROM user 
WHERE age > 15 AND followers > 200;

SELECT name, age, followers 
FROM user 
WHERE age > 15 OR followers > 200;

SELECT name, age 
FROM user 
WHERE age BETWEEN 15 AND 17;

SELECT name, email
FROM user 
WHERE email IN ("donald@gmail.com", "bob123@gmail.com", "abc@gmail.com");

SELECT name, age
FROM user 
WHERE age NOT IN (14, 16);


