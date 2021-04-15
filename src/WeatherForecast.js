import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast () {
    return (
    <div className= "WeatherForecast">
        <div className= "row">
            <div className="col">
                <div className="WeatherForecastDay">Thursday</div>
                <WeatherIcon code="01d" size={36}/>
                <div className="WeatherForecastTemperature">
                    <span className="WeatherForecastTemperature-min">
                        19º {" "}
                    </span>
                    <span className="WeatherForecastTemperature-max">
                        10º
                    </span>
                </div>
            </div>
        </div>
    </div>)
}