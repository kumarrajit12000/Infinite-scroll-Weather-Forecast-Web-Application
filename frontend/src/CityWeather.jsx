import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const CityWeather = () => {
  
  const [data,setData] = useState();
  const [city,setCity] = useState();
  let {cityname} = useParams()
  
  const getData = async() => {
      const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&units=metric&appid=5f6f5d5249fab277ae3cc561f91a20bf`);
      const res =  await result.json();
      console.log(res.list);
      setCity([res.city]);
      setData([...res.list]);
      console.log(data);
      console.log(city);
  }

  useEffect(() => {
      getData();
  },[]);

  return (
    <div className="weather" style={{display:'flex'}}>
      <div className="temp">
        <p style={{fontSize:'40px'}}>{cityname}, &nbsp; </p> 
        <p style={{fontSize:'50px',marginTop:'-30px'}}>{data[0].main.temp}&deg;C</p>
        <p style={{fontSize:'20px',marginTop:'-40px'}}>Feels Like {data[0].main.feels_like}&deg;C <i>{data[0].weather[0].description}</i></p>
      </div>
      <div className="details" style={{display:'flex'}}>
        <div className="left">
          <p>Temp_min : {data[0].main.temp_min} &deg;C</p>
          <p>Temp_max : {data[0].main.temp_max} &deg;C</p>
          <p>Pressure : {data[0].main.pressure}</p>
          <p>Humidity : {data[0].main.humidity} %</p>
        </div>
        <div className="right">
          <p>Sea_level : {data[0].main.sea_level}</p>
          <p>Ground_level : {data[0].main.grnd_level}</p>
          <p>Wind_speed : {data[0].wind.speed} m/s</p>
          <p>Wind_degree : {data[0].wind.deg} &deg;</p>
          <p>visibility : {data[0].visibility} m</p>
          </div>
      </div>
    </div>
  )
}

export default CityWeather