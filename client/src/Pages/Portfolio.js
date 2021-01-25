import React , {useEffect,useContext} from 'react'
import Footer from '../Components/Footer'
import Ticker from '../Context/TickerContext'
import Test from '../Components/Test'
import {User} from "../Context/UserContext";
import { useHistory } from "react-router-dom";

const Portfolio = () => {
    const { userData, setUserData } = useContext(User);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) history.push("/login");
      }, [userData.user, history]);
    
    return (
        <Ticker>
            <Test/>
            <Footer />
        </Ticker>
    )
}

export default Portfolio
