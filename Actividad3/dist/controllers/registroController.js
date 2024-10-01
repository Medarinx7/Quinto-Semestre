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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRegistro = exports.updateRegistro = exports.createRegistro = exports.getRegistroById = exports.getAllRegistros = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
// Obtener todos los registros
const getAllRegistros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registros = yield prismaClient_1.default.registro.findMany();
        return res.json(registros);
    }
    catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.getAllRegistros = getAllRegistros;
// Obtener un registro por ID
const getRegistroById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registro = yield prismaClient_1.default.registro.findUnique({
            where: { id: Number(req.params.id) },
        });
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    }
    catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.getRegistroById = getRegistroById;
// Crear un nuevo registro
const createRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idPaciente, idPlato, fecha, numeroCalorias, numeroPorciones } = req.body;
    try {
        const nuevoRegistro = yield prismaClient_1.default.registro.create({
            data: {
                paciente: { connect: { id: Number(idPaciente) } },
                plato: { connect: { id: Number(idPlato) } },
                fecha: new Date(fecha),
                numeroCalorias: Number(numeroCalorias),
                numeroPorciones: Number(numeroPorciones),
            },
        });
        return res.status(201).json(nuevoRegistro);
    }
    catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.createRegistro = createRegistro;
// Actualizar un registro
const updateRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idPaciente, idPlato, fecha, numeroCalorias, numeroPorciones } = req.body;
    try {
        const registroActualizado = yield prismaClient_1.default.registro.update({
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
    }
    catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.updateRegistro = updateRegistro;
// Eliminar un registro
const deleteRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prismaClient_1.default.registro.delete({
            where: { id: Number(req.params.id) },
        });
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.deleteRegistro = deleteRegistro;
