import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TextFade } from "./components/TextFade";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Intro from "./sections/Intro";
import Music from "./sections/Music";
import "./index.css";

const Home = () => (
  <>
    <TextFade direction="down">
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
    </TextFade>
  </>
);

const More = () => (
  <>
    <TextFade direction="down" staggerChildren={0.2}>
      <Intro />
      <Music />
    </TextFade>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more" element={<More />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
