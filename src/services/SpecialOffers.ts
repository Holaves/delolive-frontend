import { AxiosResponse } from "axios";
import $api from "../http";
import HelpItem from "../types/HelpItem";

export default class SpecialOffersService {
    static fetchHelps(): Promise<AxiosResponse<HelpItem[]>>{
        return $api.get<HelpItem[]>('/offers')
    }
}