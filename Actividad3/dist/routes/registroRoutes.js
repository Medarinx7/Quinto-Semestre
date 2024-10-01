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
// src/routes/registroRoutes.ts
const express_1 = require("express");
const registroController_1 = require("../controllers/registroController");
const router = (0, express_1.Router)();
// Obtener todos los registros
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, registroController_1.getAllRegistros)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
// Obtener un registro por ID
router.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, registroController_1.getRegistroById)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
// Crear un nuevo registro
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, registroController_1.createRegistro)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
// Actualizar un registro por ID
router.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, registroController_1.updateRegistro)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
// Eliminar un registro por ID
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, registroController_1.deleteRegistro)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
