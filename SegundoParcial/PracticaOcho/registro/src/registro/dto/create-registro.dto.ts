import { IsString, IsInt, IsNumber } from 'class-validator';

export class CreateRegistroDto {
  @IsInt()
  public idPlato: number;

  @IsInt()
  public idPaciente: number;

  @IsString()
  public Fecha: string; // Corregido a string

  @IsString()
  public Hora: string; // Corregido a string

  @IsNumber({ allowNaN: false, allowInfinity: false })
  public NumeroDeCaloriasConsumidas: number;

  @IsNumber({ allowNaN: false, allowInfinity: false })
  public NumeroDePorciones: number;
}
