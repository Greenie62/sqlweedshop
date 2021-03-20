DROP DATABASE weedstoredb;

CREATE DATABASE weedstoredb;

USE weedstoredb;


CREATE TABLE weed(
    id SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    weedname VARCHAR(200),
    price SMALLINT,
    quantity SMALLINT,
    rolled BOOLEAN DEFAULT false,
    is_indica BOOLEAN DEFAULT false
);



CREATE TABLE smoker(
    id SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(200),
    balance SMALLINT,
    password VARCHAR(200),
    prefers_indica BOOLEAN DEFAULT false
);

