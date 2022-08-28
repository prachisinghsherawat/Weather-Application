
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
import "./SearchBar.css" ;



export const SearchBar = () => {


    const [city , setCity ] = React.useState("")
    const [cityData , setCityData] = React.useState({})

    React.useEffect(()=>{axios.get(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=4c349088db70ea47161d78028241c817&units=metric`)
    .then((res)=>
        setCityData(res.data)
    )},[])


    const searchCity = () => {

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c349088db70ea47161d78028241c817&units=metric`)
        .then((res)=>
            setCityData(res.data)
        )
    }
    console.log(cityData)



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

            <IconButton onClick={searchCity} type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>

            </Paper>

            

            <div className="weatherToday">

            {cityData.main &&

                <div>

                    <div className='leftData'>

                        <h1>{cityData.name}</h1>                     

                        <div>                            
                            <p> <b>Minimum Temprature</b> <br />   
                                {cityData.main.temp_min}
                            </p>

                            <p> <b>Maximum Temprature</b>  <br /> 
                                {cityData.main.temp_max}
                            </p>
                        </div>

                        <div>                           
                           <p> <b>Pressure</b> <br /> 
                                {cityData.main.pressure}
                            </p>

                            <p> <b>Humidity</b> <br /> 
                                {cityData.main.humidity}
                            </p>
                        </div>

                       
                           
                    </div>

                    <div className='rightData' > 

                        <h2> {cityData.weather[0].main} </h2>                     
                        <img id='imgBox' src={`https://openweathermap.org/img/w/${cityData.weather[0].icon}.png`} alt="icon" height="100%" width="100%"/>

                    </div>

                </div>

            }

            </div>



            <div className="weekDay">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            
        </>
    )
}


