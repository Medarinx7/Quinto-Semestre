"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro = void 0;
const mongoose_1 = require("mongoose");
const RegistroSchema = new mongoose_1.Schema({
    pacienteId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Paciente', required: true },
    platoId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Plato', required: true },
    fecha: { type: Date, required: true },
    comentarios: { type: String },
});
exports.Registro = (0, mongoose_1.model)('Registro', RegistroSchema);
