import axios from "axios";

//const url = "https://api.aprendizado.quantisoft.com.br/api/v1" 
const url = "http://localhost:8080/api/v1"
export const API = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 30000,
});