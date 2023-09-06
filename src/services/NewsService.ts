import { AxiosResponse } from "axios";
import $api from "../http";
import NewsItemType from "../types/NewsItem";

export default class NewsService {
    static fetchNews(): Promise<AxiosResponse<NewsItemType[]>>{
        return $api.get<NewsItemType[]>('/news')
    }
}