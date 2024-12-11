import { IGame } from "./game";

export interface IDashboardResponse {
  status: string;
  data: {
    games: {
      id: string;
      game_name: string;
      description: string;
      price: number;
      banner_image: string;
      slide_images: string[];
      path_name: string;
      folder_installation: string;
      rating: number;
      count_rating: number;
      count_view: number;
      count_play: number;
      exec_file_name: string;
      created_by: string;
    }[];
  } | null;
  error: null | {
    message: string;
    statusCode: number;
  };
}

export interface IUserResponse {
  status: "success" | "error";
  data: {
    id: string;
    user_name: string;
    email: string;
    avatar: string;
    wallet: number;
    library: string[];
  } | null;
  error: null | {
    statusCode: number;
    message: string;
  };
}

export interface IUserLibraryResponse {
  status: "success" | "error";
  data: IGame[] | null;
  error: null | {
    statusCode: number;
    message: string;
  };
}
