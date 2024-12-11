import {CanActivate, ExecutionContext, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";
import {ITokenPayload} from "../../interfaces";

export class CheckUserToken implements CanActivate {
    constructor(private readonly jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const authToken = request.headers.authorization;
        if (!authToken) {
            throw new UnauthorizedException("Token not found");
        }
        const token = this.extractTokenFromHeader(authToken);

        // const checkTokenValid = this.jwtService.verify<ITokenPayload>(token, {secret: process.env.JWT_ACCESS_KEY})
        // console.log(checkTokenValid)
        // if (!checkTokenValid) {
        //     throw new UnauthorizedException("Token invalid");
        // }
        try {
            this.jwtService.verify<ITokenPayload>(token, { secret: process.env.JWT_ACCESS_KEY });
        } catch (error) {
            throw new UnauthorizedException('Token invalid');
        }

        return true
    }

    private extractTokenFromHeader(tokenHeader: string): string {
        return tokenHeader.split(" ")[1]
    }
}