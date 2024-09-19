"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plato = void 0;
const mongoose_1 = require("mongoose");
const PlatoSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    calorias: { type: Number, required: true },
    tipo: { type: String, required: true },
});
exports.Plato = (0, mongoose_1.model)('Plato', PlatoSchema);
