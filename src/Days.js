import axios from 'axios';
import React, {useEffect, useState} from 'react';

import './App.css';
const URL = 'https://api.openweathermap.org/data/2.5/onecall?';
const API_KEY = 'ba1e83d61cbe3a4871a33ffc3893e95a';


const [weather, setWeather] = useState([])
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
           const weather = response.data;
           setWeather(weather);
       })
        
        }
    
        useEffect(() => getDays(), [])

    
    return (
        <div >
            <div>

            </div>
        
           
        </div>
    );


export default getDays