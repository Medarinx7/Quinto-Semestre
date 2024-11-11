import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRegistroDto } from '../dto/create-registro.dto';
import { UpdateRegistroDto } from '../dto/update-registro.dto';

@Injectable()
export class RegistroService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.registro.findMany();
  }

  findOne(id: string) {
    return this.prisma.registro.findUnique({ where: { id } });
  }

  create(data: CreateRegistroDto) {
    return this.prisma.registro.create({ data });
  }

  update(id: string, data: UpdateRegistroDto) {
    return this.prisma.registro.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.registro.delete({ where: { id } });
  }
}
