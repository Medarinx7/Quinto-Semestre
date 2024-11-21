import { IsNotEmpty, IsInt } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()  // Asegúrate de agregar este decorador
export class CreatePacienteInput {
  @Field()  // Esto indica que 'nombre' es un campo de GraphQL
  @IsNotEmpty()
  nombre: string;

  @Field()  // Esto indica que 'edad' es un campo de GraphQL
  @IsInt()
  edad: number;
}
