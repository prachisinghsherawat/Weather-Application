
//https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=

import axios from "axios"
import { useEffect } from "react"

export const WeekWeather = ({lat,lon}) => {

    
    useEffect(()=>{getWeekData()},[])

    const getWeekData = () => {

        axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=bdc37fddd33de9ce09f949650f7d265d`)
        .then(
            (res)=> console.log(res) 
        )
    }

    console.log(lat,lon) 

    return(

        <>
        </>
    )
}
