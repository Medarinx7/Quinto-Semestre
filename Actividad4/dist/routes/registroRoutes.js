"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registroController_1 = require("../controllers/registroController"); // Asegúrate de que la ruta sea correcta
const router = (0, express_1.Router)();
// Ruta para crear un nuevo registro
router.post('/registros', registroController_1.crearRegistro);
// Ruta para obtener todos los registros
router.get('/registros', registroController_1.obtenerRegistros);
// Ruta para obtener un registro específico por ID
router.get('/registros/:id', registroController_1.obtenerRegistros);
// Ruta para actualizar un registro existente
router.put('/registros/:id', registroController_1.actualizarRegistro);
// Ruta para eliminar un registro
router.delete('/registros/:id', registroController_1.eliminarRegistro);
exports.default = router;
