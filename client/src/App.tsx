import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "./components/NavBar";
import ScrollSection from "./components/ScrollSection";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Education from "./sections/Education/Education";
import Footer from "./components/Footer";

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
    <AnimatePresence mode="wait">
      <motion.div 
        key={theme}
        initial={{ opacity: 0.9, scale: 0.998 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0.9, scale: 0.998 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className={`w-full min-h-screen ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} transition-colors duration-300 ease-in-out`}
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <div className="w-full transition-colors duration-300 ease-in-out">
          <ScrollSection id="home" theme={theme}>
            <Hero theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="about" theme={theme}>
            <About theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="education" theme={theme}>
            <Education theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="skills" theme={theme}>
            <Skills theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="experience" theme={theme}>
            <Experience theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="projects" theme={theme}>
            <Projects theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="contact" theme={theme}>
            <Contact theme={theme} />
          </ScrollSection>
        </div>
        
        <Footer theme={theme} />
        <ScrollToTop />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;