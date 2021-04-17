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

// (0K − 273.15) × 9/5 + 32 = -459.7°F
const kelvinTofahrenheit = (k) => (k-273.15) *(9/5) +32;

const Weather = () => {
  const [fetchedWeather, setFetchedWeather] = useState('');
  const [fetchedCoords, setFetchedCoords] = useState('none');

  useEffect(() => {
    const getUserLocation = async () => {
      await navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        setFetchedCoords({ latitude, longitude });
      });
    };

    getUserLocation();
  }, []);

  useEffect(() => {
    // lat=${coords.latitude}*long=${coords.longitude}
    // TODO: Retrieve only necessary information from API calls and
    // wire everything to redux

    const getWeather = async () => {
      let response;
      if (fetchedCoords === 'none') {
        response = 'none';
      } else {
        response = await weather.get(
          `/data/2.5/weather?lat=${fetchedCoords.latitude}&lon=${fetchedCoords.longitude}&units=imperial&appid=${REACT_APP_WEATHER_KEY}`
        );
      }

      setFetchedWeather(response.data);
      console.log(response.data)
    };

    getWeather();
  }, [fetchedCoords]);

  

  return (
    <div className="weather-container">
      <div className="weather-city">
        <h4>{fetchedWeather === '' ? 'Loading...' :fetchedWeather?.name}</h4>
      </div>
      <div className="weather-reporter">
        <ion-icon name={weatherStyles.sunny}></ion-icon>
        <h4> {Math.round(parseInt(fetchedWeather?.main?.temp))}&#176;F</h4>
      </div>
    </div>
  );
};

export default Weather;
