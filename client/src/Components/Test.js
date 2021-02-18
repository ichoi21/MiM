import React ,{useContext} from 'react';
import { TickerContext } from '../Context/TickerContext';
import {CallContext} from '../Context/CallContext'

const Test = () => {
    // const [state, setState] = useContext(TickerContext);
    const [state, setState] = useContext(CallContext)
    return ( 
        <>
        <btn onClick={()=> console.log(state)}>Test</btn>
        </>
    )
}

export default Test
