import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'
import Sports from './pages/Sports'
import Entertainment from './pages/Entertainment'
import Finance from './pages/Finance'
import Politics from './pages/Politics'
import Crime from './pages/Crime'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <div className='mb-[60px]'>
    <Navbar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sports' element={<Sports/>}/>
      <Route path='/entertainment' element={<Entertainment/>}/>
      <Route path='/finance' element={<Finance/>}/>
      <Route path='/politics' element={<Politics/>}/>
      <Route path='/crime' element={<Crime/>}/>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App


