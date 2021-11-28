import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

const Days = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
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
