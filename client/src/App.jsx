import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

// BIO FUEL
import BioEthanol from './Pages/BIO FUEL/BioEthanol'
import BioIsoButanol from './Pages/BIO FUEL/BioIsoButanol'
import BioMethanol from './Pages/BIO FUEL/BioMethanol'
import BioCBG from './Pages/BIO FUEL/BioCBG'
import BioDiesel from './Pages/BIO FUEL/BioDiesel'
import GreenHydrogen from './Pages/BIO FUEL/GreenHydrogen'
import SAF from './Pages/BIO FUEL/SAF'
import PlasticPyrolysis from './Pages/BIO FUEL/PlasticPyrolysis'

// FOOD PROCESSING
import StarchLiquidGlucosePlant from './Pages/FOOD PROCESSING/StarchLiquidGlucosePlant'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* pages */}
        <Route path='/' element={<Home/>}/>
        {/* Industries */}
        {/* 1. BIO FUEL */}
        <Route path='/bio-ethanol' element={<BioEthanol/>} />
        <Route path='/bio-iso-butanol' element={<BioIsoButanol/>} />
        <Route path='/bio-methanol' element={<BioMethanol/>} />
        <Route path='/bio-CBG' element={<BioCBG/>} />
        <Route path='/bio-diesel' element={<BioDiesel/>} />
        <Route path='/green-hydrogen' element={<GreenHydrogen/>} />
        <Route path='/saf' element={<SAF/>} />
        <Route path='/plastic-pyrolysis' element={<PlasticPyrolysis/>} />
        {/* 2. FOOD PROCESSING */}
        <Route path='/starch-liquid-glucose' element={<StarchLiquidGlucosePlant/>}/>
        {/* <Route path='/starch-and-liquid-glucose-plant' element={<StarchLiquidGlucosePlant/>}/>
        <Route path='/starch-and-liquid-glucose-plant' element={<StarchLiquidGlucosePlant/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
