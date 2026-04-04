import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import BioEthanol from './Pages/BioEthanol'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* pages */}
        <Route path='/' element={<Home/>}/>
        <Route path='/bio-ethanol' element={<BioEthanol/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
