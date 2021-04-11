import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather (props) {
    
    const [weatherData, setWeatherData]= useState({ready: false});
    const [city, setCity]=useState(props.defaultCity);
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

    function search (){
        const apiKey= "5d7a48c45799df1cd3a05ecee722cc4e";
        let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit (event){
        event.preventDefault();
        search();
        }

    function handleCityChange (event){
        setCity(event.target.value);
        }

if (weatherData.ready) {
    return <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                <input type="search" placeholder= "Enter a city" className="form-control" autoFocus="on" onChange={handleCityChange} />
                </div>
                <div className="col-3">
                <input type="submit" value="search" className="btn btn-primary w-100" />
                </div>
            </div>
        </form>
        <WeatherInfo data={weatherData}/>
        
        </div>
} else {
    search ();
    return "The app is loading...";
    }
}