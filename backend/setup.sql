CREATE USER :USERNAME WITH PASSWORD ':PASSWORD';
CREATE DATABASE :DB;

\c :DB

CREATE TABLE USERS(
    firstName   VARCHAR(255) NOT NULL,
    lastName   VARCHAR(255) NOT NULL,
    passw   VARCHAR(255) NOT NULL,
    email   VARCHAR(255) NOT NULL,
    instagram   VARCHAR(255) NOT NULL
);

CREATE TABLE TRIP(
    email           VARCHAR(255) NOT NULL,
    destination     POINT NOT NULL,
    origin          POINT NOT NULL,
    starttime       timestamp NOT NULL,
    instagram       timestamp NOT NULL
);