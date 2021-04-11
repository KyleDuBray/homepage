import React from 'react';
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

const Weather = () => {
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
