"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pacienteRoutes_1 = __importDefault(require("./routes/pacienteRoutes"));
const platoRoutes_1 = __importDefault(require("./routes/platoRoutes"));
const registroRoutes_1 = __importDefault(require("./routes/registroRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware para manejar JSON
app.use(express_1.default.json());
// Rutas
app.use('/api/pacientes', pacienteRoutes_1.default);
app.use('/api/platos', platoRoutes_1.default);
app.use('/api/registros', registroRoutes_1.default);
// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error en el servidor');
});
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
