import { AxiosResponse } from "axios";
import $api from "../http";
export type need = 0 | 1

export default class CitiesService {
    static fetchCities(need: need, citiesValue: string): Promise<AxiosResponse<string[]>>{
        return $api.get<string[]>(`/cities?q=${citiesValue}&need=${need}`)
    }
}