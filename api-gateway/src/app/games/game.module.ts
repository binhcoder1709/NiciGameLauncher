import {Module} from "@nestjs/common";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {GameController} from "./game.controller";

@Module({
    imports: [ClientsModule.register([{
        name: 'GAME_AGG',
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://admin:admin@localhost:5672'],
            queue: 'game-agg-queue',
            queueOptions: {
                durable: true,
            }
        }
    }])],
    controllers: [GameController]
})
export class GameModule {
}