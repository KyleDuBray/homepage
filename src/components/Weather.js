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
  const [fetchedCoords, setFetchedCoords] = useState('none');
  useEffect(() => {
    const getUserLocation = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        setFetchedCoords({ latitude, longitude });
      });
    };

    // lat=${coords.latitude}*long=${coords.longitude}
    //TODO: Make promise work correctly- need to fetch user data and then
    // extract coordinates from that to look up weather, then wire to Redux.

    const getWeather = async () => {
      console.log(fetchedCoords);
      let response;
      if (fetchedCoords === 'none') {
        response = 'none';
      } else {
        response = await weather.get(
          `/data/2.5/weather?lat=${fetchedCoords.latitude}&lon=${fetchedCoords.longitude}&appid=${REACT_APP_WEATHER_KEY}`
        );
      }

      setFetchedWeather(response.data);
      console.log(response.data);
    };

    getUserLocation().then(
      () => {
        getWeather(fetchedCoords);
      },
      () => {
        console.error('Weather request failed');
      }
    );
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
