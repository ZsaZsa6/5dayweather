import axios from 'axios';


import './App.css';
const URL = 'https://api.openweathermap.org/data/2.5/onecall?lat=34.720902&lon=-96.919178&exclude=current,hourly,minutely,alerts';

const Days = () => {
    axios.get(URL, { 
        params: {
        APP_ID: 'ba1e83d61cbe3a4871a33ffc3893e95a'
    }
    })
    .then(function (response) {
        console.log(response);
      })

    
   
    

    return (
        <div >
        </div>
    );

    }
export default Days