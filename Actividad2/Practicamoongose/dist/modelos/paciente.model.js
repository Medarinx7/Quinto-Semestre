"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
const mongoose_1 = require("mongoose");
const PacienteSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    identificacion: { type: Number, required: true },
    periodoDeTiempoActual: { type: String, required: true },
    gustos: { type: String, required: true },
});
exports.Paciente = (0, mongoose_1.model)('Paciente', PacienteSchema);
