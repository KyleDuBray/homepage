import React, { useEffect, useState } from 'react';
import weather from '../apis/weather';
import '../styles/weather.css';

const weatherStyles = {
  sunny: 'sunny-outline',
  sunnyPartly: 'partly-sunny-outline',
  cloudy: 'cloudy-outline',
  rainy: 'rainy-outline',
  storm: 'thunderstorm-outline',
  night: 'moon-outline',
  nightCloudy: 'cloudy-night-outline',
  snow: 'snow-outline',
};

const { REACT_APP_WEATHER_KEY } = process.env;

const Weather = () => {
  const [fetchedWeather, setFetchedWeather] = useState({});
  useEffect(() => {
    const getWeather = async () => {
      const response = await weather.get(
        `/data/2.5/weather?q=Nashville&appid=${REACT_APP_WEATHER_KEY}`
      );
      setFetchedWeather(response.data);
      console.log(response.data);
    };
    getWeather();
  }, []);

  return (
    <div className="weather-container">
      <div className="weather-city">
        <h4>Nashville,TN</h4>
      </div>
      <div className="weather-reporter">
        <ion-icon name={weatherStyles.sunny}></ion-icon>
        <h4> 70&#176;F</h4>
      </div>
    </div>
  );
};

export default Weather;
