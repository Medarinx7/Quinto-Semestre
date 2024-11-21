// platos/platos.module.ts
import { Module } from '@nestjs/common';
import { PlatosService } from './platos.service';
import { PlatosResolver } from './platos.resolver';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  imports: [PrismaModule], 
  providers: [PlatosService, PlatosResolver],
})
export class PlatosModule {}
