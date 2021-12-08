import axios from 'axios';
import React, { useState } from 'react';

import './App.css';
const URL = 'https://api.openweathermap.org/data/2.5/onecall?'

const Days = () => {
    let [responseObj, setResponseObj] = useState({});
     axios.get(URL, { 
        params: {
        appid: 'ba1e83d61cbe3a4871a33ffc3893e95a',
        lat: '34.720902',
        lon: '-96.919178',
        exclude: 'current,hourly,minutely,alerts',
        units: 'imperial'
    }
        .then(response => {
           setResponseObj(response)})    
        },
    

    return (
        <div >
         {JSON.stringify(responseObj)}
           
        </div>
    );
    }

