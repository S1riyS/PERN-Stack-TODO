CREATE DATABASE awesome_todo;

CREATE TABLE todo
(
    id          SERIAL PRIMARY KEY,
    description VARCHAR(255)
);