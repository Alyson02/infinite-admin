import axios from 'axios'
import { getUserLocalStorage } from '../context/AuthProvider/util';

export const Api = axios.create({
    //baseURL: "https://tccinfinite.azurewebsites.net/api/"
    baseURL: "https://localhost:5001/api"
});

Api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage();

        config.headers.Authorization = `Bearer ${user?.token}`;
        console.debug("Serive - Api", `Bearer ${user?.token}`)

        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)