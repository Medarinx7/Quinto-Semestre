import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlatoInput } from './dto/create-plato.input';
import { UpdatePlatoInput } from './dto/update-plato.input';

@Injectable()
export class PlatosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.plato.findMany();
  }

  async findOne(id: number) {
    return this.prisma.plato.findUnique({ where: { id } });
  }

  async create(data: CreatePlatoInput) {
    return this.prisma.plato.create({ data });
  }

  async update(id: number, data: UpdatePlatoInput) {
    return this.prisma.plato.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.plato.delete({ where: { id } });
  }
}
