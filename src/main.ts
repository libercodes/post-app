import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import { pipesConfig } from './config/pipes';

dotenv.config();
const { PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe(pipesConfig));

  await app.listen(PORT);
}
bootstrap();
