-- To put into MySQL:
-- mysql -u reaction --password=nyuhack2018 ReAction < schema.sql

-- DROP SCHEMA IF EXISTS `ReAction`;

CREATE SCHEMA IF NOT EXISTS `ReAction` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `ReAction` ;

-- -----------------------------------------------------
-- Table `ReAction`.`Users`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `ReAction`.`Users` (
  `uid` INT NOT NULL AUTO_INCREMENT, -- user id
  `user` VARCHAR(20) NOT NULL UNIQUE , -- username
  `pass` VARCHAR(60) NOT NULL , -- password using bcrypt results in 60 char hashes
  `utype` ENUM('donor', 'volunteer') NOT NULL , -- user type
  `fname` VARCHAR(20) NOT NULL , -- first name
  `lname` VARCHAR(20) NOT NULL , -- last name
  `phone` CHAR(10) NULL , -- phone number
  `email` VARCHAR(320) NOT NULL UNIQUE , -- email address
  `regtime` DATETIME NOT NULL, -- register time
  PRIMARY KEY (`uid`) )
ENGINE = InnoDB;

