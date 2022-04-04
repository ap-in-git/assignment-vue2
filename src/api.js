import axios from "axios";

const publicApi = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "http://localhost:34477/api/",
});

export default publicApi;
