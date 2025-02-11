import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'


export default function App() {
 

  return (
    <div>
      <Navbar />
     <Routes>
      <Route path="/" element={<Home/>} />

     </Routes>
    </div>
  )
}
