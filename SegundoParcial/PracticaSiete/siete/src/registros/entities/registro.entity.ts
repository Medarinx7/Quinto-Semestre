import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Paciente } from '../../pacientes/entities/paciente.entity';
import { Plato } from '../../platos/entities/plato.entity';

@ObjectType()
export class Registro {
  @Field(() => Int)
  id: number;

  @Field(() => Paciente)
  paciente: Paciente;

  @Field(() => Plato)
  plato: Plato;

  @Field(() => Int)
  pacienteId: number;

  @Field(() => Int)
  platoId: number;

  @Field()
  fecha: string;
}
