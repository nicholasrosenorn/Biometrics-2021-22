CREATE DATABASE garminData;
CREATE TABLE garminData.user(
    ID int NOT NULL,
	username varchar(100),
    userPassword varchar(100),
    firstName varchar(100),
    lastName varchar(100),
	DateOfBirth varchar(10),
	BiologicalSex varchar(1),
   PRIMARY KEY (ID)
);
CREATE TABLE garminData.BioData(
    ID int NOT NULL PRIMARY KEY,
    minHeartRate int,
    maxHeartRate int,
    restingHeartRate int,
    lastSevenDaysAvgRestingHeartRate int
);
CREATE TABLE garminData.instructions(
    ID int NOT NULL PRIMARY KEY,
    instructions varchar(100)
    );
