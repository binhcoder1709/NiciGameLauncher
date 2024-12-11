import {Inject, Injectable, InternalServerErrorException} from '@nestjs/common';
import {AppRepository} from "./app.repository";
import {IGameCreate, IGameResponse, IGameUploadedResponse} from "./interfaces";
import {firstValueFrom} from "rxjs";
import {ClientProxy} from "@nestjs/microservices";
import {Game} from "./schemas/game.schema";

@Injectable()
export class AppService {
    constructor(private readonly appRepository: AppRepository, @Inject("UPLOAD_GAME_SERVICE") private readonly uploadGame: ClientProxy) {
    }

    // async handleCreateGameService(gameData: IGameCreate, gameResource: Express.Multer.File): Promise<boolean> {
    //     try {
    //         const uploadedResponse: IGameUploadedResponse = await firstValueFrom(this.uploadGame.send({cmd: 'uploadGameResource'}, {
    //             filename: gameResource.originalname,
    //             mimetype: gameResource.mimetype,
    //             data: gameResource.buffer.toString('base64'),
    //             author: gameData.created_by,
    //             folderName: gameData.folder_name
    //         }))
    //         await this.appRepository.createOne({
    //             game_name: gameData.game_name,
    //             description: gameData.description,
    //             price: Number(gameData.price),
    //             folder_name: gameData.folder_name,
    //             exec_file_name: gameData.exec_file_name,
    //             category: gameData.category,
    //             banner_image: gameData.banner_image,
    //             slide_images: ["https://firebasestorage.googleapis.com/v0/b/tommy-studio-93d6f.appspot.com/o/360_F_423425529_Ry6bKSuIhrOqnfBrMYghKZOVtyUqktQ1.jpg?alt=media&token=a74c736f-44d5-4559-9ee0-ba8d466c5efc", "https://firebasestorage.googleapis.com/v0/b/tommy-studio-93d6f.appspot.com/o/tic-tac-toe-xo-game-260nw-2390860129.webp?alt=media&token=f086e661-67cf-4d6d-ab79-95a2a27084a4"],
    //             created_by: gameData.created_by,
    //             path_name: uploadedResponse.path,
    //         })
    //         return true
    //     } catch (e) {
    //         throw new InternalServerErrorException("Internal Server Error")
    //     }
    // }

    async handleGetListGamesService(): Promise<IGameResponse[]> {
        const games: Game[] = await this.appRepository.findAll();
        return games.map((game) => ({
            id: game.id,
            game_name: game.game_name,
            description: game.description,
            price: game.price,
            banner_image: game.banner_image,
            slide_images: game.slide_images,
            logo: game.logo,
            path_name: game.path_name,
            folder_installation: game.folder_installation,
            rating: game.rating,
            count_rating: game.count_rating,
            count_view: game.count_view,
            count_play: game.count_play,
            exec_file_name: game.exec_file_name,
            created_by: game.created_by,
        }));
    }

    async handleGetGameByIdService(id: string): Promise<IGameResponse> {
        const game = await this.appRepository.findById(id)
        if (!game) return null;
        return {
            id: game.id,
            game_name: game.game_name,
            description: game.description,
            price: game.price,
            banner_image: game.banner_image,
            slide_images: game.slide_images,
            logo: game.logo,
            path_name: game.path_name,
            folder_installation: game.folder_installation,
            rating: game.rating,
            count_rating: game.count_rating,
            count_view: game.count_view,
            count_play: game.count_play,
            exec_file_name: game.exec_file_name,
            created_by: game.created_by,
        }
    }
}
