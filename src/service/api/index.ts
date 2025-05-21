import axios from "axios";

const isDev = window.location.hostname === "localhost";

export const API = axios.create({
    baseURL: isDev ? "http://localhost:8080/api/v1" : "/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 30000,
});