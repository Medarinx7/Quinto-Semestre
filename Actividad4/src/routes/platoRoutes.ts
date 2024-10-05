// src/routes/platoRoutes.ts
import { Router } from 'express';
import {
    crearPlato,
    obtenerPlatos,
    actualizarPlato,
    eliminarPlato,
} from '../controllers/platoController';

const router = Router();

router.post('/', crearPlato);
router.get('/', obtenerPlatos);
router.put('/:id', actualizarPlato);
router.delete('/:id', eliminarPlato);

export default router;
