import axios from "axios";

export const authUrl = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/v1/auth`,
  headers: {
    "Content-Type": "application/json",
  },
});
