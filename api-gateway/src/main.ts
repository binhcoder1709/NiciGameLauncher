import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.enableCors()
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(process.env.PORT ?? 3000);
    console.log("gateway is running")
}

bootstrap();
