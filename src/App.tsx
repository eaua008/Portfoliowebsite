import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Scroll event listener for navigation link activation
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 250; // Trigger threshold offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial execution
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-anime-black text-slate-100 selection:bg-white/20 selection:text-white" id="app-root-frame">
      {/* Anime Editorial Technical Effects Overlay */}
      <div className="scanlines" id="app-scanlines" />
      <div className="vignette" id="app-vignette" />
      <div className="editorial-grid" id="app-editorial-grid" />

      {/* Decorative vertical coordinates overlay on the left margin (purely visual & extremely subtle) */}
      <div className="fixed left-4 bottom-12 z-20 hidden lg:flex flex-col items-center gap-4 text-[9px] font-mono text-slate-500 tracking-widest uppercase [writing-mode:vertical-lr] select-none">
        <span>EST. 2023 // STUDENT DEVELOPER</span>
        <div className="w-[1px] h-12 bg-white/15" />
      </div>

      {/* Decorative page index indicator on the right margin */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-end gap-2 text-[10px] font-mono text-slate-500 select-none">
        {['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'].map((sect, idx) => (
          <button
            key={sect}
            onClick={() => scrollToSection(sect)}
            className={`flex items-center gap-2 transition-all duration-300 group hover:text-white ${
              activeSection === sect ? 'text-white' : 'text-slate-600'
            }`}
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider text-[8px]">
              {sect === 'hero' ? '00' : `0${idx}`} {sect}
            </span>
            <div className={`h-[1px] transition-all duration-300 ${
              activeSection === sect ? 'w-8 bg-white' : 'w-4 bg-white/20'
            }`} />
          </button>
        ))}
      </div>

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Structural Layout */}
      <main id="app-main-sections" className="relative z-10">
        {/* Hero Section with Giant Monumental Mechanism */}
        <Hero 
          onContactClick={() => scrollToSection('contact')} 
          onProjectsClick={() => scrollToSection('projects')} 
        />
        
        {/* Section 01: About */}
        <About />
        
        {/* Section 02: Skills */}
        <Skills />
        
        {/* Section 03: Projects */}
        <Projects />
        
        {/* Section 04: Experience */}
        <Experience />
        
        {/* Section 05: Education */}
        <Education />
        
        {/* Section 06: Contact */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
