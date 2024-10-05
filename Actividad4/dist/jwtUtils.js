"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarToken = exports.generarToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Se obtiene la clave secreta del entorno
const JWT_SECRET = process.env.JWT_SECRET || 'tu_clave_secreta';
/**
 * Función para generar un token JWT.
 * @param id - ID del usuario.
 * @param nombre - Nombre del usuario.
 * @param expiresIn - Tiempo de expiración del token (opcional).
 * @returns - Token JWT.
 */
const generarToken = (id, nombre, expiresIn = '1h') => {
    return jsonwebtoken_1.default.sign({ id, nombre }, JWT_SECRET, { expiresIn });
};
exports.generarToken = generarToken;
/**
 * Función para verificar un token JWT.
 * @param token - Token a verificar.
 * @returns - Decodificación del token o null si no es válido.
 */
const verificarToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, JWT_SECRET);
    }
    catch (error) {
        return null; // Retorna null si el token no es válido
    }
};
exports.verificarToken = verificarToken;
