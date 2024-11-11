import { IsString, IsInt } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  nombre: string;

  @IsInt()
  identificacion: number;

  @IsString()
  periodoDeTiempoActual: string;

  @IsString()
  gustos: string;
}
