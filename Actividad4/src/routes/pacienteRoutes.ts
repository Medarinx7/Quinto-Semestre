import { Router } from 'express';
import {
  getPacientes,
  getPacienteById,
  createPaciente,
  updatePaciente,
  deletePaciente
} from '../controllers/pacienteController';

const router = Router();

router.get('/', getPacientes);
router.get('/:id', getPacienteById);
router.post('/', createPaciente);
router.patch('/:id', updatePaciente);
router.delete('/:id', deletePaciente);

export default router;
