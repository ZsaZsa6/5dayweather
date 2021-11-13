import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/onecall';
const API_KEY = 'ba1e83d61cbe3a4871a33ffc3893e95a';

export const fetchWeather = async (query) => {
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
}

