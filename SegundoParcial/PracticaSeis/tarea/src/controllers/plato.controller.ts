import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlatoService } from '../services/plato.service';
import { CreatePlatoDto } from '../dto/create-plato.dto';
import { UpdatePlatoDto } from '../dto/update-plato.dto';

@Controller('plato')
export class PlatoController {
  constructor(private platoService: PlatoService) {}

  @Get()
  findAll() {
    return this.platoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.platoService.findOne(id);
  }

  @Post()
  create(@Body() data: CreatePlatoDto) {
    return this.platoService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdatePlatoDto) {
    return this.platoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.platoService.remove(id);
  }
}
