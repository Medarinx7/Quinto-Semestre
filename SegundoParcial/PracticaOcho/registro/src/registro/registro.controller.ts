import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RegistroService } from './registro.service';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';

@Controller()
export class RegistroController {
  constructor(private readonly registrosService: RegistroService) {}

  @MessagePattern('createRegistro')
create(@Payload() createRegistroDto: CreateRegistroDto) {
  return this.registrosService.create(createRegistroDto);
}


  @MessagePattern({ cmd: 'get-registros' })
  async findAll() {
    try {
      return await this.registrosService.findAll();
    } catch (error) {
      throw new Error(`Error retrieving registros: ${error.message}`);
    }
  }

  @MessagePattern('find-one-registro')
  async findOne(@Payload() id: number) {
    try {
      return await this.registrosService.findOne(id);
    } catch (error) {
      throw new Error(`Error finding registro: ${error.message}`);
    }
  }

  @MessagePattern('update-registro')
  async update(@Payload() updateRegistroDto: UpdateRegistroDto) {
    try {
      return await this.registrosService.update(
        updateRegistroDto.id,
        updateRegistroDto,
      );
    } catch (error) {
      throw new Error(`Error updating registro: ${error.message}`);
    }
  }

  @MessagePattern('remove-registro')
  async remove(@Payload() id: number) {
    try {
      return await this.registrosService.remove(id);
    } catch (error) {
      throw new Error(`Error removing registro: ${error.message}`);
    }
  }
}
