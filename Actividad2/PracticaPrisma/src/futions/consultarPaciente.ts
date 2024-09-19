// import prisma from '../prisma';
// import { IPaciente } from '../interfaces';

// async function consultarPacientes(): Promise<IPaciente[]> {
//   try {
//     const pacientes = await prisma.paciente.findMany();
//     return pacientes;
//   } catch (error) {
//     console.error('Error al consultar los pacientes:', error);
//     throw error;
//   }
// }

// export { consultarPacientes };

// src/futions/consultarPaciente.ts


// import { PrismaClient } from "@prisma/client";
// import { IPaciente } from '../interfaces';

// const prisma = new PrismaClient();

// export async function obtenerTodosLosPacientes(): Promise<IPaciente[]> {
//   try {
//     const pacientes = await prisma.paciente.findMany(); // Nota: 'paciente' en singular según el esquema
//     return pacientes.map(paciente => ({
//       id: paciente.id,
//       nombre: paciente.nombre,
//       identificacion: paciente.identificacion,
//       periodoDeTiempoActual: paciente.periodoDeTiempoActual,
//       gustos: paciente.gustos,
//     }));
//   } catch (error) {
//     console.error('Error al obtener los pacientes:', error);
//     throw error;
//   }
// }

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function consultarPacientes() {
  try {
    const pacientes = await prisma.paciente.findMany();
    return pacientes;
  } catch (error) {
    console.error('Error al consultar los pacientes:', error);
    throw error;
  }
}
