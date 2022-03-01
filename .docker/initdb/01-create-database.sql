CREATE DATABASE IF NOT EXISTS nodedb;

CREATE TABLE IF NOT EXISTS people(
    id int not null auto_increment,
    name varchar(255),
    primary key(id)
);

INSERT INTO people(name) values('Wesley');
INSERT INTO people(name) values('Luis');
INSERT INTO people(name) values('Ricardo');
INSERT INTO people(name) values('Pedro');