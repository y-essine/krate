import { create } from "axios";

const baseURL = "http://localhost:8080/api";

const api = create({
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