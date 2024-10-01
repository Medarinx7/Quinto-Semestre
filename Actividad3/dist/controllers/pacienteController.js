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
exports.deletePaciente = exports.updatePaciente = exports.createPaciente = exports.getPacienteById = exports.getPacientes = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Obtener todos los pacientes
const getPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pacientes = yield prisma.paciente.findMany();
    res.json(pacientes);
});
exports.getPacientes = getPacientes;
// Obtener un paciente por ID
const getPacienteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const paciente = yield prisma.paciente.findUnique({ where: { id: Number(id) } });
    if (paciente) {
        res.json(paciente);
    }
    else {
        res.status(404).json({ error: 'Paciente no encontrado' });
    }
});
exports.getPacienteById = getPacienteById;
// Crear un paciente
const createPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, identificacion, periodoDeTiempoActual, gustos } = req.body;
    const nuevoPaciente = yield prisma.paciente.create({
        data: { nombre, identificacion, periodoDeTiempoActual, gustos },
    });
    res.status(201).json(nuevoPaciente);
});
exports.createPaciente = createPaciente;
// Modificar un paciente
const updatePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, identificacion, periodoDeTiempoActual, gustos } = req.body;
    const pacienteActualizado = yield prisma.paciente.update({
        where: { id: Number(id) },
        data: { nombre, identificacion, periodoDeTiempoActual, gustos },
    });
    res.json(pacienteActualizado);
});
exports.updatePaciente = updatePaciente;
// Eliminar un paciente
const deletePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield prisma.paciente.delete({ where: { id: Number(id) } });
    res.status(204).send();
});
exports.deletePaciente = deletePaciente;
