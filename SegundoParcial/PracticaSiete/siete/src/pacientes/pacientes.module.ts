// pacientes/pacientes.module.ts
import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacientesResolver } from './pacientes.resolver';
import { PrismaModule } from '../prisma/prisma.module'; // Importa el módulo Prisma

@Module({
  imports: [PrismaModule], // Asegúrate de importar PrismaModule
  providers: [PacientesService, PacientesResolver],
})
export class PacientesModule {}
