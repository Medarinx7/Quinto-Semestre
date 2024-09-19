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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const crearPlato_1 = require("./futions/crearPlato");
const consultarPlato_1 = require("./futions/consultarPlato");
const crearPaciente_1 = require("./futions/crearPaciente");
const consultarPaciente_1 = require("./futions/consultarPaciente");
const crearRegistro_1 = require("./futions/crearRegistro");
const consultarRegistro_1 = require("./futions/consultarRegistro");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post('/plato', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuevoPlato = yield (0, crearPlato_1.crearPlato)(req.body);
        res.status(201).json(nuevoPlato);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}));
app.get('/platos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const platos = yield (0, consultarPlato_1.consultarPlatos)();
        res.status(200).json(platos);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}));
app.post('/paciente', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuevoPaciente = yield (0, crearPaciente_1.crearPaciente)(req.body);
        res.status(201).json(nuevoPaciente);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}));
app.get('/pacientes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacientes = yield (0, consultarPaciente_1.consultarPacientes)();
        res.status(200).json(pacientes);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}));
app.post('/registro', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuevoRegistro = yield (0, crearRegistro_1.crearRegistro)(req.body);
        res.status(201).json(nuevoRegistro);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}));
app.get('/registros', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registros = yield (0, consultarRegistro_1.consultarRegistros)();
        res.status(200).json(registros);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
