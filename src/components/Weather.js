import React from 'react';
import '../styles/weather.css';

const Weather = () => {
  return (
    <div className="weather-container">
      <h4>Nashville,TN</h4>
      <div className="weather-reporter">
        <ion-icon name="sunny-outline"></ion-icon>
        <ion-icon name="rainy-outline"></ion-icon>
        <ion-icon name="thunderstorm-outline"></ion-icon>
        <ion-icon name="cloudy-night-outline"></ion-icon>
        <ion-icon name="cloudy-outline"></ion-icon>
        <ion-icon name="partly-sunny-outline"></ion-icon>
        <ion-icon name="moon-outline"></ion-icon>
        <ion-icon name="snow-outline"></ion-icon>
        <div className="temp-container"> 70&#176;F</div>
      </div>
    </div>
  );
};

export default Weather;
