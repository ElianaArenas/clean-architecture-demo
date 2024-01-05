import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter } from './api/exceptions/httpException.filter';
import { TransformInterceptor } from './api/interceptors/response.interceptor';
import { AppModule } from './app.module';
import { API_DEFAULT_PORT, API_DEFAULT_PREFIX } from './common/constants';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  const PORT = API_DEFAULT_PORT;
  const PREFIX = API_DEFAULT_PREFIX;

  app.setGlobalPrefix(PREFIX);
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(PORT, () =>
    logger.log(`Listening on port: ${PORT}`, 'Main'),
  );
}

bootstrap();
