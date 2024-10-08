import axios from "axios";

const baseURL = "http://localhost:8082/api";

const api = axios.create({
    baseURL: baseURL,
    timeout: 60 * 1000,
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        t: Date.now(),
    }
});

export default api;