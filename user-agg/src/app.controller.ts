import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {MessagePattern, Payload} from "@nestjs/microservices";
import {IUserResponse} from "./interfaces/user";
import {IGameResponse} from "./interfaces/dashboard";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @MessagePattern({cmd: "userDashboard"})
    async getUserDashboard() {
        return await this.appService.userDashboard()
    }

    @MessagePattern({cmd: 'getUser'})
    async getUser(@Payload() id: string): Promise<IUserResponse> {
        return await this.appService.getUser(id)
    }

    @MessagePattern({cmd: 'getUserLibrary'})
    async getGamesLibrary(@Payload() userId: string): Promise<IGameResponse[]> {
        return await this.appService.getGamesLibrary(userId)
    }
}
