import { urls } from "../constants/links";
import { axiosService } from "./axios.service";

export const usersService = {
    getAll: ()=> axiosService.get(urls.users)
}