--Crear TABLA LUGAR
CREATE TABLE CONTINENTE
(	IdContinente INT IDENTITY(1,1) NOT NULL,
    NombreContinente VARCHAR(15) NOT NULL,
	PRIMARY KEY (IdContinente),
	UNIQUE(IdContinente));

--Crear TABLA LUGAR
CREATE TABLE LUGAR
(	IdLugar INT IDENTITY(1,1) NOT NULL,
    IdContinente INT,
    Pais VARCHAR(25) NOT NULL,
	Region VARCHAR(25),
	Provincia VARCHAR(25),
	PRIMARY KEY (IdLugar),
	UNIQUE(IdLugar),
	FOREIGN KEY (IdContinente) REFERENCES CONTINENTE(IdContinente));

--Crear TABLA CENTRO HOSPITALARIO
CREATE TABLE CENTRO_HOSPITALARIO
(	IdCentroHospitalario INT IDENTITY(1,1) NOT NULL,
    NombreHospital VARCHAR(30) NOT NULL,
	Director VARCHAR(30),
	Contacto VARCHAR(15),
	IdLugar INT,
	Camas INT,
	CamasUCI INT,
	PRIMARY KEY (IdCentroHospitalario),
	UNIQUE (IdCentroHospitalario),
	FOREIGN KEY (IdLugar) REFERENCES LUGAR(IdLugar));

--Crear TABLA PATOLOGIA
CREATE TABLE PATOLOGIA
(	IdPatologia INT IDENTITY(1,1) NOT NULL,
    NombrePatologia VARCHAR(15) NOT NULL,
	Descripcion VARCHAR(40),
	Sintomas VARCHAR(40),
	Tratamiento VARCHAR(40),
	PRIMARY KEY (IdPatologia),
	UNIQUE (IdPatologia));

--Crear TABLA ESTADO DEL PACIENTE
CREATE TABLE ESTADO
(	IdEstado INT IDENTITY(1,1) NOT NULL,
	Estado VARCHAR(15) NOT NULL,
	PRIMARY KEY (IdEstado),
	UNIQUE (IdEstado));

--Crear TABLA MEDICAMENTO
CREATE TABLE MEDICAMENTO
(	IdMedicamento INT IDENTITY(1,1) NOT NULL,
    Medicamento VARCHAR(25) NOT NULL,
	CasaFarmaceutica VARCHAR(25) NOT NULL,
	PRIMARY KEY (IdMedicamento),
	UNIQUE (IdMedicamento));

--Crear TABLA PACIENTE
CREATE TABLE PACIENTE
(	NombrePaciente VARCHAR(30) NOT NULL,
	Apellidos VARCHAR(40) NOT NULL,
	IdPaciente INT IDENTITY(1,1),
	NumIdentificacion VARCHAR(15) NOT NULL, --PK
	Edad INT,
	IdLugar INT,
	Nacionalidad VARCHAR(20),
	IdEstado INT,
	IdContactos VARCHAR(50),
	Email VARCHAR(30),
	Internado  CHAR, --N: normal U: uci
	IdPatologias VARCHAR(50),
	IdMedicamentos VARCHAR(50),
	PRIMARY KEY (NumIdentificacion),
	UNIQUE (NumIdentificacion),
    FOREIGN KEY (IdLugar) REFERENCES LUGAR(IdLugar),
   	FOREIGN KEY (IdEstado) REFERENCES ESTADO(IdEstado));

--Crear TABLA CONTACTO
CREATE TABLE CONTACTO
(	IdContacto INT IDENTITY(1,1) NOT NULL,
    IdPaciente INT,
    NombreContacto VARCHAR(30),
	Apellidos VARCHAR(30),
	NumIdentificacionContacto VARCHAR(20) NOT NULL,
	Edad INT,
	IdLugar INT,
	Nacionalidad VARCHAR(30),
	Email VARCHAR(30),
	IdPatologia VARCHAR (50),
	PRIMARY KEY (IdContacto),
	UNIQUE (IdContacto),
	FOREIGN KEY (IdPaciente) REFERENCES PACIENTE(IdPaciente),
	FOREIGN KEY (IdLugar) REFERENCES LUGAR(IdLugar));

--Crear TABLA ESTADO DEL PACIENTE
CREATE TABLE ESTADO_PACIENTE
(	IdEstadoPaciente INT IDENTITY (1,1),
    IdPaciente INT,
	IdEstado INT,
	PRIMARY KEY(IdEstadoPaciente),
	FOREIGN KEY (IdPaciente) REFERENCES PACIENTE(IdPaciente),
	FOREIGN KEY (IdEstado) REFERENCES ESTADO(IdEstado));

--Crear TABLA REPORTES DE CASOS
CREATE TABLE REPORTES_CASOS
(	IdReportesCasos INT IDENTITY (1,1),
    IdLugar INT,
	Fecha datetime NOT NULL,
	CasosNuevos INT,
	Muertes INT,
	PRIMARY KEY (IdReportesCasos),
	FOREIGN KEY (IdLugar) REFERENCES LUGAR(IdLugar));

--Crear TABLA REPORTES DE CASOS
CREATE TABLE REPORTES_ESTADOS
(	IdReportesEstados INT IDENTITY (1,1),
    IdLugar INT,
	Contagiados INT,
	Recuperados INT,
	Muertos INT,
	Activos INT,
	PRIMARY KEY (IdReportesEstados),
	FOREIGN KEY (IdLugar) REFERENCES LUGAR(IdLugar));

--Crear TABLA MEDIDA SANITARIA
CREATE TABLE MEDIDA_SANITARIA
(	IdMedidaSanitaria INT IDENTITY(1,1) NOT NULL,
    NombreMedida VARCHAR(30) NOT NULL,
	Descripcion VARCHAR(50) NOT NULL,
	PRIMARY KEY (IdMedidaSanitaria),
	UNIQUE (IdMedidaSanitaria));

--Crear TABLA MEDIDAS SANITARIAS POR PAIS
CREATE TABLE MEDIDAS_PAIS
(	IdMedidasPais INT IDENTITY (1,1),
    IdLugar INT,
	IdMedidaSanitaria INT,
	Fecha DATE,
	PRIMARY KEY (IdMedidasPais),
    FOREIGN KEY (IdLugar) REFERENCES LUGAR(IdLugar),
    FOREIGN KEY (IdMedidaSanitaria) REFERENCES MEDIDA_SANITARIA(IdMedidaSanitaria));


