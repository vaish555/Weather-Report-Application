import React, { useEffect, useState } from 'react'
import Weather from './components/Weather'

function App() {
  
  let [city,setCity]=useState("");
  let [searchWeather,setSearchWeather]=useState([]);
  let updateWeather=(e)=>{
       setCity(e.target.value);
  }
  let apikey = "0135c0a7a5199009d87f7fcf4cd208b9";
  let displayWeather=async()=>{
      let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
      data=await data.json();
      console.log(data)
      setSearchWeather(data)
  }
 
  return (
    <div>
      <input className="search" type="search" placeholder='Enter city name' onChange={updateWeather} />
      <br />
      <button className='btn' onClick={displayWeather}>Search</button>
      {(searchWeather.cod == 200) ? <Weather searchWeather={searchWeather}/>:<h2 style={{ color: "red" }}>Please enter valid city name</h2>}

    </div>
  )
}

export default App
