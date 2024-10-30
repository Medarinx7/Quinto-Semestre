import { IsInt, IsDateString, IsString, Min } from 'class-validator';

export class RegistroDTO {
  @IsInt()
  idPlato: number;

  @IsInt()
  idPaciente: number;

  @IsDateString()
  fecha: Date;

  @IsString()
  hora: string;

  @IsInt()
  @Min(1)
  numeroCaloriasConsumidas: number;

  @IsInt()
  @Min(1)
  numeroPorciones: number;
}
