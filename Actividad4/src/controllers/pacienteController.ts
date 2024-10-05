// import { Request, Response } from 'express';
// import prisma from '../prismaClient';

// // Obtener todos los pacientes
// export const getPacientes = async (req: Request, res: Response) => {
//   try {
//     const pacientes = await prisma.paciente.findMany();
//     res.json(pacientes);
//   } catch (error) {
//     console.error('Error al obtener pacientes:', error);
//     res.status(500).json({ error: 'Error al obtener pacientes' });
//   }
// };

// // Obtener un paciente por ID
// export const getPacienteById = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const paciente = await prisma.paciente.findUnique({
//       where: { id: Number(id) }
//     });
//     if (paciente) {
//       res.json(paciente);
//     } else {
//       res.status(404).json({ error: 'Paciente no encontrado' });
//     }
//   } catch (error) {
//     console.error('Error al obtener paciente:', error);
//     res.status(500).json({ error: 'Error al obtener paciente' });
//   }
// };

// // Crear un nuevo paciente
// export const createPaciente = async (req: Request, res: Response) => {
//   const { nombre, identificacion, periodoDeTiempoActual, gustos } = req.body;
//   try {
//     const nuevoPaciente = await prisma.paciente.create({
//       data: {
//         nombre,
//         identificacion,
//         periodoDeTiempoActual,
//         gustos
//       }
//     });
//     res.status(201).json(nuevoPaciente);
//   } catch (error) {
//     console.error('Error al crear paciente:', error);
//     res.status(500).json({ error: 'Error al crear paciente' });
//   }
// };

// // Actualizar un paciente
// export const updatePaciente = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { nombre, identificacion, periodoDeTiempoActual, gustos } = req.body;
//   try {
//     const pacienteActualizado = await prisma.paciente.update({
//       where: { id: Number(id) },
//       data: { nombre, identificacion, periodoDeTiempoActual, gustos }
//     });
//     res.json(pacienteActualizado);
//   } catch (error) {
//     console.error('Error al actualizar paciente:', error);
//     res.status(404).json({ error: 'Paciente no encontrado' });
//   }
// };

// // Eliminar un paciente
// export const deletePaciente = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     await prisma.paciente.delete({
//       where: { id: Number(id) }
//     });
//     res.status(204).send();
//   } catch (error) {
//     console.error('Error al eliminar paciente:', error);
//     res.status(404).json({ error: 'Paciente no encontrado' });
//   }
// };
// src/controllers/pacienteController.ts
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Obtener todos los pacientes
export const getPacientes = async (req: Request, res: Response) => {
    try {
        const pacientes = await prisma.paciente.findMany();
        res.status(200).json(pacientes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener pacientes.' });
    }
};

// Obtener un paciente por ID
export const getPacienteById = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        const paciente = await prisma.paciente.findUnique({ where: { id: Number(id) } });
        if (paciente) {
            res.status(200).json(paciente);
        } else {
            res.status(404).json({ error: 'Paciente no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener paciente.' });
    }
};

// Crear un paciente
export const createPaciente = async (req: Request, res: Response) => {
    const { nombre, identificacion, periodoDeTiempoActual, gustos } = req.body;
    
    try {
        const nuevoPaciente = await prisma.paciente.create({
            data: { nombre, identificacion, periodoDeTiempoActual, gustos },
        });
        res.status(201).json(nuevoPaciente);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear paciente.' });
    }
};

// Modificar un paciente
export const updatePaciente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, identificacion, periodoDeTiempoActual, gustos } = req.body;

    try {
        const pacienteActualizado = await prisma.paciente.update({
            where: { id: Number(id) },
            data: { nombre, identificacion, periodoDeTiempoActual, gustos },
        });
        res.status(200).json(pacienteActualizado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar paciente.' });
    }
};

// Eliminar un paciente
export const deletePaciente = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.paciente.delete({ where: { id: Number(id) } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar paciente.' });
    }
};
