import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {MessagePattern, Payload} from "@nestjs/microservices";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @MessagePattern({cmd: 'gameDetail'})
    async gameDetail(@Payload() id: string) {
        return await this.appService.gameDetail(id);
    }

    @MessagePattern({cmd: 'downloadSignedUrl'})
    async downloadSignedUrl(@Payload() filePath: string) {
        return await this.appService.getSignedUrlDownload(filePath)
    }
}
