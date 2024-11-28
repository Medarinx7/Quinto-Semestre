import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroDto } from './create-registro.dto';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateRegistroDto extends PartialType(CreateRegistroDto) {
  @IsNumber()
  @IsPositive()
  id: number;
}
