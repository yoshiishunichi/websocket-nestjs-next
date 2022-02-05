import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const whitelist = ['http://localhost:3000', undefined];
  app.enableCors({
    origin: whitelist,
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'X-HTTP-Method-Override',
      'Content-Type',
      'Accept',
      'Observe',
      'Access-Control-Allow-Origin',
    ],
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  });
  await app.listen(process.env.PORT || 4200);
}
bootstrap();
