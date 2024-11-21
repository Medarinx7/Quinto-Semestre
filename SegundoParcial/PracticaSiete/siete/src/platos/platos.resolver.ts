import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PlatosService } from './platos.service';
import { CreatePlatoInput } from './dto/create-plato.input';
import { UpdatePlatoInput } from './dto/update-plato.input';
import { Plato } from './entities/plato.entity';


@Resolver('Plato')
export class PlatosResolver {
  constructor(private readonly platosService: PlatosService) {}

  @Query(() => [Plato])
  findAll() {
    return this.platosService.findAll();
  }

  @Query(() => Plato)
  findOne(@Args('id') id: number) {
    return this.platosService.findOne(id);
  }

  @Mutation(() => Plato)
  createPlato(@Args('data') data: CreatePlatoInput) {
    return this.platosService.create(data);
  }

  @Mutation(() => Plato)
  updatePlato(@Args('id') id: number, @Args('data') data: UpdatePlatoInput) {
    return this.platosService.update(id, data);
  }

  @Mutation(() => Boolean)
  removePlato(@Args('id') id: number) {
    return this.platosService.remove(id);
  }
}
