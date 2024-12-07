export interface ILoginResponse {
  AT: string;
  RT: string;
  data: {
    id: string;
    user_name: string;
    email: string;
    avatar: string;
  };
}

export interface ILoginInput {
  email: string;
  password: string;
}
