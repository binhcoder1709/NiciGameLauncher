import {Controller, Get, HttpCode, Inject, Param, Res, UnauthorizedException, UseGuards} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";
import {firstValueFrom, Observable} from "rxjs";
import {IGameResponse, IUserDashboardResponse, IUserResponse} from "../../interfaces";
import {Response} from "express";
import {CheckUserToken} from "../../shared/guard/userToken";

@Controller("/v1/users")
export class UserController {
    constructor(@Inject("USER_AGG") private readonly userClient: ClientProxy) {
    }

    @Get("/dashboard")
    @HttpCode(200)
    async getDashboard(@Res() res: Response) {
        try {
            const userDashboard = await firstValueFrom<Promise<IUserDashboardResponse>>(this.userClient.send({cmd: 'userDashboard'}, {}))
            res.status(200).json({
                status: "success",
                data: userDashboard,
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

    @Get("/:id")
    async getUserById(@Param("id") id: string, @Res() res: Response): Promise<void> {
        try {
            const user = await firstValueFrom<IUserResponse>(this.userClient.send({cmd: 'getUser'}, id))
            res.status(200).json({
                status: "success",
                data: user,
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

    @UseGuards(CheckUserToken)
    @Get("/library/:id")
    async getUserLib(@Param("id") id: string, @Res() res: Response): Promise<void> {
        try {
            const gameInLib = await firstValueFrom<IGameResponse[]>(this.userClient.send({cmd: "getUserLibrary"}, id))
            res.status(200).json({
                status: "success",
                data: gameInLib,
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
}