CREATE DATABASE fullcycle;
use fullcycle;

CREATE TABLE people (
    PeopleID int not null AUTO_INCREMENT,
    Name varchar(100) not null,
    PRIMARY KEY (PeopleID)
);