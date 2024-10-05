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
exports.eliminarPlato = exports.actualizarPlato = exports.obtenerPlatoPorId = exports.obtenerPlatos = exports.crearPlato = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
const crearPlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, precio, categoria, descripcion } = req.body;
    try {
        const plato = yield prismaClient_1.default.plato.create({
            data: {
                nombre,
                precio,
                categoria,
                descripcion,
            },
        });
        res.status(201).json({ plato });
    }
    catch (error) {
        res.status(400).json({ error: 'Error al crear plato.' });
    }
});
exports.crearPlato = crearPlato;
const obtenerPlatos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const platos = yield prismaClient_1.default.plato.findMany();
        res.status(200).json({ platos });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener platos.' });
    }
});
exports.obtenerPlatos = obtenerPlatos;
const obtenerPlatoPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const plato = yield prismaClient_1.default.plato.findUnique({ where: { id: Number(id) } });
        if (!plato) {
            return res.status(404).json({ error: 'Plato no encontrado.' });
        }
        res.status(200).json({ plato });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener plato.' });
    }
});
exports.obtenerPlatoPorId = obtenerPlatoPorId;
const actualizarPlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, precio, categoria, descripcion } = req.body;
    try {
        const platoActualizado = yield prismaClient_1.default.plato.update({
            where: { id: Number(id) },
            data: {
                nombre,
                precio,
                categoria,
                descripcion,
            },
        });
        res.status(200).json({ platoActualizado });
    }
    catch (error) {
        res.status(400).json({ error: 'Error al actualizar plato.' });
    }
});
exports.actualizarPlato = actualizarPlato;
const eliminarPlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prismaClient_1.default.plato.delete({ where: { id: Number(id) } });
        res.status(204).json(); // Sin contenido
    }
    catch (error) {
        res.status(400).json({ error: 'Error al eliminar plato.' });
    }
});
exports.eliminarPlato = eliminarPlato;
