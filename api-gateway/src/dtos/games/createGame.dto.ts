import {IsArray, IsString} from "class-validator";

export class CreateGameDto {
    @IsString()
    game_name: string;

    @IsString()
    price: string;

    @IsString()
    description: string;

    @IsString()
    category: string;

    @IsString()
    created_by: string;

    @IsString()
    banner_image: string;

    // @IsArray()
    // slide_images: string[];

    @IsString()
    folder_name: string

    @IsString()
    exec_file_name: string
}