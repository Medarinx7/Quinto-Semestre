import { Schema, model } from 'mongoose';
import { IPaciente } from '../interfaces/paciente.interface';

const PacienteSchema = new Schema<IPaciente>({
  id: { type: Number, required: true },
  nombre: { type: String, required: true },
  identificacion: { type: Number, required: true },
  periodoDeTiempoActual: { type: String, required: true },
  gustos: { type: String, required: true },
});

export const Paciente = model<IPaciente>('Paciente', PacienteSchema);
