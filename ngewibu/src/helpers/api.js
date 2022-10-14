import axios from "axios";

const api = axios.create({
  baseURL: "https://api.jikan.moe/v4/anime/",
});

export default api;
