import { IsNotEmpty, IsInt, IsOptional } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()  // Marca la clase como tipo de entrada de GraphQL
export class UpdatePacienteInput {
  @Field({ nullable: true })  // Indica que 'nombre' es un campo de GraphQL y es opcional
  @IsNotEmpty()
  @IsOptional()
  nombre?: string;

  @Field({ nullable: true })  
  @IsInt()
  @IsOptional()
  edad?: number;
}
