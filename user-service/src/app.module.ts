import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./schemas/user.schema";
import {AppRepository} from "./app.repository";

@Module({
    imports: [ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true
    }), MongooseModule.forRoot(process.env.MONGOOSE_URI), MongooseModule.forFeature([{
        name: User.name,
        schema: UserSchema
    }])],
    controllers: [AppController],
    providers: [AppService, AppRepository],
})
export class AppModule {
}
