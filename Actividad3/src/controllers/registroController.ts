// src/controllers/registroController.ts
import { Request, Response } from 'express';
import prisma from '../prismaClient';

// Obtener todos los registros
export const getAllRegistros = async (req: Request, res: Response) => {
  try {
    const registros = await prisma.registro.findMany();
    return res.json(registros);
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Obtener un registro por ID
export const getRegistroById = async (req: Request, res: Response) => {
  try {
    const registro = await prisma.registro.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!registro) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }
    return res.json(registro);
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Crear un nuevo registro
export const createRegistro = async (req: Request, res: Response) => {
  const { idPaciente, idPlato, fecha, numeroCalorias, numeroPorciones } = req.body;
  try {
    const nuevoRegistro = await prisma.registro.create({
      data: {
        paciente: { connect: { id: Number(idPaciente) } },
        plato: { connect: { id: Number(idPlato) } },
        fecha: new Date(fecha),
        numeroCalorias: Number(numeroCalorias),
        numeroPorciones: Number(numeroPorciones),
      },
    });
    return res.status(201).json(nuevoRegistro);
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Actualizar un registro
export const updateRegistro = async (req: Request, res: Response) => {
  const { idPaciente, idPlato, fecha, numeroCalorias, numeroPorciones } = req.body;
  try {
    const registroActualizado = await prisma.registro.update({
      where: { id: Number(req.params.id) },
      data: {
        paciente: { connect: { id: Number(idPaciente) } },
        plato: { connect: { id: Number(idPlato) } },
        fecha: new Date(fecha),
        numeroCalorias: Number(numeroCalorias),
        numeroPorciones: Number(numeroPorciones),
      },
    });
    return res.json(registroActualizado);
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Eliminar un registro
export const deleteRegistro = async (req: Request, res: Response) => {
  try {
    await prisma.registro.delete({
      where: { id: Number(req.params.id) },
    });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};
