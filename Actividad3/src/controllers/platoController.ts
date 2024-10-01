// src/controllers/platoController.ts
import { Request, Response } from 'express';
import prisma from '../prismaClient';

// Obtener todos los platos
export const getAllPlatos = async (req: Request, res: Response) => {
  try {
    const platos = await prisma.plato.findMany();
    return res.json(platos);
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Obtener un plato por ID
export const getPlatoById = async (req: Request, res: Response) => {
  try {
    const plato = await prisma.plato.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!plato) {
      return res.status(404).json({ message: 'Plato no encontrado' });
    }
    return res.json(plato);
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Crear un nuevo plato
export const createPlato = async (req: Request, res: Response) => {
  const { nombre, precio, categoria, descripcion } = req.body;
  try {
    const nuevoPlato = await prisma.plato.create({
      data: {
        nombre,
        precio,
        categoria,
        descripcion,  // Asegúrate de incluir 'descripcion'
      },
    });
    return res.status(201).json(nuevoPlato);
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Actualizar un plato
export const updatePlato = async (req: Request, res: Response) => {
  const { nombre, precio, categoria, descripcion } = req.body;
  try {
    const platoActualizado = await prisma.plato.update({
      where: { id: Number(req.params.id) },
      data: { nombre, precio, categoria, descripcion },
    });
    return res.json(platoActualizado);
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Eliminar un plato
export const deletePlato = async (req: Request, res: Response) => {
  try {
    await prisma.plato.delete({
      where: { id: Number(req.params.id) },
    });
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};
