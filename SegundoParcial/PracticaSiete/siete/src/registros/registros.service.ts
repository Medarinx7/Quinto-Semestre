import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRegistroInput } from './dto/create-registro.input';
import { UpdateRegistroInput } from './dto/update-registro.input';

@Injectable()
export class RegistrosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.registro.findMany({ include: { paciente: true, plato: true } });
  }

  async findOne(id: number) {
    return this.prisma.registro.findUnique({ where: { id }, include: { paciente: true, plato: true } });
  }

  async create(data: CreateRegistroInput) {
    return this.prisma.registro.create({ data });
  }

  async update(id: number, data: UpdateRegistroInput) {
    return this.prisma.registro.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.registro.delete({ where: { id } });
  }
}
