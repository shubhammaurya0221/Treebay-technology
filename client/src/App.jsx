import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import BioEthanol from './Pages/BioEthanol'
import BioIsoButanol from './Pages/BioIsoButanol'
import BioMethanol from './Pages/BioMethanol'
import BioCBG from './Pages/BioCBG'
import BioDiesel from './Pages/BioDiesel'
import GreenHydrogen from './Pages/GreenHydrogen'
import SAF from './Pages/SAF'
import PlasticPyrolysis from './Pages/PlasticPyrolysis'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* pages */}
        <Route path='/' element={<Home/>}/>
        {/* Industries */}
        <Route path='/bio-ethanol' element={<BioEthanol/>} />
        <Route path='/bio-iso-butanol' element={<BioIsoButanol/>} />
        <Route path='/bio-methanol' element={<BioMethanol/>} />
        <Route path='/bio-CBG' element={<BioCBG/>} />
        <Route path='/bio-diesel' element={<BioDiesel/>} />
        <Route path='/green-hydrogen' element={<GreenHydrogen/>} />
        <Route path='/saf' element={<SAF/>} />
        <Route path='/plastic-pyrolysis' element={<PlasticPyrolysis/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
