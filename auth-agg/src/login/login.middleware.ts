import {Inject, NestMiddleware, UnauthorizedException} from "@nestjs/common";
import {NextFunction, Request, Response} from "express";
import {firstValueFrom} from "rxjs";
import {ClientProxy} from "@nestjs/microservices";
import {IUserResponse} from "../interfaces";

export class LoginMiddleware implements NestMiddleware {
    constructor(@Inject("USER_SERVICE") private readonly userClient: ClientProxy) {
    }

    async use(req: Request, res: Response, next: NextFunction) {
        const {email, password} = req.body

        const user = await firstValueFrom<Promise<IUserResponse | null>>(this.userClient.send({cmd: 'user.findByEmail'}, email))
        const checkPwd = await firstValueFrom<Promise<boolean>>(this.userClient.send({cmd: 'user.checkPasswordValid'}, {
            email,
            password
        }))
        if (user === null || !checkPwd) {
            return res.status(401).send({message: `Invalid email or password`})
        }

        const userActive = await firstValueFrom<Promise<boolean>>(this.userClient.send({cmd: "user.checkUserActive"}, email))
        if (!userActive) {
            return res.status(401).send({message: `Account has been inactive`})
        }

        next()

    }
}