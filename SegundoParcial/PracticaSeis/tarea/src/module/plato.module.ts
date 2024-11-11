import { Module } from '@nestjs/common';
import { PlatoService } from '../services/plato.service';
import { PlatoController } from '../controllers/plato.controller';

@Module({
  providers: [PlatoService],
  controllers: [PlatoController]
})
export class PlatoModule {}
