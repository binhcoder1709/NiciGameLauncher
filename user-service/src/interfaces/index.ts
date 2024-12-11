export interface IUserCreate {
    user_name: string
    email: string
    password: string
}

export interface IUserResponse {
        id: string
        user_name: string
        email: string
        avatar: string
        wallet: number
        library: string[]
}