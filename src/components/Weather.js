import React, { useEffect } from 'react';
import '../styles/weather.css';
import { useDispatch, useSelector } from 'react-redux';
import {fetchLocation} from '../actions'

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

const Weather = () => {

  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.condition);



  useEffect(() => {
    dispatch(fetchLocation());
  }, []);

  console.log(weather);
  return (
    <div className="weather-container">
      <div className="weather-city">
        <h4>{!weather ? 'Loading...' : weather.name}</h4>
      </div>
      <div className="weather-reporter">
        <ion-icon name={weatherStyles.sunny}></ion-icon>
        <h4> {Math.round(parseInt(weather.main?.temp))}&#176;F</h4>
      </div>
    </div>
  );
};

export default Weather;
