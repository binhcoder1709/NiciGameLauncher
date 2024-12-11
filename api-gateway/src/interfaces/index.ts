export interface ILoginResponse {
    AT: string
    RT: string
    user: {
        id: string
        email: string
        user_name: string
        avatar: string
    }
}

export interface ITokenPayload {
    id: string,
    email: string,
    key: string,
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

export interface IUserResponse {
    id: string
    user_name: string
    email: string
    avatar: string
    wallet: number
    library: string[]
}

export interface IUserDashboardResponse {
    games: [] | null
}