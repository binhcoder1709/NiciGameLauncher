import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports: [ClientsModule.register([{
        name: 'GAME_SERVICE',
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://admin:admin@localhost:5672'],
            queue: 'game-queue',
            queueOptions: {
                durable: true,
            }
        }
    }])],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
