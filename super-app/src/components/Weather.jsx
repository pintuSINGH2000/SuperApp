import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import humidityimg from "../assets/images/humidity.png";
import windimg from "../assets/images/wind.png";
import pressureimg from "../assets/images/pressure.png";

export const Weather = () => {
  const [weather, setWeather] = useState({});
  const apiKey = import.meta.env.VITE_WEATHER_KEY;

  useEffect(() => {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Ahmedabad&aqi=no`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setWeather(res))
      .catch((err) => console.log(err));
  }, []);

  const check = () => {
    if(weather&&weather.current) return true;
    return false;
 }

  return (
    <div className="weather-container">
        <div className="cur-date roboto-500">
            {check()&&weather.current.last_updated}
        </div>
        <div className="weather-detail">
            <div className="weather-condition">
            <img src={check()&&weather.current.condition.icon} alt="weatherIcon"/>
            <div>{check()&&weather.current.condition.text}</div>
            </div>
            <div className="vertical-line"></div>
            <hr className="horizontal-line"/>
            <div className="temp-pressure">
                <div className="temp roboto-400">{check()&&weather.current.temp_c}&deg;C</div>
                <div className="pressure roboto-400">
                     <img src= {pressureimg} alt="pressureimg"/>
                    <div style={{marginLeft: "10px"}}>{check()&&weather.current.pressure_mb} mbar <div>Pressure</div></div>
                </div>
            </div>
            <div className="vertical-line"></div>
            <hr className="horizontal-line"/>
            <div className="wind-humidity">
                <div className="wind roboto-400">
                    <img src={windimg} alt="windimg"/>
                    <div style={{marginLeft: "10px"}}>{check()&&weather.current.wind_kph} km/h  <div>Wind</div></div>
                </div>
                
                <div className="humidity roboto-400">
                    <img src={humidityimg} alt="humidityimg"/> 
                    <div style={{marginLeft: "22px"}}>{check()&&weather.current.humidity} % <div>Humidiy</div></div>
                </div>
            </div>
        </div>
    </div>
  ); 
};
