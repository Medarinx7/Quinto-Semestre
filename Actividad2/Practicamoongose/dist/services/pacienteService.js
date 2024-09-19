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
exports.eliminarPaciente = exports.actualizarPaciente = exports.obtenerPacientePorId = exports.obtenerPacientes = exports.crearPaciente = void 0;
const paciente_model_1 = require("../modelos/paciente.model");
// Crear un nuevo paciente
const crearPaciente = (pacienteData) => __awaiter(void 0, void 0, void 0, function* () {
    const paciente = new paciente_model_1.Paciente(pacienteData);
    return yield paciente.save();
});
exports.crearPaciente = crearPaciente;
// Obtener todos los pacientes
const obtenerPacientes = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield paciente_model_1.Paciente.find();
});
exports.obtenerPacientes = obtenerPacientes;
// Obtener un paciente por su ID
const obtenerPacientePorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield paciente_model_1.Paciente.findById(id);
});
exports.obtenerPacientePorId = obtenerPacientePorId;
// Actualizar un paciente por su ID
const actualizarPaciente = (id, actualizaciones) => __awaiter(void 0, void 0, void 0, function* () {
    return yield paciente_model_1.Paciente.findByIdAndUpdate(id, actualizaciones, { new: true });
});
exports.actualizarPaciente = actualizarPaciente;
// Eliminar un paciente por su ID
const eliminarPaciente = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield paciente_model_1.Paciente.findByIdAndDelete(id);
});
exports.eliminarPaciente = eliminarPaciente;
