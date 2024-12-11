export interface IUserResponse {
    id: string
    email: string
    user_name: string
    avatar: string
}

export interface ITokenPayload {
    id: string,
    email: string,
    key: string,
}

export interface ITokenResponse {
    AT: string,
    RT: string,
    user: {
        id: string
        email: string
        avatar: string
        user_name: string
    }
}