export interface IGameCreate {
    game_name: string;
    price: string;
    description: string;
    category: string;
    created_by: string;
    banner_image: string;
    // slide_images: string[];
    folder_name: string
    exec_file_name: string
}

export interface IGameResponse {
    id: string
    game_name: string,
    description: string,
    price: number
    banner_image: string
    slide_images: string[]
    logo: string
    path_name: string
    folder_installation: string
    rating: number
    count_rating: number
    count_view: number
    count_play: number
    exec_file_name: string
    created_by: string
}

export interface IGameUploadedResponse {
    success: boolean;
    path: string
}