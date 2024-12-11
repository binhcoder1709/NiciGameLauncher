import {Controller} from '@nestjs/common';
import {AppService} from './app.service';
import {MessagePattern, Payload} from "@nestjs/microservices";
import {IUserResponse} from "./interfaces";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @MessagePattern({cmd: 'user.checkPasswordValid'})
    async checkPassword(@Payload() data: { email: string, password: string }): Promise<boolean> {
        return await this.appService.checkPasswordValid(data.email, data.password);
    }

    @MessagePattern({cmd: "user.checkUserActive"})
    async checkUserActive(@Payload() email: string): Promise<boolean> {
        return await this.appService.checkUserActive(email);
    }

    @MessagePattern({cmd: 'user.findByEmail'})
    async getUserByEmail(@Payload() email: string): Promise<IUserResponse | null> {
        return await this.appService.getUserByEmail(email)
    }

    @MessagePattern({cmd: 'user.findById'})
    async getUserById(@Payload() id: string): Promise<IUserResponse | null> {
        return await this.appService.getUserById(id)
    }
}
