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
exports.eliminarRegistro = exports.actualizarRegistro = exports.obtenerRegistroPorId = exports.obtenerRegistros = exports.crearRegistro = void 0;
const registro_model_1 = require("../modelos/registro.model");
// Crear un nuevo registro
const crearRegistro = (registroData) => __awaiter(void 0, void 0, void 0, function* () {
    const registro = new registro_model_1.Registro(registroData);
    return yield registro.save();
});
exports.crearRegistro = crearRegistro;
// Obtener todos los registros
const obtenerRegistros = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield registro_model_1.Registro.find().populate('pacienteId').populate('platoId');
});
exports.obtenerRegistros = obtenerRegistros;
// Obtener un registro por su ID
const obtenerRegistroPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield registro_model_1.Registro.findById(id).populate('pacienteId').populate('platoId');
});
exports.obtenerRegistroPorId = obtenerRegistroPorId;
// Actualizar un registro por su ID
const actualizarRegistro = (id, actualizaciones) => __awaiter(void 0, void 0, void 0, function* () {
    return yield registro_model_1.Registro.findByIdAndUpdate(id, actualizaciones, { new: true });
});
exports.actualizarRegistro = actualizarRegistro;
// Eliminar un registro por su ID
const eliminarRegistro = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield registro_model_1.Registro.findByIdAndDelete(id);
});
exports.eliminarRegistro = eliminarRegistro;
