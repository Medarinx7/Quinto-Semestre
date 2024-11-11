// paciente.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PacienteService } from '../services/paciente.service';
import { CreatePacienteDto } from '../dto/create-paciente.dto';

@Controller('pacientes') // Ruta base
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Post()
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }
}