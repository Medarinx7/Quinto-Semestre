import { IsString, IsDateString } from 'class-validator';

export class CreateRegistroDto {
  @IsString()
  idPaciente: string;

  @IsString()
  idPlato: string;

  @IsDateString()
  fecha: Date;
}
