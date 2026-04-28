import {useState} from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Dhaka",
        country: "Bangladesh",
        descriptionInfo: "BROKEN CLOUDS",
        descriptionIcon: "http://openweathermap.org/img/wn/04n@2x.png",
        feelsLike: 30.6,
        humidity: 89,
        temperature: 26.99,
        temperatureMax: 26.99,
        temperatureMin: 26.99
    });

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <>
            <SearchBox updateWeatherInfo={updateWeatherInfo} />
            <InfoBox info={weatherInfo} />
        </>
    );
}