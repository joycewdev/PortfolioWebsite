import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
      <Footer />
    </>
  );
}

export default App;
