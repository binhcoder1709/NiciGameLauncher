// export interface IGameDashboardResponse {
//     id: string
//     game_name: string,
//     price: number
//     banner_image: string
//     created_by: string
// }
export interface IUserDashboardResponse {
    games: IGameResponse[]
}

export interface IUserResponse {
    id: string
    user_name: string
    email: string
    avatar: string
    wallet: string
}

export interface IGameResponse {
    id: string
    game_name: string,
    description: string,
    price: number
    banner_image: string
    slide_images: string[]
    path_name: string
    folder_installation: string
    rating: number
    count_rating: number
    count_view: number
    count_play: number
    exec_file_name: string
    created_by: string
}