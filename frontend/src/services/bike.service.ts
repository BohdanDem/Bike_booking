import {apiService, IRes} from "./api.service";
import {IBike, IPaginationBikes} from "../interfaces/bike.interface";
import {urls} from "../constants/urls";

const bikeService = {
    getAll: (): IRes<IPaginationBikes<IBike>> => apiService.get(urls.bikes.base),
    create: (data: IBike): IRes<IBike> => apiService.post(urls.bikes.base, data),
    //updateById: (id: number, data: IBike) => apiService.put<IBike>(urls.bikes.byId(id), data),
    deleteById: (id: number): IRes<void> => apiService.delete(urls.bikes.byId(id))
}

export {
    bikeService
}

