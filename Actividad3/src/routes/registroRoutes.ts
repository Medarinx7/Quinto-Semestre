// src/routes/registroRoutes.ts
import { Router } from 'express';
import {
  getAllRegistros,
  getRegistroById,
  createRegistro,
  updateRegistro,
  deleteRegistro,
} from '../controllers/registroController';

const router = Router();

// Obtener todos los registros
router.get('/', async (req, res, next) => {
  try {
    await getAllRegistros(req, res);
  } catch (error) {
    next(error);
  }
});

// Obtener un registro por ID
router.get('/:id', async (req, res, next) => {
  try {
    await getRegistroById(req, res);
  } catch (error) {
    next(error);
  }
});

// Crear un nuevo registro
router.post('/', async (req, res, next) => {
  try {
    await createRegistro(req, res);
  } catch (error) {
    next(error);
  }
});

// Actualizar un registro por ID
router.put('/:id', async (req, res, next) => {
  try {
    await updateRegistro(req, res);
  } catch (error) {
    next(error);
  }
});

// Eliminar un registro por ID
router.delete('/:id', async (req, res, next) => {
  try {
    await deleteRegistro(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;

