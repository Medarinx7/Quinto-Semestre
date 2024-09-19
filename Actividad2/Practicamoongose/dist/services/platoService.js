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
exports.eliminarPlato = exports.actualizarPlato = exports.obtenerPlatoPorId = exports.obtenerPlatos = exports.crearPlato = void 0;
const plato_model_1 = require("../modelos/plato.model");
// Crear un nuevo plato
const crearPlato = (platoData) => __awaiter(void 0, void 0, void 0, function* () {
    const plato = new plato_model_1.Plato(platoData);
    return yield plato.save();
});
exports.crearPlato = crearPlato;
// Obtener todos los platos
const obtenerPlatos = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield plato_model_1.Plato.find();
});
exports.obtenerPlatos = obtenerPlatos;
// Obtener un plato por su ID
const obtenerPlatoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield plato_model_1.Plato.findById(id);
});
exports.obtenerPlatoPorId = obtenerPlatoPorId;
// Actualizar un plato por su ID
const actualizarPlato = (id, actualizaciones) => __awaiter(void 0, void 0, void 0, function* () {
    return yield plato_model_1.Plato.findByIdAndUpdate(id, actualizaciones, { new: true });
});
exports.actualizarPlato = actualizarPlato;
// Eliminar un plato por su ID
const eliminarPlato = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield plato_model_1.Plato.findByIdAndDelete(id);
});
exports.eliminarPlato = eliminarPlato;
