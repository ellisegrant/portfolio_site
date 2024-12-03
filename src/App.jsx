import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import './App.css'

const App = () => {
  return <div >
    <Navbar />
    <Hero/>
    <About/>
    </div>;
};

export default App;
