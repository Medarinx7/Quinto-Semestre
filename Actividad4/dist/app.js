"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const pacienteRoutes_1 = __importDefault(require("./routes/pacienteRoutes"));
const registroRoutes_1 = __importDefault(require("./routes/registroRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Asegúrate de tener este middleware para leer JSON
app.use('/pacientes', pacienteRoutes_1.default);
app.use('/registros', registroRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
