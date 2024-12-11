export interface ILoginResponse {
  status: "success" | "error";
  data: {
    AT: string;
    RT: string;
    user:{
      id: string
      email: string
      avatar: string
      user_name: string
    }
  } | null;
  error: null | {
    statusCode: number;
    message: string;
  };
}

export interface ILoginInput {
  email: string;
  password: string;
}
