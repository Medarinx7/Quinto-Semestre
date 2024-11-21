import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PacientesService } from './pacientes.service';
import { CreatePacienteInput } from './dto/create-paciente.input';
import { UpdatePacienteInput } from './dto/update-paciente.input';
import { Paciente } from './entities/paciente.entity';

@Resolver('Paciente')
export class PacientesResolver {
  constructor(private readonly pacientesService: PacientesService) {}

  @Query(() => [Paciente])
  findAll() {
    return this.pacientesService.findAll();
  }

  @Query(() => Paciente)
  findOne(@Args('id') id: number) {
    return this.pacientesService.findOne(id);
  }

  @Mutation(() => Paciente)
  createPaciente(@Args('data') data: CreatePacienteInput) {
    return this.pacientesService.create(data);
  }

  @Mutation(() => Paciente)
  updatePaciente(
    @Args('id') id: number,
    @Args('data') data: UpdatePacienteInput,
  ) {
    return this.pacientesService.update(id, data);
  }

  @Mutation(() => Boolean)
  removePaciente(@Args('id') id: number) {
    return this.pacientesService.remove(id);
  }
}
