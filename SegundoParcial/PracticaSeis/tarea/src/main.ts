import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors();

  // Escuchar en el puerto definido en process.env.PORT o 3000 por defecto
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
