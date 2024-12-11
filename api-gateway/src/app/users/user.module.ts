import {Module} from "@nestjs/common";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {UserController} from "./user.controller";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [
        ClientsModule.register([{
            name: 'USER_AGG',
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://admin:admin@localhost:5672'],
                queue: 'user-agg-queue',
                queueOptions: {
                    durable: true,
                }
            }
        }]),
        JwtModule.register({})
    ],
    controllers: [UserController]
})
export class UserModule {
}