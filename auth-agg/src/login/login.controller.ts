import {Body, Controller, HttpCode, Post, Res} from "@nestjs/common";
import {LoginService} from "./login.service";
import {Response} from "express";

@Controller("/login")
export class LoginController {
    constructor(private readonly loginService: LoginService) {
    }

    @Post()
    @HttpCode(200)
    async login(@Body() data: { email: string, password: string }, @Res() res: Response) {
        const token = await this.loginService.login(data.email)
        res.status(200).json(token)
    }
}