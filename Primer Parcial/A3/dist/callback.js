"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCiudadById = getCiudadById;
exports.getColegioById = getColegioById;
exports.getEstudianteById = getEstudianteById;
const data_1 = require("./data");
function getEstudianteById(id, callback) {
    const estudiante = data_1.estudiantes.find(e => e.id === id);
    if (!data_1.estudiantes) {
        const error = new Error('Estudiante no encontrado');
        callback(error);
    }
    callback(null, estudiante);
}
function getColegioById(id, callback) {
    const colegio = data_1.colegios.find(e => e.id === id);
    if (!colegio) {
        const error = new Error('Estudiante no encontrado');
        callback(error);
    }
    callback(null, colegio);
}
function getCiudadById(id, callback) {
    const ciudad = data_1.ciudades.find(e => e.id === id);
    if (!ciudad) {
        const error = new Error('Estudiante no encontrado');
        callback(error);
    }
    callback(null, ciudad);
}
