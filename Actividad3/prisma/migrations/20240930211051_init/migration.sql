-- CreateTable
CREATE TABLE "Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "identificacion" INTEGER NOT NULL,
    "periodoDeTiempoActual" TEXT NOT NULL,
    "gustos" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Plato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "categoria" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Registro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idPaciente" INTEGER NOT NULL,
    "idPlato" INTEGER NOT NULL,
    "fecha" DATETIME NOT NULL,
    "numeroCalorias" INTEGER NOT NULL,
    "numeroPorciones" INTEGER NOT NULL,
    CONSTRAINT "Registro_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Registro_idPlato_fkey" FOREIGN KEY ("idPlato") REFERENCES "Plato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
