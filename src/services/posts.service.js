import { urls } from "../constants/links";
import { axiosService } from "./axios.service";

export const postsService = {
    getPostById: (id)=> axiosService.get(`${urls.posts}?userId=${id}`)
}