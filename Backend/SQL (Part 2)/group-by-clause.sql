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

INSERT INTO user 
(id, age, name, email, followers, following)  
VALUES
(5, 14, "eve", "eve@yahoo.in", 400, 145),
(6, 16, "jack", "jack@gmail.com", 10000, 1000);

SELECT age, count(id)
FROM user
GROUP BY age;

SELECT age, max(followers)
FROM user
GROUP BY age;