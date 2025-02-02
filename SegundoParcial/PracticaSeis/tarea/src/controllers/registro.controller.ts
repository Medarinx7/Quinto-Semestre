import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroService } from '../services/registro.service';
import { CreateRegistroDto } from '../dto/create-registro.dto';
import { UpdateRegistroDto } from '../dto/update-registro.dto';

@Controller('registro')
export class RegistroController {
  constructor(private registroService: RegistroService) {}

  @Get()
  findAll() {
    return this.registroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateRegistroDto) {
    return this.registroService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateRegistroDto) {
    return this.registroService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroService.remove(id);
  }
}
