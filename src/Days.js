import axios from 'axios';
import React, {useEffect, useState} from 'react';

import './App.css';
export default function Days(){
const URL = 'https://api.openweathermap.org/data/2.5/onecall?';
const API_KEY = 'ba1e83d61cbe3a4871a33ffc3893e95a';

const [weather, setWeather] = useState([]);

const getDays = () => {
     axios.get(URL, 
        {params: {
        APPID: API_KEY,
        lat: '34.720902',
        lon: '-96.919178',
        exclude: 'current,hourly,minutely,alerts',
        units: 'imperial'}
        })
       .then((response) => {
           console.log(response);
           const weather = response.data.daily
           setWeather(weather);
       })
        
        }
    
    useEffect(() => getDays(), [])

    const days = weather.map {}
    return (
        <div className="main-container">
            <div className="min-temp">
            
                    {weather.min}
                    
                    {weather.max}

                   
            </div>
            </div>
        
           
      
    );

    }
