import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "switzerland",
        feelsLike: -2.26,
        humidity: 79,
        temp: -0.35,
        tempMax: -0.25,
        tempMin: -0.39,
        weather: "overcast clouds",
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}