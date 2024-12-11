import {
    BadRequestException,
    Body,
    Controller,
    Get, HttpCode,
    Inject,
    Param,
    Post, Res,
    UploadedFile,
    UseInterceptors
} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";
import {firstValueFrom} from "rxjs";
import {IGameResponse} from "../../interfaces";
import {Response} from "express";

@Controller("/v1/games")
export class GameController {
    constructor(@Inject("GAME_AGG") private readonly game: ClientProxy) {
    }

    // @Get("/list")
    // handleGetListGames() {
    //     return this.game.send({cmd: 'game.allGames'}, {})
    // }

    @Get("/:id")
    @HttpCode(200)
    async handleGetGameById(@Param("id") id: string, @Res() res: Response): Promise<void> {
        try {
            const game = await firstValueFrom<IGameResponse>(this.game.send({cmd: 'gameDetail'}, id))
            console.log(game)
            res.status(200).json({
                status: "success",
                data: game,
                error: null
            })
        } catch (e) {
            const statusCode = e.response?.status || 500;
            const errorMessage = e.response?.data?.message || "Internal Server Error";
            res.status(statusCode).json({
                status: "error",
                data: null,
                error: {
                    statusCode,
                    message: errorMessage
                }
            });
        }
    }

    @Get("/download/*")
    @HttpCode(200)
    async getDownloadUrl(@Param() fp: { 0: string }, @Res() res: Response): Promise<void> {
        try {
            const url = await firstValueFrom(this.game.send({cmd: 'downloadSignedUrl'}, fp[0]))
            res.status(200).json({
                status: "success",
                data: url,
                error: null
            })
        } catch (e) {
            const statusCode = e.response?.status || 500;
            const errorMessage = e.response?.data?.message || "Internal Server Error";
            res.status(statusCode).json({
                status: "error",
                data: null,
                error: {
                    statusCode,
                    message: errorMessage
                }
            });
        }
    }

    // @Post("/create")
    // @UseInterceptors(FileInterceptor('game_resource'))
    // handleCreateGame(@Body() gameData: CreateGameDto, @UploadedFile() gameResource: Express.Multer.File) {
    //     return this.game.send({cmd: 'createGame'}, {
    //         gameData: gameData,
    //         gameResource: gameResource
    //     })
    // }


}