-- CreateTable
CREATE TABLE "Paciente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "identificacion" INTEGER NOT NULL,
    "periodoDeTiempoActual" TEXT NOT NULL,
    "gustos" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Registro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idPaciente" TEXT NOT NULL,
    "idPlato" TEXT NOT NULL,
    "fecha" DATETIME NOT NULL,
    CONSTRAINT "Registro_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Plato" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_identificacion_key" ON "Paciente"("identificacion");
