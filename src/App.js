import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"

// Pages
import Home from './pages/Home'
import Topics from './pages/Topics'
import Ptable from './pages/Ptable'
import Cards from './pages/Cards'
import Lessons from "./pages/Lessons";


// components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePageIcons from "./components/HomePageIcons"

function App() {
  return ( 
   <> 

    <Navbar />
    <div >
        <Routes>
          <Route path="/" element={<Home Home={HomePageIcons} />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/ptable" element={<Ptable />} /> 
          <Route path="/cards" element={<Cards />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes> 
    </div>
    <div>
      <Footer />
    </div> 
   </>
  );
}



export default App;
