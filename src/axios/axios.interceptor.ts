/** Axios */
import axios from "axios";

/** Constants */
import { JWT_TOKEN_LOCAL_STORAGE_KEY_NAME } from "../constants/auth";

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(JWT_TOKEN_LOCAL_STORAGE_KEY_NAME);

        config.baseURL = import.meta.env.VITE_API_BASEU_URL as string;

        if (!token) return config;

        config.headers["Authorization"] = `Bearer ${token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
