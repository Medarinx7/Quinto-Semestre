"use strict";
// import { Request, Response } from 'express';
// import prisma from '../prismaClient';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePaciente = exports.updatePaciente = exports.createPaciente = exports.getPacienteById = exports.getPacientes = void 0;
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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Obtener todos los pacientes
const getPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacientes = yield prisma.paciente.findMany();
        res.status(200).json(pacientes);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener pacientes.' });
    }
});
exports.getPacientes = getPacientes;
// Obtener un paciente por ID
const getPacienteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const paciente = yield prisma.paciente.findUnique({ where: { id: Number(id) } });
        if (paciente) {
            res.status(200).json(paciente);
        }
        else {
            res.status(404).json({ error: 'Paciente no encontrado.' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener paciente.' });
    }
});
exports.getPacienteById = getPacienteById;
// Crear un paciente
const createPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, identificacion, periodoDeTiempoActual, gustos } = req.body;
    try {
        const nuevoPaciente = yield prisma.paciente.create({
            data: { nombre, identificacion, periodoDeTiempoActual, gustos },
        });
        res.status(201).json(nuevoPaciente);
    }
    catch (error) {
        res.status(400).json({ error: 'Error al crear paciente.' });
    }
});
exports.createPaciente = createPaciente;
// Modificar un paciente
const updatePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, identificacion, periodoDeTiempoActual, gustos } = req.body;
    try {
        const pacienteActualizado = yield prisma.paciente.update({
            where: { id: Number(id) },
            data: { nombre, identificacion, periodoDeTiempoActual, gustos },
        });
        res.status(200).json(pacienteActualizado);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar paciente.' });
    }
});
exports.updatePaciente = updatePaciente;
// Eliminar un paciente
const deletePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.paciente.delete({ where: { id: Number(id) } });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar paciente.' });
    }
});
exports.deletePaciente = deletePaciente;
