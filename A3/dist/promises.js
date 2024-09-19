"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEstudianteByIdUsingPromises = getEstudianteByIdUsingPromises;
exports.getColegioByIdUsingPromises = getColegioByIdUsingPromises;
exports.getCiudadByIdUsingPromises = getCiudadByIdUsingPromises;
const data_1 = require("./data");
function getEstudianteByIdUsingPromises(id) {
    return new Promise((resolve, reject) => {
        const estudiante = data_1.estudiantes.find(e => e.id === id);
        if (!estudiante) {
            const error = new Error('Estudiante no encontrado');
            reject(error);
        }
        resolve(estudiante);
    });
}
function getColegioByIdUsingPromises(id) {
    return new Promise((resolve, reject) => {
        const colegio = data_1.colegios.find(e => e.id === id);
        if (!colegio) {
            const error = new Error('colegio no encontrado');
            reject(error);
        }
        resolve(colegio);
    });
}
function getCiudadByIdUsingPromises(id) {
    return new Promise((resolve, reject) => {
        const ciudad = data_1.ciudades.find(e => e.id === id);
        if (!ciudad) {
            const error = new Error('ciudad no encontrado');
            reject(error);
        }
        resolve(ciudad);
    });
}
