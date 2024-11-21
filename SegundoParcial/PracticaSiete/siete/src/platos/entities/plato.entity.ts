import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Plato {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field(() => Int)
  calorias: number;
}
