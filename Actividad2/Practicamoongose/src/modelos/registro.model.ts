import { Schema, model } from 'mongoose';
import { IRegistro } from '../interfaces/registro.interface';

const RegistroSchema = new Schema<IRegistro>({
  pacienteId: { type: Schema.Types.ObjectId, ref: 'Paciente', required: true },
  platoId: { type: Schema.Types.ObjectId, ref: 'Plato', required: true },
  fecha: { type: Date, required: true },
  comentarios: { type: String },
});

export const Registro = model<IRegistro>('Registro', RegistroSchema);
