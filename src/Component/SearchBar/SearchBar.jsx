
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
import "./SearchBar.css" ;



export const SearchBar = () => {


    const [city , setCity ] = React.useState("")
    const [cityData , setCityData] = React.useState({})


    const searchCity = () => {

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c349088db70ea47161d78028241c817&units=metric`)
        .then((res)=>
            setCityData(res.data)
        )
    }
    //console.log(cityData)



    return(
      
        <>
            <Paper id='paper'        
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >

            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <LocationOnIcon />
            </IconButton>
                    
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search your City"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={(e)=> setCity(e.target.value)}
            />

            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon onClick={searchCity} />
            </IconButton>

            </Paper>


            {/* <div>
               
               <h1>{cityData.name}</h1>
               <p>Humidity : {cityData?.main?.humidity}</p>
               <p>Minimum Temprature : {cityData.main.temp_min}</p>
               <p>Maximum Temprature : {cityData.main.temp_max}</p>
               <p>Pressure : {cityData.main.pressure}</p>
               <p>Weather : {cityData.weather}</p>

            </div> */}
        </>
    )
}


