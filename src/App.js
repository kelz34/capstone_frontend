import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom"

// Pages
import Home from './pages/Home'
import Topics from './pages/Topics'
import Tips from './pages/Tips'
import Ptable from './pages/Ptable'


// components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePageIcons from "./components/HomePageIcons"

function App() {
  return (
   <>
    <Navbar />
    <div className="container">
        <Routes>
          <Route path="/" element={<Home Home={HomePageIcons} />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/ptable" element={<Ptable />} /> 
          <Route path="/" element={<HomePageIcons  />} />
        </Routes> 
    </div>
    <div>
      <Footer />
    </div> 
   </>
  );
}

export default App;
