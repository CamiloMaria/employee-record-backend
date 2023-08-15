import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import connectDB from './config/config';
import * as dotnev from 'dotenv';

async function bootstrap() {
  dotnev.config();

  const app = await NestFactory.create(AppModule);

  // Configura el título y descripción de la documentación
  const options = new DocumentBuilder()
    .setTitle('Employee Extension Search API')
    .setDescription('API para buscar extensiones de empleados')
    .setVersion('1.0')
    .build();

  // Crea la documentación en la ruta /api
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
connectDB();
