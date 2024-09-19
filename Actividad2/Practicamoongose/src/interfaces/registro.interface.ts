import { Document, ObjectId } from 'mongoose';

export interface IRegistro extends Document {
  pacienteId: ObjectId;
  platoId: ObjectId;
  fecha: Date;
  comentarios?: string;
}
