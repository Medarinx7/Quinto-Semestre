import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Obtener todos los pacientes
export const getPacientes = async (req: Request, res: Response) => {
  const pacientes = await prisma.paciente.findMany();
  res.json(pacientes);
};

// Obtener un paciente por ID
export const getPacienteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const paciente = await prisma.paciente.findUnique({ where: { id: Number(id) } });
  if (paciente) {
    res.json(paciente);
  } else {
    res.status(404).json({ error: 'Paciente no encontrado' });
  }
};

// Crear un paciente
export const createPaciente = async (req: Request, res: Response) => {
  const { nombre, identificacion, periodoDeTiempoActual, gustos } = req.body;
  const nuevoPaciente = await prisma.paciente.create({
    data: { nombre, identificacion, periodoDeTiempoActual, gustos },
  });
  res.status(201).json(nuevoPaciente);
};

// Modificar un paciente
export const updatePaciente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, identificacion, periodoDeTiempoActual, gustos } = req.body;
  const pacienteActualizado = await prisma.paciente.update({
    where: { id: Number(id) },
    data: { nombre, identificacion, periodoDeTiempoActual, gustos },
  });
  res.json(pacienteActualizado);
};

// Eliminar un paciente
export const deletePaciente = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.paciente.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
