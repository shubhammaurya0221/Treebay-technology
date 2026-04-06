import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import BioEthanol from './Pages/BioEthanol'
import BioIsoButanol from './Pages/BioIsoButanol'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* pages */}
        <Route path='/' element={<Home/>}/>
        <Route path='/bio-ethanol' element={<BioEthanol/>} />
        <Route path='/bio-iso-butanol' element={<BioIsoButanol/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
