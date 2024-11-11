import { Module } from '@nestjs/common';
import { RegistroService } from '../services/registro.service';
import { RegistroController } from '../controllers/registro.controller';

@Module({
  providers: [RegistroService],
  controllers: [RegistroController],
})
export class RegistroModule {}
