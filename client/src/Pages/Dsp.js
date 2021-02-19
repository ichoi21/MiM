import React from 'react';
import Footer from '../Components/Footer';
import Calls from '../Components/Calls';
import {Call} from '../Context/CallContext' 
function Dsp() {
    return (
        <Call>
            <h1>Calls and Results</h1>
            <Calls />
            <Footer />
        </Call>
    );
    }

export default Dsp;
