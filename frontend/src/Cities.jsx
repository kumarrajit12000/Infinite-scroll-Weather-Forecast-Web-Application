import React, { useEffect, useState } from 'react'
import './Cities.css';
import { useNavigate } from 'react-router-dom';
const Cities = () => {
    const [data,setData] = useState([]);

    const getData = async() => {
        const result = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?select=cou_name_en%2Cname%2Cpopulation%2Ctimezone%2Ccoordinates&limit=100`);
        const res =  await result.json();
        console.log(res.results);
        setData([...res.results]);
        console.log(data);
    }

    useEffect(() => {
        getData();
    },[]);

  return (
    <>
        <nav className=''> 
            <h1>CITIES</h1>
            <div className="search">
                <form style={{display:"flex" , gap:"10px"}}>
                    <input type='text' placeholder='Enter City Name' style={{width:"80%",height:"100%", marginTop:"20px", fontSize:'1.8vw' }}></input>
                    <button style={{width:"20%",height:"100%", marginTop:"20px", fontSize:'1.8vw' }}> Search</button>
                </form>
            </div>
        </nav>

        <h3 style={{textAlign:"center"}}>CITIES DATAILS</h3>
        <div className="table">
        <table>
          <tbody>
            <tr>
              <th style={{width:"200px"}}>City name</th>
              <th style={{width:"150px"}}>Country name</th>
              <th style={{width:"150px"}}>TimeZone</th>
              <th style={{width:"100px"}}>Population</th>
              <th style={{width:"300px"}}>Coodinates</th>
            </tr>
            
           {
              data.map((el,idx) => {
                return(
                  <tr style={{borderBottom:"1px solid black"}}>
                    <td><a href={`/CityWeather/${el.name}`} style={{textDecoration:"none",color:"black"}} target="_blank">{el.name}</a></td>
                    <td>{el.cou_name_en}</td>
                    <td>{el.timezone}</td>
                    <td>{el.population}</td>
                    <td>{el.coordinates.lon}(lon) & {el.coordinates.lat}(lat)</td>
                  </tr>
                )
              })
           }
          </tbody> 
        </table>
        </div>
    
    </>
  )
}

export default Cities