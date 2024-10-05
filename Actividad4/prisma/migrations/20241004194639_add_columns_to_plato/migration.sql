/*
  Warnings:

  - You are about to drop the column `calorias` on the `Plato` table. All the data in the column will be lost.
  - You are about to drop the column `pacienteId` on the `Registro` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[identificacion]` on the table `Paciente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoria` to the `Plato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descripcion` to the `Plato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio` to the `Plato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora` to the `Registro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idPaciente` to the `Registro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idPlato` to the `Registro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroCaloriasConsumidas` to the `Registro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroPorciones` to the `Registro` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "categoria" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL
);
INSERT INTO "new_Plato" ("id", "nombre") SELECT "id", "nombre" FROM "Plato";
DROP TABLE "Plato";
ALTER TABLE "new_Plato" RENAME TO "Plato";
CREATE TABLE "new_Registro" (
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
INSERT INTO "new_Registro" ("fecha", "id") SELECT "fecha", "id" FROM "Registro";
DROP TABLE "Registro";
ALTER TABLE "new_Registro" RENAME TO "Registro";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_identificacion_key" ON "Paciente"("identificacion");
