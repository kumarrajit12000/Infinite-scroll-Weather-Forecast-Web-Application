import React, { useEffect, useState } from 'react'
import './Cities.css';
const Cities = () => {
    const [data,setData] = useState();

    useEffect(() => {

        for(let i=100; i<=20000; i+=100 ){

            fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?select=cou_name_en%2Cname&limit=100&offset=${i}`)
             .then(response => {
               if (!response.ok) {
                 throw new Error('Network response was not ok');
               }
               return response.json();
             })
             .then(data => {
               console.log(data);
             })
             .catch(error => {
               console.error('There was a problem with the fetch operation:', error);
             });
        }
        
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
        <table>
            <caption>Cities Details</caption>
        </table>
    
    
    </>
  )
}

export default Cities