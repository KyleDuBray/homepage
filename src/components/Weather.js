import React, { useEffect } from "react";
import "../styles/weather.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocation } from "../actions";
import moment from "moment";

const weatherStyles = {
  sunny: "sunny-outline",
  sunnyPartly: "partly-sunny-outline",
  cloudy: "cloudy-outline",
  rainy: "rainy-outline",
  storm: "thunderstorm-outline",
  night: "moon-outline",
  nightCloudy: "cloudy-night-outline",
  snow: "snow-outline",
};

const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.condition);

  useEffect(() => {
    dispatch(fetchLocation());
  }, []);

  const renderWeatherUnits = () => {
    return !weather ? null : <>&#176;F</>;
  };

  // Return appropriate icon for weather based on condition
  // TODO: make function that calculates dark or light outside
  // and optionally return night icons
  const renderWeatherIcon = () => {
    const currentWeather = weather.weather[0]?.description;
    if (!currentWeather) return null;

    if (currentWeather.includes("storm")) {
      return weatherStyles.storm;
    } else if (
      currentWeather.includes("rain") ||
      currentWeather.includes("drizzle")
    ) {
      return weatherStyles.rainy;
    } else if (currentWeather.includes("snow")) {
      return weatherStyles.snow;
    } else if (currentWeather.includes("clear")) {
      return weatherStyles.sunny;
    } else if (currentWeather.includes("cloud")) {
      if (currentWeather.includes("scattered")) {
        return weatherStyles.cloudy;
      } else return weatherStyles.sunnyPartly;
    } else return weatherStyles.sunny;
  };

  console.log(weather.weather[0].description);

  renderWeatherIcon();
  return (
    <div className="weather-container">
      <div className="weather-city">
        <h4>{!weather ? null : weather.name}</h4>
      </div>
      <div className="weather-reporter">
        <ion-icon name={!weather ? null : renderWeatherIcon()}></ion-icon>
        <h4>
          {" "}
          {!weather.main ? null : Math.round(parseInt(weather.main?.temp))}
          {renderWeatherUnits()}
        </h4>
      </div>
    </div>
  );
};

export default Weather;
