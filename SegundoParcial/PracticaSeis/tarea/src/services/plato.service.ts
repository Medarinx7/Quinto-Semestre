import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlatoDto } from '../dto/create-plato.dto';
import { UpdatePlatoDto } from '../dto/update-plato.dto';

@Injectable()
export class PlatoService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.plato.findMany();
  }

  findOne(id: string) {
    return this.prisma.plato.findUnique({ where: { id } });
  }

  create(data: CreatePlatoDto) {
    return this.prisma.plato.create({ data });
  }

  update(id: string, data: UpdatePlatoDto) {
    return this.prisma.plato.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.plato.delete({ where: { id } });
  }
}
