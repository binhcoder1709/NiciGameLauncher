import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GameModule} from "./app/games/game.module";
import {AuthModule} from "./app/auth/auth.module";
import {UserModule} from "./app/users/user.module";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [ConfigModule.forRoot({envFilePath: '.env', isGlobal: true}), GameModule, AuthModule, UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
