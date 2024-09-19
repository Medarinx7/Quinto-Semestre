/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Category";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Product";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Plato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "categoria" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "identificacion" INTEGER NOT NULL,
    "periodoDeTiempoActual" TEXT NOT NULL,
    "gustos" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Registro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idPlato" INTEGER NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "fecha" DATETIME NOT NULL,
    "hora" TEXT NOT NULL,
    "numeroCaloriasConsumidas" INTEGER NOT NULL,
    "numeroPorciones" INTEGER NOT NULL,
    CONSTRAINT "Registro_idPlato_fkey" FOREIGN KEY ("idPlato") REFERENCES "Plato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Registro_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_identificacion_key" ON "Paciente"("identificacion");
