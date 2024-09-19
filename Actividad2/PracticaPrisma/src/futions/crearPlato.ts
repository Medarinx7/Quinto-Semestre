// import { PrismaClient } from '@prisma/client';
// import { IPlato } from '../interfaces';

// const prisma = new PrismaClient();

// async function crearPlato(plato: IPlato) {
//   try {
//     const nuevoPlato = await prisma.plato.create({
//       data: plato,
//     });
//     return nuevoPlato;
//   } catch (error) {
//     console.error('Error al crear el plato:', error);
//     throw error;
//   }
// }

// async function obtenerTodosLosPlatos() {
//   try {
//     const platos = await prisma.plato.findMany();
//     return platos;
//   } catch (error) {
//     console.error('Error al obtener los platos:', error);
//     throw error;
//   }
// }

// export { crearPlato, obtenerTodosLosPlatos };

import { PrismaClient } from '@prisma/client';
import { IPlato } from '../interfaces';

const prisma = new PrismaClient();

export async function crearPlato(plato: IPlato) {
  try {
    const nuevoPlato = await prisma.plato.create({
      data: plato,
    });
    return nuevoPlato;
  } catch (error) {
    console.error('Error al crear el plato:', error);
    throw error;
  }
}
