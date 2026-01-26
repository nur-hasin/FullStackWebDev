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

SELECT id, name, email FROM user;
SELECT * FROM user;
SELECT DISTINCT age FROM user;

INSERT INTO post 
(id, content, user_id)  
VALUES
(101, "Hello World", 3),
(102, "Bye Bye", 1),
(103, "Hello Delta", 3);

SELECT * FROM post;


INSERT INTO user 
(id, age, name, email, followers, following)  
VALUES
(5, 14, "eve", "eve@yahoo.in", 400, 145),
(6, 16, "jack", "jack@gmail.com", 10000, 1000);


SET SQL_SAFE_UPDATES = 0;

UPDATE user
SET followers = 600
WHERE age = 16;


DROP TABLE post;

DELETE FROM user
WHERE age = 14;


ALTER TABLE user
ADD COLUMN city VARCHAR(20) DEFAULT "Dhaka";

ALTER TABLE user
DROP COLUMN age;

ALTER TABLE user
RENAME TO insta_user;

SELECT * FROM insta_user;

ALTER TABLE insta_user
RENAME TO user;

ALTER TABLE user
CHANGE COLUMN followers subs INT DEFAULT 0;

ALTER TABLE user
MODIFY subs INT DEFAULT 10;

INSERT INTO user
(id, name, email, following)  
VALUES
(7, "rock", "rock@yahoo.in", 120);


TRUNCATE TABLE user;



SELECT * FROM user;