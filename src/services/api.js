import axios from 'axios'
import moment from 'moment';
import { getUserLocalStorage, setUserLocalStorage } from '../context/AuthProvider/util';

export const Api = axios.create({
    //baseURL: "https://tccinfinite.azurewebsites.net/api/"
    baseURL: "https://localhost:44384/api"
});

Api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage();
        config.headers.Authorization = `Bearer ${user?.token}`;
        console.log("Service - Api", `Bearer ${user?.token}`)

        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)