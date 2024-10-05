"use strict";
// import { Request, Response } from 'express';
// import prisma from '../prismaClient';
// import { IRegistro } from './Interfaces';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarRegistro = exports.actualizarRegistro = exports.obtenerRegistroPorId = exports.obtenerRegistros = exports.crearRegistro = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
// Crear un nuevo registro
const crearRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idPlato, idPaciente, fecha, hora, numeroCaloriasConsumidas, numeroPorciones } = req.body;
    try {
        const registro = yield prismaClient_1.default.registro.create({
            data: {
                fecha: new Date(fecha), // Asegúrate de que la fecha se esté pasando en el formato correcto
                hora,
                numeroCaloriasConsumidas,
                numeroPorciones,
                Paciente: { connect: { id: Number(idPaciente) } }, // Conectar con el paciente
                Plato: { connect: { id: Number(idPlato) } }, // Conectar con el plato
            },
        });
        res.status(201).json({ registro });
    }
    catch (error) {
        console.error(error); // Para ver el error en la consola
        res.status(400).json({ error: 'Error al crear registro.' });
    }
});
exports.crearRegistro = crearRegistro;
// Obtener todos los registros
const obtenerRegistros = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registros = yield prismaClient_1.default.registro.findMany({
            include: {
                Paciente: true, // Incluir información del paciente
                Plato: true, // Incluir información del plato
            },
        });
        res.status(200).json({ registros });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener registros.' });
    }
});
exports.obtenerRegistros = obtenerRegistros;
// Obtener un registro por ID
const obtenerRegistroPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const registro = yield prismaClient_1.default.registro.findUnique({
            where: { id: Number(id) },
            include: {
                Paciente: true, // Incluir información del paciente
                Plato: true, // Incluir información del plato
            },
        });
        if (!registro) {
            return res.status(404).json({ error: 'Registro no encontrado.' });
        }
        res.status(200).json({ registro });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener registro.' });
    }
});
exports.obtenerRegistroPorId = obtenerRegistroPorId;
// Actualizar un registro
const actualizarRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { idPlato, idPaciente, fecha, hora, numeroCaloriasConsumidas, numeroPorciones } = req.body;
    try {
        const registroActualizado = yield prismaClient_1.default.registro.update({
            where: { id: Number(id) },
            data: {
                fecha: new Date(fecha), // Asegúrate de que la fecha se esté pasando en el formato correcto
                hora,
                numeroCaloriasConsumidas,
                numeroPorciones,
                Paciente: { connect: { id: Number(idPaciente) } }, // Conectar con el paciente
                Plato: { connect: { id: Number(idPlato) } }, // Conectar con el plato
            },
        });
        res.status(200).json({ registroActualizado });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al actualizar registro.' });
    }
});
exports.actualizarRegistro = actualizarRegistro;
// Eliminar un registro
const eliminarRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prismaClient_1.default.registro.delete({ where: { id: Number(id) } });
        res.status(204).json(); // Sin contenido
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al eliminar registro.' });
    }
});
exports.eliminarRegistro = eliminarRegistro;
