import React , {useEffect,useContext} from 'react'
import Footer from '../Components/Footer'
import {Ticker,Search} from '../Context/TickerContext'
import Test from '../Components/Test'
import {User} from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import {SearchBar,quoteContent, QuoteContent} from '../Components/SearchBar/index'
import Results from '../Components/SearchContent/index'

const Portfolio = () => {
    const { userData, setUserData } = useContext(User);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) history.push("/login");
      }, [userData.user, history]);
    
    return (
        <Ticker>
            
            <Test/>
           
            <SearchBar/>
            <QuoteContent>
                <Results/>
            </QuoteContent>
            <Footer />
        </Ticker>
    )
}

export default Portfolio