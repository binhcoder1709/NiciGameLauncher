import axios from "axios";

export const authUrl = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/v1/auth`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const gameUrl = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/v1/games`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const userUrl = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/v1/users`,
  headers: {
    "Content-Type": "application/json",
  },
});
