import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema({
    collection: 'users', timestamps: true
})

export class User extends Document {
    @Prop()
    user_name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    avatar: string;

    @Prop()
    library: string[]

    @Prop({default: true})
    is_active: boolean;

    @Prop({default: false})
    is_confirm: boolean;

    @Prop({default: 0})
    wallet: number
}

export const UserSchema = SchemaFactory.createForClass(User);