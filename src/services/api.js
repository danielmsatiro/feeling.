import axios from "axios";

export const api = axios.create({
  baseURL: "https://feelings-api-q2-g1-jul21.herokuapp.com/",
});
