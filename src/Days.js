import React from 'react';

const baseUrl = 'http://openlibrary.org';

export function highsLows(query) {
    const url = (https://api.openweathermap.org/data/2.5/onecall?lat={34.720902}&lon={-96.919178}&exclude={current,minutely,hourly,alerts}&appid={ba1e83d61cbe3a4871a33ffc3893e95a});
   

    return fetch(url).then(response => response.json());
}
export function Days() {
    return(
        <div>
        <div className="day-container">

        </div>
        <h1 className="h1">Highs and Lows for Today</h1>
        </div>
    )
}
