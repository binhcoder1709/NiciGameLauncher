import {Body, Controller, HttpCode, Post, Res} from "@nestjs/common";
import {LoginDto} from "../../dtos/auth/login.dto";
import {HttpService} from "@nestjs/axios";
import {lastValueFrom} from "rxjs";
import {Response} from "express";
import { ILoginResponse} from "../../interfaces";
import {AxiosResponse} from "axios";

@Controller("/v1/auth")
export class AuthController {
    constructor(private readonly httpService: HttpService) {}

    @Post("/user/login")
    @HttpCode(200)
    async login(@Body() data: LoginDto, @Res() res: Response): Promise<void> {
        try {
            const response = await lastValueFrom<AxiosResponse<ILoginResponse>>(
                this.httpService.post(process.env.AUTH_AGG_API, data)
            );
            console.log(response.data)
            res.status(200).json({
                status: "success",
                data: response.data ,
                error: null
            });
        } catch (error) {
            const statusCode = error.response?.status || 500;
            const errorMessage = error.response?.data?.message || "Internal Server Error";

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
