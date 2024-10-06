import { useEffect } from "react";
import './index.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import { Achivement }from "./components/Achivement";
import Aos from "aos";
import "aos/dist/aos.css";
const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
 
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Achivement />
        <Contact />
      </div>
    </>
  );
};

export default App;
