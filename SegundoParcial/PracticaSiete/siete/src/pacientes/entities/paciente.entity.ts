import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Paciente {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  edad: number;

  @Field()
  direccion: string;
}
