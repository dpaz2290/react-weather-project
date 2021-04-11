import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function Weather () {
    
    const [weatherData, setWeatherData]= useState({ready: false});
    function handleResponse(response){

        setWeatherData({
            ready:true,
            date: new Date(response.data.dt*1000),
            temperature: response.data.main.temp,
            city: response.data.name,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
    });

    }

if (weatherData.ready) {
    return <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                <input type="search" placeholder= "Enter a city" className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                <input type="submit" value="search" className="btn btn-primary w-100" />
                </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>
                <FormatDate date={weatherData.date}/>
            </li>
            <li className="text-capitalize">
                {weatherData.description}
            </li>
        </ul>
        <div className = "row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" className="float-left"/>
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
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
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} Km/h</li>
            </ul>
        </div>
            </div>
        </div>
} else {
    const apiKey= "5d7a48c45799df1cd3a05ecee722cc4e";
    let city = "BARCELONA";
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "The app is loading...";
    }
}