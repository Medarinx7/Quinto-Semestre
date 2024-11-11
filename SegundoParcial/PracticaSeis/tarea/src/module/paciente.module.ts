import { Module } from '@nestjs/common';
import { PacienteService } from '../services/paciente.service';
import { PacienteController } from '../controllers/paciente.controller';

@Module({
  providers: [PacienteService],
  controllers: [PacienteController]
})
export class PacienteModule {}
