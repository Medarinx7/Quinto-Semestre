// import prisma from '../prisma';
// import { IRegistro } from '../interfaces';

// async function consultarRegistros(): Promise<IRegistro[]> {
//   try {
//     const registros = await prisma.registro.findMany();
//     return registros;
//   } catch (error) {
//     console.error('Error al consultar los registros:', error);
//     throw error;
//   }
// }

// export { consultarRegistros };

// src/futions/consultarRegistro.ts

// import { PrismaClient } from "@prisma/client";
// import { IRegistro } from '../interfaces';

// const prisma = new PrismaClient();

// export async function obtenerTodosLosRegistros(): Promise<IRegistro[]> {
//   try {
//     const registros = await prisma.registro.findMany(); // Nota: 'registro' en singular según el esquema
//     return registros.map(registro => ({
//       id: registro.id,
//       idPlato: registro.idPlato,
//       idPaciente: registro.idPaciente,
//       fecha: registro.fecha,
//       hora: registro.hora,
//       numeroCaloriasConsumidas: registro.numeroCaloriasConsumidas,
//       numeroPorciones: registro.numeroPorciones,
//     }));
//   } catch (error) {
//     console.error('Error al obtener los registros:', error);
//     throw error;
//   }
// }


import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function consultarRegistros() {
  try {
    const registros = await prisma.registro.findMany();
    return registros;
  } catch (error) {
    console.error('Error al consultar los registros:', error);
    throw error;
  }
}
