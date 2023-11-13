import "./app.scss";
import { useEffect } from "react";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import About from './components/about/About';

const App = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      const scrollSpeed = 0;
      const newScrollTop = window.scrollY + event.deltaY * scrollSpeed;
      window.scrollTo(0, newScrollTop);
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div>
      
      <Cursor />
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Parallax type="services" />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
