import { InputType, Field, Int } from '@nestjs/graphql';  // Importando Int para los tipos numéricos
import { IsNotEmpty, IsInt } from 'class-validator';

@InputType()
export class UpdatePlatoInput {
  @Field()
  @IsNotEmpty()
  nombre: string;

  @Field(() => Int) 
  @IsInt()
  precio: number;

  @Field(() => Int)  
  @IsInt()
  calorias: number;  
}
