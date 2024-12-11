import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {MessagePattern, Payload} from "@nestjs/microservices";
import {IGameCreate} from "./interfaces";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    // @MessagePattern({cmd: 'createGame'})
    // async handleCreateGameController(@Payload() data: {
    //     gameData: IGameCreate, gameResource: Express.Multer.File
    // }) {
    //     return await this.appService.handleCreateGameService(data.gameData, data.gameResource)
    // }

    @MessagePattern({cmd: 'game.allGames'})
    async handleGetListGamesController() {
        return await this.appService.handleGetListGamesService()
    }

    @MessagePattern({cmd: 'game.findById'})
    async handleGetGameByIdController(@Payload() id: string) {
        return await this.appService.handleGetGameByIdService(id)
    }
}
