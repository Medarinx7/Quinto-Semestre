import { PrismaClient } from "@prisma/client";
import { IPaciente } from '../interfaces';

const prisma = new PrismaClient();

async function crearPaciente(paciente: IPaciente) {
  try {
    const nuevoPaciente = await prisma.paciente.create({
      data: paciente,
    });
    return nuevoPaciente;
  } catch (error: unknown) {
    console.error('Error al crear el paciente:', error);
    throw error;
  }
}

export { crearPaciente };





