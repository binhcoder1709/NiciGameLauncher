import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User} from "./schemas/user.schema";
import {DeleteResult, Model} from "mongoose";

@Injectable()
export class AppRepository {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {
    }

    async createOne(data: Partial<User>): Promise<User> {
        const userCreate = await this.userModel.create(data)
        return userCreate.save()
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({email: email})
    }

    async findById(id: string): Promise<User | null> {
        return await this.userModel.findById(id).exec()
    }

    async deleteOne(id: string): Promise<User> {
        return await this.userModel.findByIdAndDelete(id).exec()
    }
}