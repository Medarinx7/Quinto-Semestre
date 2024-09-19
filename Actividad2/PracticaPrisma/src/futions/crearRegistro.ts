import prisma from '../prisma';
import { IRegistro } from '../interfaces';

async function crearRegistro(registro: IRegistro) {
  try {
    const nuevoRegistro = await prisma.registro.create({
      data: registro,
    });
    return nuevoRegistro;
  } catch (error) {
    console.error('Error al crear el registro:', error);
    throw error;
  }
}

export { crearRegistro };
