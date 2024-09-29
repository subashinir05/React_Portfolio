import React from "react"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Project/>
    </div>
  );
};

export default App;