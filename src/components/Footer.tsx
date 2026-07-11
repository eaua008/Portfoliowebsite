export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
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

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="py-16 border-t border-white/10 bg-anime-black relative z-10" id="app-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 select-none">
        
        {/* Left: Brand logo in footer */}
        <a 
          href="#hero" 
          className="flex items-center space-x-3 group" 
          onClick={(e) => { 
            e.preventDefault(); 
            handleLinkClick('hero'); 
          }}
          id="footer-logo-link"
        >
          <div className="w-5 h-5 flex items-center justify-center border border-white/20 group-hover:border-white transition-colors">
            <span className="font-mono text-[9px] text-white">E</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-xs tracking-widest text-white uppercase group-hover:text-slate-400 transition-colors">
              Eijkim Maulit
            </span>
            <span className="font-mono text-[8px] tracking-widest text-slate-600 uppercase">
              STUDENT SOFTWARE DEVELOPER
            </span>
          </div>
        </a>

        {/* Center: Footer Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" id="footer-links-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className="font-sans text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleLinkClick(item.id); 
                }}
                id={`footer-link-item-${item.id}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Copyright notice */}
        <div className="font-mono text-[9px] tracking-widest text-slate-600 uppercase" id="footer-copyright-note">
          &copy; {currentYear} Eijkim Maulit. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
