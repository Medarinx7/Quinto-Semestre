// prisma/prisma.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Asegúrate de exportarlo para que pueda ser utilizado en otros módulos
})
export class PrismaModule {}
