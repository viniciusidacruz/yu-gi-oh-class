import axios from "axios";

export const BASE_URL = axios.create({
  baseURL: "https://db.ygoprodeck.com/api/v7",
});
