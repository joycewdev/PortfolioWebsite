import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import "./index.css";

const Home = () => (
  <>
    <Hero />
    <Experience />
    <Projects />
    <TechStack />
  </>
);

const Archive = () => <></>;

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
