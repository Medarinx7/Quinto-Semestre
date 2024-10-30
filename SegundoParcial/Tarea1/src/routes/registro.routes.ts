import { Router } from 'express';
import { obtenerRegistros, crearRegistro } from '../controllers/registro.controller';

const router = Router();

router.get('/registros', obtenerRegistros);
router.post('/registros', crearRegistro);

export default router;
