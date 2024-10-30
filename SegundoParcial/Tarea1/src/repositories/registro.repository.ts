import { Repository } from 'typeorm';
import { AppDataSource } from '../config/data-source';
import { Registro } from '../entities/registro.entity';

export const RegistroRepository = AppDataSource.getRepository(Registro);
