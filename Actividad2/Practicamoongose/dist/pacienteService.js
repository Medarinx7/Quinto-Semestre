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
exports.eliminarPaciente = exports.modificarPaciente = void 0;
const paciente_model_1 = require("./modelos/paciente.model"); // Asegúrate de usar el nombre correcto del archivo de modelo
// Función para modificar un paciente por ID
const modificarPaciente = (id, actualizaciones) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacienteModificado = yield paciente_model_1.Paciente.findByIdAndUpdate(id, actualizaciones, { new: true });
        if (!pacienteModificado) {
            throw new Error('Paciente no encontrado');
        }
        return pacienteModificado;
    }
    catch (error) {
        console.error('Error al modificar el paciente:', error);
        throw error;
    }
});
exports.modificarPaciente = modificarPaciente;
// Función para eliminar un paciente por ID
const eliminarPaciente = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacienteEliminado = yield paciente_model_1.Paciente.findByIdAndDelete(id);
        if (!pacienteEliminado) {
            throw new Error('Paciente no encontrado');
        }
        return pacienteEliminado;
    }
    catch (error) {
        console.error('Error al eliminar el paciente:', error);
        throw error;
    }
});
exports.eliminarPaciente = eliminarPaciente;
