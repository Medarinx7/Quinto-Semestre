import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePacienteInput } from './dto/create-paciente.input';
import { UpdatePacienteInput } from './dto/update-paciente.input';

@Injectable()
export class PacientesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.paciente.findMany();
  }

  async findOne(id: number) {
    return this.prisma.paciente.findUnique({ where: { id } });
  }

  async create(data: CreatePacienteInput) {
    return this.prisma.paciente.create({ data });
  }

  async update(id: number, data: UpdatePacienteInput) {
    return this.prisma.paciente.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.paciente.delete({ where: { id } });
  }
}
