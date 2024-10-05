import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number; // o el tipo que sea
        nombre: string;
        estado: 'Activo' | 'Inactivo';
      };
    }
  }
}
