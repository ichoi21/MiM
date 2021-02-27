import React,{useEffect,useContext} from 'react';
import { useHistory } from "react-router-dom";
import {User} from "../Context/UserContext";
import Footer from '../Components/Footer';
import Calls from '../Components/Calls';
import {Call} from '../Context/CallContext' 

function Dsp() {
    const { userData, setUserData } = useContext(User);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) history.push("/login");
      }, [userData.user, history]);
    
    return (
        <Call>
            <h1>Calls and Results</h1>
            
            <Calls />            
            <Footer />
        </Call>
    );
    }

export default Dsp;
