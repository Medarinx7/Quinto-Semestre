// src/routes/platoRoutes.ts
import { Router } from 'express';
import {
  getAllPlatos,
  getPlatoById,
  createPlato,
  updatePlato,
  deletePlato,
} from '../controllers/platoController';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    await getAllPlatos(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    await getPlatoById(req, res);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    await createPlato(req, res);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    await updatePlato(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await deletePlato(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
