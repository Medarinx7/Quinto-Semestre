import { Request, Response } from 'express';
import prisma from '../prismaClient';
import { IPlato } from './Interfaces'; // Asegúrate de que IPlato esté correctamente definido

export const crearPlato = async (req: Request, res: Response) => {
    const { nombre, precio, categoria, descripcion }: IPlato = req.body;

    try {
        const plato = await prisma.plato.create({
            data: {
                nombre,
                precio,
                categoria,
                descripcion,
            },
        });
        res.status(201).json({ plato });
    } catch (error) {
        res.status(400).json({ error: 'Error al crear plato.' });
    }
};

export const obtenerPlatos = async (req: Request, res: Response) => {
    try {
        const platos = await prisma.plato.findMany();
        res.status(200).json({ platos });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener platos.' });
    }
};

export const obtenerPlatoPorId = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const plato = await prisma.plato.findUnique({ where: { id: Number(id) } });
        if (!plato) {
            return res.status(404).json({ error: 'Plato no encontrado.' });
        }
        res.status(200).json({ plato });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener plato.' });
    }
};

export const actualizarPlato = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, precio, categoria, descripcion }: IPlato = req.body;

    try {
        const platoActualizado = await prisma.plato.update({
            where: { id: Number(id) },
            data: {
                nombre,
                precio,
                categoria,
                descripcion,
            },
        });
        res.status(200).json({ platoActualizado });
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar plato.' });
    }
};

export const eliminarPlato = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.plato.delete({ where: { id: Number(id) } });
        res.status(204).json(); // Sin contenido
    } catch (error) {
        res.status(400).json({ error: 'Error al eliminar plato.' });
    }
};
