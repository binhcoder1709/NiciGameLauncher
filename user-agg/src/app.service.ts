import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {firstValueFrom} from "rxjs";
import {IUserResponse} from "./interfaces/user";
import {IGameResponse, IUserDashboardResponse} from "./interfaces/dashboard";

@Injectable()
export class AppService {
    constructor(@Inject("USER_SERVICE") private readonly userClient: ClientProxy, @Inject("GAME_SERVICE") private readonly gameClient: ClientProxy) {
    }

    async userDashboard(): Promise<IUserDashboardResponse> {
        const games = await this.getAllGames()
        return {
            games: games
        };
    }

    async getUser(id: string): Promise<IUserResponse> {
        return await firstValueFrom(this.userClient.send({cmd: "user.findById"}, id))
    }

    async getGamesLibrary(userId: string): Promise<IGameResponse[]> {
        const gameArr: IGameResponse[] = []
        try {
            const user = await firstValueFrom<IUserResponse>(this.userClient.send({cmd: "user.findById"}, userId))
            for (const gameId of user.library) {
                const game = await firstValueFrom<IGameResponse>(this.gameClient.send({cmd: 'game.findById'}, gameId))
                gameArr.push(game)
            }
            return gameArr
        } catch (e) {
            console.log(e)
        }
    }

    private async getAllGames(): Promise<IGameResponse[]> {
        return await firstValueFrom(this.gameClient.send({cmd: 'game.allGames'}, {}))
    }
}
