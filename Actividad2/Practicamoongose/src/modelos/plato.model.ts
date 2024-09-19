import { Schema, model } from 'mongoose';
import { IPlato } from '../interfaces/plato.interface';

const PlatoSchema = new Schema<IPlato>({
  nombre: { type: String, required: true },
  calorias: { type: Number, required: true },
  tipo: { type: String, required: true },
});

export const Plato = model<IPlato>('Plato', PlatoSchema);
