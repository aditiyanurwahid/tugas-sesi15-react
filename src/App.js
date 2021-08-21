import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
