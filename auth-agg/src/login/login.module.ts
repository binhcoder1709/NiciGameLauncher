import {MiddlewareConsumer, Module, NestModule} from "@nestjs/common";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {JwtModule} from "@nestjs/jwt";
import {LoginMiddleware} from "./login.middleware";
import {LoginService} from "./login.service";
import {LoginController} from "./login.controller";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [ClientsModule.register([{
        name: "USER_SERVICE",
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://admin:admin@localhost:5672'],
            queue: "user-queue",
            queueOptions: {
                durable: true
            }
        }
    }]),
        JwtModule.register({})],
    providers: [LoginService],
    controllers: [LoginController],
})
export class LoginModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoginMiddleware).forRoutes("*")
    }
}