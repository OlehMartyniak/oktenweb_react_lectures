import axios from "axios";
import {createBrowserHistory} from 'history';
import {baseURL} from '../constants/urls';
import { authService } from "./authService";

const axiosService = axios.create({baseURL});
const history = createBrowserHistory();

axiosService.interceptors.request.use((config) => {
    const access = authService.getAccessToken();

    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }
    return config;
})

let isRefreshing = false;
axiosService.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const refresh = authService.getRefreshToken();
    if (error.response?.status === 401 && error.config && !isRefreshing && refresh) {
        isRefreshing = true
        try {
            const {data} = await authService.refresh(refresh);
            authService.setTokens(data)
        } catch (e) {
            authService.deleteTokens();
            return history.replace('/login?ExpSession=true')
        }
        isRefreshing = false;
        return axiosService(error.config)
    }
    return Promise.reject(error)
})

export {axiosService, history};