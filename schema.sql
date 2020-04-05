
DROP DATABASE IF EXISTS HelpMyNeighbors;

CREATE DATABASE HelpMyNeighbors;

USE HelpMyNeighbors;

CREATE TABLE seekers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  location_city varchar(100) NOT NULL,
  location_state varchar(100) NOT NULL,
  zip_code INT NOT NULL,
  lat_long varchar(100) NOT NULL,
  contact_info varchar(100) NOT NULL,
  i_need varchar(100) NOT NULL,
  notes varchar(1000) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE helpers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  location_city varchar(100) NOT NULL,
  location_state varchar(100) NOT NULL,
  zip_code INT NOT NULL,
  lat_long varchar(100) NOT NULL,
  contact_info varchar(100) NOT NULL,
  i_can varchar(100) NOT NULL,
  notes varchar(1000) NOT NULL,
  PRIMARY KEY (id)
);