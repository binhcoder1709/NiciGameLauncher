import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,
        {
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://admin:admin@localhost:5672'],
                queue: 'user-queue',
                queueOptions: {
                    durable: true
                }
            }
        });
    await app.listen();
    console.log("User Service is running")
}

bootstrap();
