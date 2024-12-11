import {JwtService} from "@nestjs/jwt";
import {Inject, UnauthorizedException} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";
import {firstValueFrom} from "rxjs";
import {ITokenPayload, ITokenResponse, IUserResponse} from "../interfaces";

export class LoginService {
    constructor(private readonly jwtService: JwtService, @Inject('USER_SERVICE') private readonly userClient: ClientProxy) {
    }

    private async generateToken(email: string): Promise<ITokenResponse> {
        const user = await firstValueFrom<IUserResponse>(this.userClient.send({cmd: 'user.findByEmail'}, email))
        const payloadKey = process.env.PAYLOAD_KEY
        const environment = process.env.ENVIRONMENT
        const secretAccessKey = process.env.JWT_ACCESS_KEY
        const secretRefreshKey = process.env.JWT_REFRESH_KEY
        const payload: ITokenPayload = {
            id: user.id,
            email: user.email,
            key: payloadKey,
        };
        const accessToken = this.jwtService.sign(payload, {
            secret: secretAccessKey,
            expiresIn: environment === 'prod' ? '15m' : '30m'
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: secretRefreshKey,
            expiresIn: environment === 'prod' ? '7d' : '10d'
        });
        return {
            AT: accessToken,
            RT: refreshToken,
            user: {
                id: user.id,
                user_name: user.user_name,
                avatar: user.avatar,
                email: user.email,
            }
        };
    }

    async login(email: string) {
        try {
            return await this.generateToken(email)
        } catch (e) {
            console.log(e)
        }
    }
}