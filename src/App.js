import "./App.css";
import Navbar from "./src/components/Navbar";
import Jumbotron from "./src/components/Jumbotron";
import About from "./src/components/About";
import Gallery from "./src/components/Gallery";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";

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
