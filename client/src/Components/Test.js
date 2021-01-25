import React ,{useContext} from 'react';
import { TickerContext } from '../Context/TickerContext';

const Test = () => {
    const [state, setState] = useContext(TickerContext);

    return ( 
        <>
        {state.watchList.map((item) => {
                return(
                <h1>{item.ticker}</h1>
                )
            })}
        </>
    )
}

export default Test
