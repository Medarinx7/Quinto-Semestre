// registros/registros.module.ts
import { Module } from '@nestjs/common';
import { RegistrosService } from './registros.service';
import { RegistrosResolver } from './registros.resolver';
import { PrismaModule } from '../prisma/prisma.module';  // Importa PrismaModule

@Module({
  imports: [PrismaModule],  // Asegúrate de incluir PrismaModule
  providers: [RegistrosService, RegistrosResolver],
})
export class RegistrosModule {}
