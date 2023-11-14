import axios from "axios";

const animeURL = import.meta.env.VITE_ANIME_BASE_URL;
console.log(animeURL);

const animeApi = axios.create({
  baseURL: animeURL,
  timeout: 10000,
  withCredentials: false,
});

export default animeApi;
