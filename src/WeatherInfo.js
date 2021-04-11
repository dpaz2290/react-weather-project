import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props){
    return (
        <div className="weatherInfo">
            <h1>{props.data.city}</h1>
        <ul>
            <li>
                <FormatDate date={props.data.date}/>
            </li>
            <li className="text-capitalize">
                {props.data.description}
            </li>
        </ul>
        <div className = "row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" className="float-left"/>
              <div className="float-left">
                <span className="temperature">
                  {Math.round(props.data.temperature)}
                </span>
                <span className ="unit">
                ºC
                </span>
                </div>
                </div>
            </div>
        <div className="col-6">
            <ul>
                <li>
                    Precipitation: 15%
                </li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} Km/h</li>
            </ul>
        </div>
            </div>
        </div>
    )
}