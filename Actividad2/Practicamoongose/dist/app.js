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
const db_1 = require("./db");
const paciente_model_1 = require("./modelos/paciente.model");
const app = (0, express_1.default)();
const PORT = 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, db_1.connectToDatabase)();
app.get('/pacientes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacientes = yield paciente_model_1.Paciente.find();
        res.json(pacientes);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
