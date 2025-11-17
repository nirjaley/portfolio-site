import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from "./components/NavBar";
import ScrollSection from "./components/ScrollSection";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Education from "./sections/Education/Education";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`w-full ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} transition-colors duration-300`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <AnimatePresence>
        <div className="snap-y snap-mandatory h-screen overflow-y-auto">
          <ScrollSection id="home">
            <Hero theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="about">
            <About theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="education">
            <Education theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="skills">
            <Skills theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="experience">
            <Experience theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="projects">
            <Projects />
          </ScrollSection>
          
          <ScrollSection id="contact">
            <Contact />
          </ScrollSection>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;