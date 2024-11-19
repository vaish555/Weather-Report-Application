import React, { useState } from 'react'
import "../css/Weather.css"

function Weather({searchWeather}) {
    
  return (
    <div className='container'>
        <h2>City Name:{searchWeather.name}</h2>
        <h2>Country Name:{searchWeather.sys.country}</h2>
        <h2>Temparature:{searchWeather.main.temp}</h2>
        <h2>Min Temparature:{searchWeather.main.temp_min}</h2>
        <h2>Max Temparature:{searchWeather.main.temp_max}</h2>
        <h2>Atmospheric pressure:{searchWeather.main.pressure}</h2>
        <h2>Description:{searchWeather.weather[0].description}</h2>
    </div>
    


  )
}

export default Weather
