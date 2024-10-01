"use strict";
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
exports.deleteRegistro = exports.updateRegistro = exports.createRegistro = exports.getRegistroById = exports.getRegistros = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Obtener todos los registros
const getRegistros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registros = yield prisma.registro.findMany({
            include: { paciente: true, plato: true },
        });
        res.json(registros);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los registros' });
    }
});
exports.getRegistros = getRegistros;
// Obtener un registro por ID
const getRegistroById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const registro = yield prisma.registro.findUnique({
            where: { id: Number(id) },
            include: { paciente: true, plato: true },
        });
        if (!registro)
            return res.status(404).json({ error: 'Registro no encontrado' });
        res.json(registro);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el registro' });
    }
});
exports.getRegistroById = getRegistroById;
// Crear un nuevo registro
const createRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pacienteId, platoId, fecha } = req.body;
    try {
        const nuevoRegistro = yield prisma.registro.create({
            data: {
                pacienteId,
                platoId,
                fecha,
            },
        });
        res.status(201).json(nuevoRegistro);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear el registro' });
    }
});
exports.createRegistro = createRegistro;
// Modificar un registro
const updateRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { pacienteId, platoId, fecha } = req.body;
    try {
        const registroActualizado = yield prisma.registro.update({
            where: { id: Number(id) },
            data: { pacienteId, platoId, fecha },
        });
        res.json(registroActualizado);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el registro' });
    }
});
exports.updateRegistro = updateRegistro;
// Eliminar un registro
const deleteRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.registro.delete({ where: { id: Number(id) } });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el registro' });
    }
});
exports.deleteRegistro = deleteRegistro;
