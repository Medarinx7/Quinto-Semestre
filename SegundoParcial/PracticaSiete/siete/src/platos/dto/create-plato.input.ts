import { InputType, Field, Int } from '@nestjs/graphql';  
import { IsNotEmpty, IsInt } from 'class-validator';

@InputType()
export class CreatePlatoInput {
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
