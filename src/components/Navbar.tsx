import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', num: '00', label: 'Home' },
    { id: 'about', num: '01', label: 'About' },
    { id: 'skills', num: '02', label: 'Skills' },
    { id: 'projects', num: '03', label: 'Projects' },
    { id: 'experience', num: '04', label: 'Experience' },
    { id: 'education', num: '05', label: 'Education' },
    { id: 'contact', num: '06', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-anime-black/95 border-b border-white/10 py-4' 
          : 'bg-transparent py-6'
      }`} 
      id="app-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left Side: Brand Identity (Monochrome, Swiss style) */}
        <a 
          href="#hero" 
          className="flex items-center space-x-4 group select-none" 
          onClick={(e) => { 
            e.preventDefault(); 
            handleLinkClick('hero'); 
          }}
          id="navbar-logo-link"
        >
          <div className="relative w-7 h-7 flex items-center justify-center border border-white/40 group-hover:border-white transition-colors duration-300">
            <span className="font-mono text-xs font-bold text-white">E</span>
            <span className="absolute -bottom-1 -right-1 w-2 h-[1px] bg-white" />
            <span className="absolute -top-1 -left-1 w-[1px] h-2 bg-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-extrabold text-sm tracking-widest text-white uppercase group-hover:text-white transition-colors duration-300">
              EIJKIM MAULIT
            </span>
            <span className="font-mono text-[9px] tracking-widest text-slate-500 font-light uppercase">
              Developer & Student
            </span>
          </div>
        </a>

        {/* Right Side: Desktop Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-sans text-[11px] font-medium uppercase tracking-widest px-4 py-2 transition-all duration-300 relative group flex items-center gap-1.5 ${
                activeSection === item.id 
                  ? 'text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
              id={`nav-item-${item.id}`}
            >
              <span className="font-mono text-[8px] text-slate-500 font-light">{item.num}</span>
              <span>{item.label}</span>
              
              {/* Underline for active state */}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-white animate-pulse" />
              )}
            </a>
          ))}
        </div>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button 
          className="lg:hidden text-slate-400 hover:text-white transition-colors focus:outline-none p-1.5 border border-white/5 bg-white/[0.02]" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Navigation Menu"
          id="navbar-hamburger-btn"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Links Overlay (Anime minimalist layout) */}
      {isOpen && (
        <div className="lg:hidden bg-anime-black/98 border-b border-white/10 absolute top-full left-0 w-full py-8 px-10 flex flex-col space-y-6 shadow-2xl animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-sans text-xs uppercase tracking-widest block py-2 border-b border-white/5 flex justify-between items-center ${
                activeSection === item.id 
                  ? 'text-white font-bold pl-2 border-l-2 border-l-white border-b-white/20' 
                  : 'text-slate-400 hover:text-white pl-0'
              } transition-all duration-300`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
              id={`nav-mobile-item-${item.id}`}
            >
              <span>{item.label}</span>
              <span className="font-mono text-[10px] text-slate-600">{item.num}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
