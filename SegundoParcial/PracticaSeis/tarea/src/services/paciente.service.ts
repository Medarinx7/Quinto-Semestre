// paciente.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';  // Asegúrate de tener Prisma configurado correctamente
import { CreatePacienteDto } from '../dto/create-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(private readonly prisma: PrismaService) {}

  // Método para obtener todos los pacientes
  async findAll() {
    return this.prisma.paciente.findMany();  // Utiliza Prisma para obtener todos los pacientes
  }

  // Método para crear un paciente
  async create(createPacienteDto: CreatePacienteDto) {
    return this.prisma.paciente.create({
      data: createPacienteDto,
    });
  }
}
