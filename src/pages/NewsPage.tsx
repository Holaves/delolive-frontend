import React, { useEffect } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import NewsItemType from '../types/NewsItem';
import Loader from '../components/UI/Loader/Loader';
import NewsListBS from '../components/NewsListBS';
import NewsService from '../services/NewsService';

const NewsPage = () => {
    const NewsList: NewsItemType[] = useLoaderData() as NewsItemType[]
    const navigation = useNavigation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navigation.state])

    if(navigation.state == 'loading'){
        return (
            <div className="_container-1">
                <div className='loader-wrapper'>
                    <Loader width={200} height={200}/>
                </div>
            </div>
        )
    }

    return (
        <div className='NewsPage'>
            <div className="_container-1">
                <NewsListBS NewsList={NewsList}/>
            </div>
        </div>
    );
};

export const NewsPageLoader = async () => {
    try{
        const response = await NewsService.fetchNews()
        console.log(response)
        return response.data
    } catch(e: any) {
        console.log(e.response?.data?.message);
    }
}

    

export default NewsPage;