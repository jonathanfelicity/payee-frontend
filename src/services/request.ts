import axios from "axios";
import { SERVER_BASE_URL } from "../config/constants";
import { getCookieFromBrowser, removeCookie } from "../utils/session";

const request = axios.create({
  baseURL: SERVER_BASE_URL,
  timeout: 16000,
});

request.interceptors.request.use(
  (config) => {
    const token = getCookieFromBrowser("access_token");
    const locale = "en"; // Replace "en" with your default language or desired logic for language handling
    if (token) {
      config.headers.Authorization = token;
    }
    config.params = { lang: locale, ...config.params };
    return config;
  },
  (error) => errorHandler(error)
);

function errorHandler(error: { response: { status: number; }; }) {
  if (error?.response) {
    if (error?.response?.status === 401) {
      removeCookie("user");
      removeCookie("access_token");
      window.location.replace("/login");
    }
  }
  console.log("error => ", error);

  return Promise.reject(error.response);
}

request.interceptors.response.use(
  (response) => response.data,
  errorHandler
);

export default request;
