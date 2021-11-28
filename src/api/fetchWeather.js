import axios from 'axios';

const URL = http://api.openweathermap.org/data/2.5/timemachine?lat=60.99&lon=30.9&dt=1586468027&appid='ba1e83d61cbe3a4871a33ffc3893e95a' 

const API_KEY = 'ba1e83d61cbe3a4871a33ffc3893e95a';

export const fetchWeather = {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            lat: 34.720902,
            lon: -96.919178,
            units: 'imperial',
            
            APPID: API_KEY,
        }
    });

    return data;


https://api.openweathermap.org/data/2.5/onecall?lat=34.720902&lon=-96.919178,&exclude=currently,minutely,hourly,alerts&appid='ba1e83d61cbe3a4871a33ffc3893e95a'