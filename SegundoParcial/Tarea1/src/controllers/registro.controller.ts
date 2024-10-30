import { Request, Response } from 'express';
import { RegistroService } from '../services/registro.service';

const registroService = new RegistroService();

export const obtenerRegistros = async (req: Request, res: Response) => {
  const registros = await registroService.obtenerRegistros();
  res.json(registros);
};

export const crearRegistro = async (req: Request, res: Response) => {
  const registro = await registroService.crearRegistro(req.body);
  res.status(201).json(registro);
};
