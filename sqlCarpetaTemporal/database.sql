CREATE DATABASE FURBO;
CREATE TABLE Pais(
    codSiglas VARCHAR(3) NOT NULL PRIMARY KEY,
    nombrePais VARCHAR(25) NOT NULL UNIQUE
);

CREATE TABLE equipo( 
    codSiglas VARCHAR(3) NOT NULL, 
    FOREIGN KEY (codSiglas) REFERENCES Pais(codSiglas),
    PRIMARY KEY(codSiglas),
    eslogan VARCHAR(100) NOT NULL,
    nombreDT VARCHAR(50) NOT NULL
);

CREATE TABLE confederacion (
    nombreConf VARCHAR(20) NOT NULL PRIMARY KEY,
    region VARCHAR(20) NOT NULL
);

CREATE TABLE arbitro(
    codArbitro INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombreArbitro VARCHAR(50) NOT NULL,
    codSiglas VARCHAR(3) NOT NULL, 
    FOREIGN KEY (codSiglas) REFERENCES Pais(codSiglas)
);

CREATE TABLE hotel(
    codHotel INT NOT NULL PRIMARY KEY,
    nombreHotel VARCHAR(40) NOT NULL,
    direccion VARCHAR(100) NOT NULL
):
