import axios from "axios";

export const API = axios.create({
    baseURL: "https://api.aprendizado.quantisoft.com.br/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 30000,
});