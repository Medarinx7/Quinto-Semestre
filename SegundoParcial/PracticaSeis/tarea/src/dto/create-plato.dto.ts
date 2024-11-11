import { IsString, IsNumber } from 'class-validator';

export class CreatePlatoDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  precio: number;
}
