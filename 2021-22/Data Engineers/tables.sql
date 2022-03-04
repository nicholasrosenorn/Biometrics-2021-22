CREATE TABLE `user` (
  `ID` int PRIMARY KEY NOT NULL,
  `username` varchar(100),
  `userPasswordHash` varchar(255),
  `userPasswordSalt` varchar(255),
  `firstName` varchar(255),
  `lastName` varchar(255),
  `dateOfBirth` datetime,
  `biologicalSex` char
);

CREATE TABLE `BiologicalSex` (
  `sex` char PRIMARY KEY NOT NULL
);

CREATE TABLE `BioData` (
  `userID` int NOT NULL,
  `timestamp` datetime NOT NULL,
  `minHeartRate` int,
  `maxHeartRate` int,
  `deltaTimeSeconds` int,
  PRIMARY KEY (`userID`, `timestamp`)
);

CREATE TABLE `templates` (
  `ID` int PRIMARY KEY,
  `title` varchar(255),
  `createdOn` datetime,
  `modifiedOn` datetime,
  `createdBy` int
);

CREATE TABLE `template_instructions` (
  `ID` int NOT NULL,
  `projectID` int NOT NULL,
  `index` int,
  `instruction` varchar(255),
  PRIMARY KEY (`ID`, `projectID`)
);

CREATE TABLE `Project` (
  `projectID` int PRIMARY KEY,
  `title` varchar(255),
  `baseTemplate` int,
  `createdBy` int,
  `createdOn` datetime
);

CREATE TABLE `instructions` (
  `instructionNumber` int NOT NULL,
  `projectID` int,
  `index` int,
  `instruction` varchar(255),
  PRIMARY KEY (`instructionNumber`, `projectID`)
);

CREATE TABLE `batch` (
  `ID` int,
  `projectID` int,
  `experimenter` int,
  PRIMARY KEY (`ID`, `projectID`)
);

CREATE TABLE `compoundSummary` (
  `batchID` int,
  `matID` varchar(255),
  `compoundName` varchar(255),
  `lotNumber` varchar(255),
  `restestDate` datetime,
  `weightByWeight` float,
  `mgByUnit` float,
  `targetDispense` float,
  `actual` float,
  PRIMARY KEY (`batchID`, `matID`)
);

CREATE TABLE `readings_template` (
  `projectID` int,
  `reading_of` varchar(255),
  `associated_with_instruction` int,
  `measurement_unit` varchar(255),
  PRIMARY KEY (`projectID`, `reading_of`, `associated_with_instruction`)
);

CREATE TABLE `readings` (
  `batchID` int,
  `reading_of` varchar(255),
  `associated_with_instruction` int,
  `reading` float,
  `measurement_unit` varchar(255),
  PRIMARY KEY (`batchID`, `reading_of`, `associated_with_instruction`)
);

CREATE TABLE `Steps` (
  `batchID` int,
  `instructionNumber` int,
  `start_time` timestamp,
  `end_time` tempstamp,
  PRIMARY KEY (`batchID`, `instructionNumber`)
);

ALTER TABLE `batch` ADD FOREIGN KEY (`experimenter`) REFERENCES `user` (`ID`);

ALTER TABLE `readings_template` ADD FOREIGN KEY (`projectID`) REFERENCES `instructions` (`projectID`);

ALTER TABLE `readings_template` ADD FOREIGN KEY (`associated_with_instruction`) REFERENCES `instructions` (`instructionNumber`);

ALTER TABLE `readings` ADD FOREIGN KEY (`associated_with_instruction`) REFERENCES `instructions` (`instructionNumber`);

ALTER TABLE `readings` ADD FOREIGN KEY (`batchID`) REFERENCES `batch` (`ID`);

ALTER TABLE `Steps` ADD FOREIGN KEY (`batchID`) REFERENCES `batch` (`ID`);

ALTER TABLE `Steps` ADD FOREIGN KEY (`instructionNumber`) REFERENCES `instructions` (`instructionNumber`);

ALTER TABLE `user` ADD FOREIGN KEY (`biologicalSex`) REFERENCES `BiologicalSex` (`sex`);

ALTER TABLE `templates` ADD FOREIGN KEY (`createdBy`) REFERENCES `user` (`ID`);

ALTER TABLE `template_instructions` ADD FOREIGN KEY (`projectID`) REFERENCES `templates` (`ID`);

ALTER TABLE `BioData` ADD FOREIGN KEY (`userID`) REFERENCES `user` (`ID`);

ALTER TABLE `Project` ADD FOREIGN KEY (`baseTemplate`) REFERENCES `templates` (`ID`);

ALTER TABLE `Project` ADD FOREIGN KEY (`createdBy`) REFERENCES `user` (`ID`);

ALTER TABLE `instructions` ADD FOREIGN KEY (`projectID`) REFERENCES `Project` (`projectID`);

ALTER TABLE `batch` ADD FOREIGN KEY (`projectID`) REFERENCES `Project` (`projectID`);

ALTER TABLE `compoundSummary` ADD FOREIGN KEY (`batchID`) REFERENCES `batch` (`ID`);

