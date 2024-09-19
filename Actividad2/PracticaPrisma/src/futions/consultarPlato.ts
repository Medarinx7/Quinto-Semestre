// import prisma from '../prisma';
// import { IPlato } from '../interfaces';

// async function consultarPlatos(): Promise<IPlato[]> {
//   try {
//     const platos = await prisma.plato.findMany();
//     return platos;
//   } catch (error) {
//     console.error('Error al consultar los platos:', error);
//     throw error;
//   }
// }

// export { consultarPlatos };
// src/futions/consultarPlato.ts

// import { PrismaClient } from "@prisma/client";
// import { IPlato } from '../interfaces';

// const prisma = new PrismaClient();

// export async function obtenerTodosLosPlatos(): Promise<IPlato[]> {
//   try {
//     const platos = await prisma.plato.findMany(); // Nota: 'plato' en singular según el esquema
//     return platos.map(plato => ({
//       id: plato.id,
//       nombre: plato.nombre,
//       precio: plato.precio,
//       categoria: plato.categoria,
//       descripcion: plato.descripcion,
//     }));
//   } catch (error) {
//     console.error('Error al obtener los platos:', error);
//     throw error;
//   }
// }

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function consultarPlatos() {
  try {
    const platos = await prisma.plato.findMany();
    return platos;
  } catch (error) {
    console.error('Error al consultar los platos:', error);
    throw error;
  }
}
