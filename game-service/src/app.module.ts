import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Game, GameSchema} from "./schemas/game.schema";
import {ConfigModule} from "@nestjs/config";
import {AppRepository} from "./app.repository";
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports: [ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true
    }), MongooseModule.forRoot(process.env.MONGOOSE_URI), MongooseModule.forFeature([{
        name: Game.name,
        schema: GameSchema
    }]), ClientsModule.register([{
        name: 'UPLOAD_GAME_SERVICE',
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://admin:admin@localhost:5672'],
            queue: 'upload-game-queue',
            queueOptions: {
                durable: true,
            }
        }
    }])],
    controllers: [AppController],
    providers: [AppService, AppRepository],
})
export class AppModule {
}
