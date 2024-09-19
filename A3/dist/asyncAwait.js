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
exports.getColegioByIdaa = getColegioByIdaa;
exports.getEstudianteByIdaa = getEstudianteByIdaa;
const data_1 = require("./data");
function getEstudianteByIdaa(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const estudiante = data_1.estudiantes.find(e => e.id === id);
        if (!estudiante) {
            const error = new Error();
            error.message = 'no encontramos el estudiante';
            throw error;
        }
        return estudiante;
    });
}
function getColegioByIdaa(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const colegio = data_1.colegios.find(e => e.id === id);
        if (!colegio) {
            throw new Error('no encontramos el colegio');
        }
        return colegio;
    });
}
