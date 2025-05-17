import axios from "axios";

export const API_URL_DEV = "http://localhost:8080";
export const API_URL_PROD = "http://localhost:8080";

export const API = axios.create({
    baseURL: API_URL_DEV,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 30000,
})