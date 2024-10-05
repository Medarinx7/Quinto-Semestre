import jwt from 'jsonwebtoken';

// Se obtiene la clave secreta del entorno
const JWT_SECRET = process.env.JWT_SECRET || 'tu_clave_secreta';

/**
 * Función para generar un token JWT.
 * @param id - ID del usuario.
 * @param nombre - Nombre del usuario.
 * @param expiresIn - Tiempo de expiración del token (opcional).
 * @returns - Token JWT.
 */
export const generarToken = (id: number, nombre: string, expiresIn: string = '1h'): string => {
    return jwt.sign({ id, nombre }, JWT_SECRET, { expiresIn });
};

/**
 * Función para verificar un token JWT.
 * @param token - Token a verificar.
 * @returns - Decodificación del token o null si no es válido.
 */
export const verificarToken = (token: string): any => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null; // Retorna null si el token no es válido
    }
};
