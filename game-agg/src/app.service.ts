import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {firstValueFrom} from "rxjs";
import {IGameResponse} from "./interfaces/game";
import {firebase} from "./configs/firebase-admin";

@Injectable()
export class AppService {
    private bucket = firebase.storage().bucket()

    constructor(@Inject("GAME_SERVICE") private readonly gameClient: ClientProxy) {
    }

    async gameDetail(id: string): Promise<IGameResponse> {
        try {
            return await firstValueFrom(this.gameClient.send({cmd: 'game.findById'}, id))
        } catch (e) {
            console.log(e)
        }
    }


    async getSignedUrlDownload(filePath: string): Promise<string> {
        console.log(filePath);
        const bucket = firebase.storage().bucket();
        const file = bucket.file(filePath);
        const [url] = await file.getSignedUrl({
            action: 'read',
            expires: Date.now() + 60 * 1000,
        });
        return url;
    }
}
