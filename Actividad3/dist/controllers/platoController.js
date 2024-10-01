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
exports.deletePlato = exports.updatePlato = exports.createPlato = exports.getPlatoById = exports.getPlatos = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Obtener todos los platos
const getPlatos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const platos = yield prisma.plato.findMany();
        res.json(platos);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los platos' });
    }
});
exports.getPlatos = getPlatos;
// Obtener un plato por ID
const getPlatoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const plato = yield prisma.plato.findUnique({ where: { id: Number(id) } });
        if (!plato)
            return res.status(404).json({ error: 'Plato no encontrado' });
        res.json(plato);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el plato' });
    }
});
exports.getPlatoById = getPlatoById;
// Crear un nuevo plato
const createPlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, precio, categoria } = req.body;
    try {
        const nuevoPlato = yield prisma.plato.create({
            data: {
                nombre,
                precio,
                categoria,
            },
        });
        res.status(201).json(nuevoPlato);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear el plato' });
    }
});
exports.createPlato = createPlato;
// Modificar un plato
const updatePlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, precio, categoria } = req.body;
    try {
        const platoActualizado = yield prisma.plato.update({
            where: { id: Number(id) },
            data: { nombre, precio, categoria },
        });
        res.json(platoActualizado);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el plato' });
    }
});
exports.updatePlato = updatePlato;
// Eliminar un plato
const deletePlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.plato.delete({ where: { id: Number(id) } });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el plato' });
    }
});
exports.deletePlato = deletePlato;
