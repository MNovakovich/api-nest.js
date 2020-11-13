import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe} from '@nestjs/common'

const port = process.env.PORT || 8000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`server running on port ${port}`, 'Bootstrap');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true
    })
  )
}
bootstrap();
