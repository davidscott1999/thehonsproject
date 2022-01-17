import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

const Forecast = ({ latitude, longitude }) => {
  const [weatherInformation, setWeatherInfo] = useState();
  const Compass = require("cardinal-direction");

  useEffect(() => {
    axios
      .get("https://api.openweathermap.org/data/2.5/onecall", {
        params: {
          lat: latitude,
          lon: longitude,
          units: "imperial",
          appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        },
      })
      .then((result) => {
        console.log(result.data);
        setWeatherInfo(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [latitude, longitude]);

  const fToC = (valNum) => {
    valNum = parseFloat(valNum);
    return (valNum - 32) / 1.8;
  };

  return (
    <>
      {weatherInformation && (
        <>
          <div className="mt-4">
            <p className="font-bold">Current Conditions:</p>
            <img
              src={`http://openweathermap.org/img/w/${weatherInformation.current.weather[0].icon}.png`}
              alt={weatherInformation.current.weather[0].description}
            ></img>
            <ul className="text-sm">
              <li>
                Weather : {weatherInformation.current.weather[0].description}
              </li>
              <li>
                Temp : {Math.round(weatherInformation.current.temp)}&#176;F /{" "}
                {Math.round(fToC(weatherInformation.current.temp) * 10) / 10}
                &#176;C
              </li>
              <li>Clouds : {weatherInformation.current.weather.clouds}%</li>
              <li>
                Visibility : {weatherInformation.current.weather.visibility}m
              </li>
              <li>
                Wind : {Math.round(weatherInformation.current.wind_speed)}mph,{" "}
                {Compass.cardinalFromDegree(
                  weatherInformation.current.wind_deg
                )}{" "}
                {Math.round(weatherInformation.current.wind_gust)} mph gusts
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <p className="font-bold">Tomorrow's Conditions:</p>
            <img
              src={`http://openweathermap.org/img/w/${weatherInformation.current.weather[0].icon}.png`}
              alt={weatherInformation.daily[1].weather[0].description}
            ></img>
            <ul className="text-sm">
              <li>
                Weather : {weatherInformation.daily[1].weather[0].description}
              </li>
              <li>
                Temp : {Math.round(weatherInformation.daily[1].temp)}&#176;F /{" "}
                {Math.round(fToC(weatherInformation.daily[1].temp) * 10) / 10}
                &#176;C
              </li>
              <li>Clouds : {weatherInformation.daily[1].weather.clouds}%</li>
              <li>
                Visibility : {weatherInformation.daily[1].weather.visibility}m
              </li>
              <li>
                Wind : {Math.round(weatherInformation.daily[1].wind_speed)}mph,{" "}
                {Compass.cardinalFromDegree(
                  weatherInformation.daily[1].wind_deg
                )}{" "}
                {Math.round(weatherInformation.daily[1].wind_gust)} mph gusts
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export { Forecast };
