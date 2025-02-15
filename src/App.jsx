import React, { useEffect,useState } from 'react'
import Navbar from './components/Navbar'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './components/Home.jsx'
import Search from './components/Search.jsx'
import PlayingVideo from './components/PlayingVideo.jsx'


export default function App() {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
   useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light"); // 🔹 Fixed this line!
      }
    }, [darkMode]);

 const location=useLocation();
 const hideNavbar=location.pathname.startsWith("/video/");


 return (
  <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
    {!hideNavbar && <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:searchQuery" element={<Search />} />
      <Route path="/video/:id" element={<PlayingVideo />} />
    </Routes>
  </div>
);

}
