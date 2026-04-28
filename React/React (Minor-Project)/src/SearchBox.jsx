import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({ updateWeatherInfo }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "baf01bd0726e7685ccef3123d586090d";

    let [city, setCity] = useState("");
    let [error, setError] = useState("");

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data = await response.json();

            if (!response.ok) {
                throw new Error("Not Found");
            }

            let countryName = new Intl.DisplayNames(['en'], {
                type: 'region'
            }).of(data.sys.country);

            let description = data.weather[0].description.toUpperCase();

            let result = {
                city: data.name,
                country: countryName,
                temperature: data.main.temp,
                temperatureMin: data.main.temp_min,
                temperatureMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                descriptionInfo: description,
                descriptionIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            };

            setError("");
            return result;
        } catch (err) {
            setError("City not found. Please try again.");
            return null;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        let result = await getWeatherInfo();

        if (result) {
            updateWeatherInfo(result); setCity("");
            setCity("");
        }
    };

    return (
        <div className="search-box">
            <h1>Search for the weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Button variant="contained" type="submit" size="small">
                    Search
                </Button>
            </form>
        </div>
    );
}