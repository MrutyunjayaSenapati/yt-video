import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Search from './components/Search.jsx'
import PlayingVideo from './components/PlayingVideo.jsx'


export default function App() {
 

  return (
    <div>
      <Navbar />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search/:searchQuery" element={<Search/>} />
      <Route path="/video/:id" element={<PlayingVideo/>} />

     </Routes>
    </div>
  )
}
