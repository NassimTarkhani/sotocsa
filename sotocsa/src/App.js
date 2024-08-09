import React from "react";
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Solutions />
      <Search />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
