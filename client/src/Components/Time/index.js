import moment from 'moment'
import tz from 'moment-timezone'
import React from 'react'

export const Time = (props) => {
    const [time, setTime] = React.useState("");

    const getTime =  () => {
        var currentTime =  tz();
        const timeZone = currentTime.tz(props.timeZone).format('h:mm:ss a z')
        setTime(timeZone);
    }

    React.useEffect(() => {
        setInterval(() => getTime(),1000);
    }, [])
    
    return (
    <div>{time}</div>
    )
}

export const Date = (props) => {
    const [time, setTime] = React.useState("");

    const getTime =  () => {
        var currentTime =  tz();
        const timeZone = currentTime.tz(props.timeZone).format('MMMM Do, YYYY')
        setTime(timeZone);
    }

    React.useEffect(() => {
        setInterval(() => getTime(),1000);
    }, [])
    
    return (
        <div>{time}</div>
    )
    }

