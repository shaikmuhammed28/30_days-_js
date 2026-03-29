    CREATE DATABASE school;

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INT
);

INSERT INTO students (name, age)
VALUES ('Rahul', 20);

SELECT * FROM students;