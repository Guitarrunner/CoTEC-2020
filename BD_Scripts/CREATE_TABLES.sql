--Crear TABLA LUGAR
CREATE TABLE CONTINENTE
(	IdContinente INT IDENTITY(1,1) NOT NULL,
    NombreContinente VARCHAR(30) NOT NULL,
	PRIMARY KEY (IdContinente),
	UNIQUE(IdContinente));


--Crear TABLA LUGAR
CREATE TABLE LUGAR
(	IdLugar INT IDENTITY(1,1) NOT NULL,
    IdContinente INT,
    Pais VARCHAR(30) NOT NULL,
	Estado VARCHAR(30),
	Region VARCHAR(30),
	Provincia VARCHAR(30),
	PRIMARY KEY (IdLugar),
	UNIQUE(IdLugar),
	FOREIGN KEY (IdContinente) REFERENCES CONTINENTE(IdContinente));

--Crear TABLA CENTRO HOSPITALARIO
CREATE TABLE CENTRO_HOSPITALARIO
(	IdCentroHospitalario INT IDENTITY(1,1) NOT NULL,
    NombreHospital VARCHAR(30) NOT NULL,
	Director VARCHAR(45),
	Contacto VARCHAR(30),
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
	Descripcion VARCHAR(50) NOT NULL,
	Sintomas VARCHAR(50) NOT NULL,
	Tratamiento VARCHAR(50) NOT NULL,
	PRIMARY KEY (IdPatologia),
	UNIQUE (IdPatologia));

--Crear TABLA ESTADO DEL PACIENTE
CREATE TABLE ESTADO
(	IdEstado INT IDENTITY(1,1) NOT NULL,
	Estado VARCHAR(35) NOT NULL,
	PRIMARY KEY (IdEstado),
	UNIQUE (IdEstado));

--Crear TABLA MEDICAMENTO
CREATE TABLE MEDICAMENTO
(	IdMedicamento INT IDENTITY(1,1) NOT NULL,
    Medicamento VARCHAR(40) NOT NULL,
	CasaFarmaceutica VARCHAR(40) NOT NULL,
	PRIMARY KEY (IdMedicamento),
	UNIQUE (IdMedicamento));

--Crear TABLA PACIENTE
CREATE TABLE PACIENTE
(	NombrePaciente VARCHAR(30) NOT NULL,
	Apellidos VARCHAR(50) NOT NULL,
	NumIdentificacion BIGINT NOT NULL, --PK
	Edad INT,
	IdLugar INT,
	Nacionalidad VARCHAR(30),
	IdEstado INT,
	IdContactos VARCHAR(50), '1 2 3 54' Lista de IdContacto
	Email VARCHAR(30),
	Internado  CHAR(3), --SI - NO
	IdPatologia INT,
	IdMedicamento INT,
	PRIMARY KEY (NumIdentificacion),
	UNIQUE (NumIdentificacion),
    	FOREIGN KEY (IdLugar) REFERENCES LUGAR(IdLugar),
   	FOREIGN KEY (IdEstado) REFERENCES ESTADO(IdEstado),
    	FOREIGN KEY (IdMedicamento) REFERENCES MEDICAMENTO(IdMedicamento),
	FOREIGN KEY (IdPatologia) REFERENCES PATOLOGIA(IdPatologia));

--Crear TABLA CONTACTO
CREATE TABLE CONTACTO
(	IdContacto INT IDENTITY(1,1) NOT NULL,
    NombreContacto VARCHAR(30) NOT NULL,
    IdPaciente BIGINT,
	Apellidos VARCHAR(50) NOT NULL,
	NumIdentificacionContacto VARCHAR(20) NOT NULL,
	Edad INT,
	IdLugar INT,
	Nacionalidad VARCHAR(30),
	Email VARCHAR(30),
	IdPatologia INT,
	PRIMARY KEY (IdContacto),
	UNIQUE (IdContacto),
	FOREIGN KEY (IdPaciente) REFERENCES PACIENTE(NumIdentificacion),
	FOREIGN KEY (IdLugar) REFERENCES LUGAR(IdLugar),
	FOREIGN KEY (IdPatologia) REFERENCES PATOLOGIA(IdPatologia));

--Crear TABLA ESTADO DEL PACIENTE
CREATE TABLE ESTADO_PACIENTE
(	IdEstadoPaciente INT,
    IdPaciente BIGINT,
	IdEstado INT,
	PRIMARY KEY(IdEstadoPaciente)
	FOREIGN KEY (IdPaciente) REFERENCES PACIENTE(NumIdentificacion),
	FOREIGN KEY (IdEstado) REFERENCES ESTADO(IdEstado));

--Crear TABLA REPORTES DE CASOS
CREATE TABLE REPORTES_CASOS
(	IdReportesCasos INT,
    IdLugar INT,
	Fecha datetime NOT NULL,
	CasosNuevos INT,
	Muertes INT,
	PRIMARY KEY (IdReportesCasos),
	FOREIGN KEY (IdLugar) REFERENCES LUGAR(IdLugar));

--Crear TABLA REPORTES DE CASOS
CREATE TABLE REPORTES_ESTADOS
(	IdReportesEstados INT,
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
(	Id
    IdLugar INT,
	IdMedidaSanitaria INT,
	Fecha DATETIME,
    FOREIGN KEY (IdLugar) REFERENCES LUGAR(IdLugar),
    FOREIGN KEY (IdMedidaSanitaria) REFERENCES MEDIDA_SANITARIA(IdMedidaSanitaria));


