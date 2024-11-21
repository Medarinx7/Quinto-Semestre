import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateRegistroInput {
  @IsNotEmpty()
  @IsInt()
  pacienteId: number;

  @IsNotEmpty()
  @IsInt()
  platoId: number;

  @IsNotEmpty()
  @IsString()
  fecha: string;
}
