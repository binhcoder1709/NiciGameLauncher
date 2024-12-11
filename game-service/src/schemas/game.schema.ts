import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema({collection: 'games', timestamps: true})
export class Game extends Document {
    @Prop()
    game_name: string;

    @Prop()
    description: string;

    @Prop()
    price: number;

    @Prop()
    banner_image: string;

    @Prop()
    slide_images: string[];

    @Prop()
    logo: string;

    @Prop()
    folder_installation: string;

    @Prop()
    path_name: string

    @Prop({default: 0})
    rating: number;

    @Prop({default: 0})
    count_rating: number;

    @Prop({default: 0})
    count_view: number;

    @Prop({default: 0})
    count_play: number;

    @Prop()
    exec_file_name: string

    @Prop({default: true})
    is_active: boolean

    @Prop()
    created_by: string
}

export const GameSchema = SchemaFactory.createForClass(Game);