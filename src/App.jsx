import React from "react";
import Hero from "./Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Home from "./Home/Home";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Ongoings from "./Ongoings/Ongoings";
import Testimonials from "./Testimonials/Testimonials";
function App() {
  return (
    <div className="Home">
      <Hero />
      <Home />
      <Projects />
      <Ongoings />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
