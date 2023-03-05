CREATE USER :USERNAME WITH PASSWORD ':PASSWORD';
CREATE DATABASE :DB;

\c :DB

CREATE TABLE USERS(
    firstName   VARCHAR(255),
    lastName   VARCHAR(255),
    passw   VARCHAR(255),
    email   VARCHAR(255),
    instagram   VARCHAR(255)
);

CREATE TABLE TRIP(
    email           VARCHAR(255),
    destination     POINT,
    origin          POINT,
    starttime       timestamp,
    instagram       timestamp
);