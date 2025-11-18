import { useState, useEffect } from 'react';
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
      
      <div className="w-full">
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
    </div>
  );
}

export default App;