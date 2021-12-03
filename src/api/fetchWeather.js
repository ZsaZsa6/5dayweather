import axios from 'axios';


export const fetchWeather = {
    data = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=34.720902&lon=-96.919178&exclude=current,hourly,minutely,alerts&appid=ba1e83d61cbe3a4871a33ffc3893e95a', )


    return data;
}

