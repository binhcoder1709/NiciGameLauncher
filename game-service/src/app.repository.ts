import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Game} from "./schemas/game.schema";
import {Model} from "mongoose";

@Injectable()
export class AppRepository {
    constructor(@InjectModel(Game.name) private readonly gameModel: Model<Game>) {
    }

    async createOne(data: Partial<Game>): Promise<Game> {
        const gameData = await this.gameModel.create(data)
        return gameData.save()
    }

    async findAll(): Promise<Game[]> {
        return await this.gameModel.find().exec()
    }

    async findById(id: string): Promise<Game> {
        return await this.gameModel.findById(id).exec()
    }
}