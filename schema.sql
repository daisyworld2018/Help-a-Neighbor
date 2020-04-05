
DROP DATABASE IF EXISTS HelpMyNeighbors;

CREATE DATABASE HelpMyNeighbors;

USE HelpMyNeighbors;

CREATE TABLE seekers (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(100) NOT NULL,
  location_city varchar(100) NOT NULL,
  location_state varchar(100) NOT NULL,
  zip_code INT NOT NULL,
  lat FLOAT NOT NULL,
  lng FLOAT NOT NULL,
  contact_info varchar(1000) NOT NULL,
  i_need varchar(2000) NOT NULL,
  notes varchar(2000) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE helpers (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(100) NOT NULL,
  location_city varchar(100) NOT NULL,
  location_state varchar(100) NOT NULL,
  zip_code INT NOT NULL,
  lat FLOAT NOT NULL,
  lng FLOAT NOT NULL,
  contact_info varchar(1000) NOT NULL,
  i_can varchar(2000) NOT NULL,
  notes varchar(2000) NOT NULL,
  PRIMARY KEY (id)
);

/* mysql -u root < schema.sql