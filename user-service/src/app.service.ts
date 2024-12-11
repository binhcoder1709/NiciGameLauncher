import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {AppRepository} from "./app.repository";
import {IUserResponse} from "./interfaces";
import * as bcrypt from "bcrypt";
import mongoose from "mongoose";

@Injectable()
export class AppService {
    constructor(private readonly appRepos: AppRepository) {
    }

    async getUserByEmail(email: string): Promise<IUserResponse> {
        const user = await this.appRepos.findByEmail(email)
        if (!user)
            return null
        return {
            user_name: user.user_name,
            email: user.email,
            id: user._id.toString(),
            avatar: user.avatar,
            wallet: user.wallet,
            library: user.library,
        }
    }

    async checkPasswordValid(email: string, password: string): Promise<boolean> {
        const user = await this.appRepos.findByEmail(email)
        if (!user) {
            return false
        }
        return await bcrypt.compare(password, user.password)
    }

    async getUserById(id: string): Promise<IUserResponse> {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null
        }
        const user = await this.appRepos.findById(id)
        if (!user)
            return null
        return {
            user_name: user.user_name,
            email: user.email,
            id: user._id.toString(),
            avatar: user.avatar,
            wallet: user.wallet,
            library: user.library
        }
    }

    async checkUserActive(email: string): Promise<boolean> {
        const user = await this.appRepos.findByEmail(email)
        return !!user.is_active
    }
}
