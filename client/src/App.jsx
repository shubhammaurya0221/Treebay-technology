import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import BioEthanol from './Pages/BioEthanol'
import BioIsoButanol from './Pages/BioIsoButanol'
import BioMethanol from './Pages/BioMethanol'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* pages */}
        <Route path='/' element={<Home/>}/>
        <Route path='/bio-ethanol' element={<BioEthanol/>} />
        <Route path='/bio-iso-butanol' element={<BioIsoButanol/>} />
        <Route path='/bio-methanol' element={<BioMethanol/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
