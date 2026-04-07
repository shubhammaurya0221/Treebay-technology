import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import BioEthanol from './Pages/BioEthanol'
import BioIsoButanol from './Pages/BioIsoButanol'
import BioMethanol from './Pages/BioMethanol'
import BioMethane from './Pages/BioMethane'
import BioDiesel from './Pages/BioDiesel'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* pages */}
        <Route path='/' element={<Home/>}/>
        <Route path='/bio-ethanol' element={<BioEthanol/>} />
        <Route path='/bio-iso-butanol' element={<BioIsoButanol/>} />
        <Route path='/bio-methanol' element={<BioMethanol/>} />
        <Route path='/bio-methane' element={<BioMethane/>} />
        <Route path='/bio-diesel' element={<BioDiesel/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
