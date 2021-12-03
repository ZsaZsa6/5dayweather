import React, { useState } from 'react';
import axios from 'axios';


import './App.css';

const Days = () => {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=34.720902&lon=-96.919178&exclude=current,hourly,minutely,alerts&appid=APP_ID', 
    { params: {
        APP_ID: 'ba1e83d61cbe3a4871a33ffc3893e95a'
    }
    })

    
   
    }

    return (
        <div className="main-container">
            <input type="text"className="search"placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            {weather.main && (
                <div className="city">
                   
                    <div className="avg-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;F</sup>
                    </div>
                    <div className="info">
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default Days;
