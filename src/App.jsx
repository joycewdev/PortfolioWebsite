import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Intro from "./sections/Intro";
import Bookshelf from "./sections/Bookshelf";
import Music from "./sections/Music";
import "./index.css";

const Home = () => (
  <>
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
  </>
);

const Life = () => (
  <>
      <Intro />
      <Bookshelf />
      <Music />
  </>
);

const ScrollToSection = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        const timeout = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timeout);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

function App() {
  return (
    <>
      <ScrollToSection />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/life" element={<Life />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
