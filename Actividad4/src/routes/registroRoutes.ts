import { Router } from 'express';
import {
    crearRegistro,
    obtenerRegistros,
    obtenerRegistroPorId,
    actualizarRegistro,
    eliminarRegistro
} from '../controllers/registroController'; // Asegúrate de que la ruta sea correcta

const router = Router();

// Ruta para crear un nuevo registro
router.post('/registros', crearRegistro);

// Ruta para obtener todos los registros
router.get('/registros', obtenerRegistros);

// Ruta para obtener un registro específico por ID
router.get('/registros/:id', obtenerRegistros);

// Ruta para actualizar un registro existente
router.put('/registros/:id', actualizarRegistro);

// Ruta para eliminar un registro
router.delete('/registros/:id', eliminarRegistro);

export default router;
