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
exports.deletePlato = exports.updatePlato = exports.createPlato = exports.getPlatoById = exports.getAllPlatos = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
// Obtener todos los platos
const getAllPlatos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const platos = yield prismaClient_1.default.plato.findMany();
        return res.json(platos);
    }
    catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.getAllPlatos = getAllPlatos;
// Obtener un plato por ID
const getPlatoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plato = yield prismaClient_1.default.plato.findUnique({
            where: { id: Number(req.params.id) },
        });
        if (!plato) {
            return res.status(404).json({ message: 'Plato no encontrado' });
        }
        return res.json(plato);
    }
    catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.getPlatoById = getPlatoById;
// Crear un nuevo plato
const createPlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, precio, categoria, descripcion } = req.body;
    try {
        const nuevoPlato = yield prismaClient_1.default.plato.create({
            data: {
                nombre,
                precio,
                categoria,
                descripcion, // Asegúrate de incluir 'descripcion'
            },
        });
        return res.status(201).json(nuevoPlato);
    }
    catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.createPlato = createPlato;
// Actualizar un plato
const updatePlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, precio, categoria, descripcion } = req.body;
    try {
        const platoActualizado = yield prismaClient_1.default.plato.update({
            where: { id: Number(req.params.id) },
            data: { nombre, precio, categoria, descripcion },
        });
        return res.json(platoActualizado);
    }
    catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.updatePlato = updatePlato;
// Eliminar un plato
const deletePlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prismaClient_1.default.plato.delete({
            where: { id: Number(req.params.id) },
        });
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }
});
exports.deletePlato = deletePlato;
