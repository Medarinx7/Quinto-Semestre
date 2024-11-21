import { IsOptional, IsInt, IsString } from 'class-validator';

export class UpdateRegistroInput {
  @IsOptional()
  @IsInt()
  pacienteId?: number;

  @IsOptional()
  @IsInt()
  platoId?: number;

  @IsOptional()
  @IsString()
  fecha?: string;
}
