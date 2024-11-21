import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientesModule } from './pacientes/pacientes.module';
import { PlatosModule } from './platos/platos.module';
import { RegistrosModule } from './registros/registros.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'; // Importa ApolloDriver
import { join } from 'path';

@Module({
  imports: [
    PacientesModule,
    PlatosModule,
    RegistrosModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Especifica el driver Apollo
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Generación automática del esquema GraphQL
      sortSchema: true, // Opcional, para ordenar el esquema
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
