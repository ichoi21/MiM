import React, {useState, useEffect} from 'react'
import Tabletop from 'tabletop'

export const CallContext = React.createContext(); 

export const Call = ({children}) => {
    const [state, setState] = useState();
    useEffect(() => {
        Tabletop.init({
          key: "1U6TSbaFh_IsY9nf18-IrgvUDP-vLarTAhR-HqpLOk8w",
          simpleSheet: true,
        }).then((data) => {
          setState(data);
          console.log(data);
        });
      }, []);
    return (
        <CallContext.Provider value={[state,setState]}>{children}</CallContext.Provider>
    )
}

