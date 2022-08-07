import { urls } from "../constants/urls";
import { axiosService } from "./axiosService";

const carService = {
    getAll: ()=> axiosService.get(urls.cars),
    updateById: (id,data)=> axiosService.put(`${urls.cars}/${id}`,data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    create: (car) => axiosService.post(urls.cars,car)
};

export {carService};