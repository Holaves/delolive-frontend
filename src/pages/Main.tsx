import React, { useState, useEffect } from 'react';
import InsuranceComp from '../components/InsuranceComp';
import SpeciesInsurance from '../components/SpeciesInsurance';
import TriggersList from '../components/TriggersList';
import OfferItemType from '../types/OfferItem';
import { useSelector } from 'react-redux';
import { selectWidth } from '../components/globalSlices/windowWidthSlice';
import AboutUs from '../components/AboutUs';
import News from '../components/News';
import SpecialOffers from '../components/SpecialOffers';
import UsefulButtons from '../components/UsefulButtons';
import { AxiosResponse } from 'axios';
import SpecialOffersService from '../services/SpecialOffers';
import { selectBurgerValue } from '../components/globalSlices/burgerSlice';

const Main = () => {
    let windowWidth = useSelector(selectWidth)
    const burgerValue = useSelector(selectBurgerValue)
    const [offersList, setOffersList] = useState <OfferItemType[]>([])
    
    const getOffers = async () => {
        const response: AxiosResponse = await SpecialOffersService.fetchHelps()
        console.log(response)
        setOffersList(response.data)
    } 
    const MainStyles: object =
    {
        'position': 'relative',
        'overflow': burgerValue ? 'hidden' : 'visible',
        'overflowX' : !burgerValue ? 'hidden': 'none',

    } 

    useEffect(() => {
        getOffers()
    }, [])
    return (
        <div style={MainStyles }>
            <div className="_container-1">
               <TriggersList/>
               <InsuranceComp/>
               {
                windowWidth > 792 ?
                    <SpeciesInsurance/> : 
                    <div/>
               }
               {
                windowWidth > 990 ?
                    <AboutUs/> : 
                    <div/>
               }
               {
                windowWidth < 768 ?
                    <SpecialOffers offersList={offersList} /> :
                    <div/>
               }
                <News/>
                <UsefulButtons/>

            </div>
        </div>
    );
};

export default Main;