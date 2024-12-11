import {Module} from "@nestjs/common";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {AuthController} from "./auth.controller";
import {HttpModule} from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    controllers: [AuthController]
})
export class AuthModule {
}