import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tests from "./components/Tests";
import Equipment from "./components/Equipment";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "./assets/logo.png"; // kept for reference if needed

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Tests />
      <Equipment />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
