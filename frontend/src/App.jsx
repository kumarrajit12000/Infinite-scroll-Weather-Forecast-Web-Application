import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from './Cities';
import CityWeather from './CityWeather';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={< Cities/>}></Route>
        <Route path='/CityWeather' element={< CityWeather/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App