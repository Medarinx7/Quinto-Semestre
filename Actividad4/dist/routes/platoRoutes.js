"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/platoRoutes.ts
const express_1 = require("express");
const platoController_1 = require("../controllers/platoController");
const router = (0, express_1.Router)();
router.post('/', platoController_1.crearPlato);
router.get('/', platoController_1.obtenerPlatos);
router.put('/:id', platoController_1.actualizarPlato);
router.delete('/:id', platoController_1.eliminarPlato);
exports.default = router;
