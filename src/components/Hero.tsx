import React from 'react';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { HangingChain, FloatingMonolith, TechFrame, VerticalJapaneseText, AlignmentGrid } from './AbstractElements';
import portraitImg from '../assets/images/portrait.jpg';
interface HeroProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function Hero({ onContactClick, onProjectsClick }: HeroProps) {
  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onProjectsClick();
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onContactClick();
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-start pt-24 overflow-hidden bg-anime-black"
    >
      {/* 
        ASTRONOMICAL CELESTIAL BACKGROUND:
        Enormous monumental clock face & geometric orbital mechanisms.
        They extend far beyond the viewport to convey a massive, majestic scale.
      */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        
        {/* Giant Orbital Diagram Circle 1 (Far right, partially visible) - Towering Clock face from Image 4 */}
        <div className="absolute right-[-20%] top-[-10%] w-[90vw] h-[90vw] min-w-[800px] min-h-[800px] rounded-full border-2 border-white/20 animate-[spin_50s_linear_infinite] pointer-events-none shadow-[0_0_60px_rgba(255,255,255,0.05)]">
          {/* Inner measurement ticks */}
          <div className="absolute inset-6 rounded-full border border-dashed border-white/[0.025]" />
          <div className="absolute inset-20 rounded-full border border-white/[0.03] flex items-center justify-center">
            {/* Minimal Roman numerals indicating a giant clock face */}
            <span className="absolute top-6 text-[12px] font-mono tracking-widest text-white/20 uppercase">XII</span>
            <span className="absolute right-6 text-[12px] font-mono tracking-widest text-white/20 uppercase">III</span>
            <span className="absolute bottom-6 text-[12px] font-mono tracking-widest text-white/20 uppercase">VI</span>
            <span className="absolute left-6 text-[12px] font-mono tracking-widest text-white/20 uppercase">IX</span>
          </div>
          {/* Astronomical glyph coordinate lines */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.015]" />
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/[0.015]" />
        </div>

        {/* Giant Circular Astronomical Mechanism 2 (Center left, partially visible) */}
        <div className="absolute left-[-20%] bottom-[-10%] w-[70vw] h-[70vw] min-w-[600px] min-h-[600px] rounded-full border border-white/[0.03] rotate-slow-reverse pointer-events-none">
          <div className="absolute left-[-20%] bottom-[-10%] w-[70vw] h-[70vw] min-w-[600px] min-h-[600px] rounded-full border-2 border-white/20 animate-[spin_35s_linear_infinite_reverse] pointer-events-none shadow-[0_0_60px_rgba(255,255,255,0.05)]"/>
          <div className="absolute inset-32 rounded-full border border-white/[0.02]" />
          {/* Constellation-like connecting lines */}
          <div className="absolute top-1/4 left-1/4 w-1/2 h-[1px] bg-white/[0.03] rotate-45" />
          <div className="absolute top-1/4 right-1/4 w-[1px] h-1/2 bg-white/[0.03] -rotate-45" />
          
          {/* Subtle pale cyan celestial coordinate point */}
          <div className="absolute top-12 left-12 w-2 h-2 rounded-full bg-celestial-cyan/30 border border-celestial-cyan/60 animate-ping" />
          <div className="absolute bottom-16 right-32 w-2 h-2 rounded-full bg-celestial-cyan/40" />
        </div>

        {/* Precise Technical Alignment Grid Lines */}
        <AlignmentGrid />

        {/* 
          MONOCHROME ANIME ELEMENTS (FROM UPLOADED IMAGES 1, 2, 3, 4):
          Chains draped down from the top, suspended EXACTLY on vertical grid coordinates (8%, 24%, 76%, 92%)
        */}
        <HangingChain className="absolute left-[8%] -top-12 z-10 -translate-x-1/2" linksCount={22} opacity="opacity-35" />
        <HangingChain className="absolute left-[24%] -top-24 z-10 -translate-x-1/2" linksCount={28} opacity="opacity-20" />
        <HangingChain className="absolute left-[76%] -top-16 z-10 -translate-x-1/2" linksCount={26} opacity="opacity-30" />
        <HangingChain className="absolute left-[92%] -top-32 z-10 -translate-x-1/2 animate-pulse" linksCount={32} opacity="opacity-15" />

        {/* Vertical monoliths rising from the bottom, aligned exactly with the grid coordinates (8% and 92%) */}
        <div className="absolute bottom-0 left-[8%] z-10 -translate-x-1/2 flex items-end gap-1 hidden lg:flex">
          <FloatingMonolith height="h-[120px]" width="w-[20px]" delay="0.8s" />
          <FloatingMonolith height="h-[180px]" width="w-[24px]" delay="0.3s" indicatorActive />
        </div>

        <div className="absolute bottom-0 left-[92%] z-10 -translate-x-1/2 flex items-end gap-2 hidden md:flex">
          <FloatingMonolith height="h-[200px]" width="w-[28px]" delay="0.2s" />
          <FloatingMonolith height="h-[320px]" width="w-[40px]" delay="0.5s" indicatorActive />
          <FloatingMonolith height="h-[140px]" width="w-[30px]" delay="0s" />
        </div>

        {/* Oversized Cropped Vertical Japanese Text Layer, positioned parallel to the vertical guide lines */}
        <VerticalJapaneseText text="システムセキュリティ" className="absolute left-[24%] top-[12%] -translate-x-1/2 text-[48px] font-black" opacity="opacity-[0.035]" />
        <VerticalJapaneseText text="データベース構造" className="absolute left-[76%] top-[8%] -translate-x-1/2 text-[64px] font-black" opacity="opacity-[0.025]" />

        {/* Floating dust particles matching the mood in Image 1 */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i} 
            className="dust-particle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 12 + 10}s`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}

        {/* Beautiful Floating target frames aligned exactly to grid intersections */}
        <TechFrame className="absolute left-[76%] top-[25%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 hidden xl:block" label="ORBITAL_PLANE_A" />
        <TechFrame className="absolute left-[24%] top-[75%] -translate-x-1/2 -translate-y-1/2 w-48 h-16 hidden lg:block" label="SYSTEM_STABLE // 0xCC" />

        {/* Cold blue-gray atmospheric ambient wash */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-anime-black to-anime-black/80" />
      </div>

      {/* Main Content Area: Placed with asymmetric left offset alignment in a 2-column grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-120px)] py-12">
          
          {/* LEFT SIDE: Name, professional title, short introduction, action buttons (7 columns) */}
          <div className="lg:col-span-7 text-left select-none relative p-6 md:p-10 border border-white/[0.03] bg-anime-black/60 backdrop-blur-md">
            {/* Subtle corners overlay to make this content box look like an active terminal screen */}
            <TechFrame className="absolute inset-0" label="E.MAULIT // SHELL_INIT" />

            {/* Subtle Editorial Tag */}
            <div className="inline-flex items-center space-x-3 mb-6 text-[10px] font-mono uppercase tracking-widest text-slate-400 border border-white/10 bg-white/[0.04] py-1.5 px-3">
              <span className="w-1.5 h-1.5 bg-celestial-cyan rounded-full" />
              <span>SOFTWARE ENGINEER IN TRAINING</span>
              <span className="text-slate-600">|</span>
              <span>DATABASES & SECURITY</span>
            </div>

            {/* Core Name */}
            <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white mb-3 leading-none uppercase relative">
              <span className="absolute -left-6 md:-left-12 top-1 text-base font-mono text-slate-700 font-extralight select-none hidden md:inline">
                [ 00 ]
              </span>
              Eijkim Maulit
            </h1>

            {/* Subtitles: Role/Focus */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
              <p className="font-mono text-xs uppercase tracking-widest text-celestial-cyan font-semibold">
                Software Developer
              </p>
              <span className="text-slate-600 hidden sm:inline">//</span>
              <p className="font-sans text-sm tracking-wider text-slate-400 font-light">
                Computer Science Student
              </p>
            </div>

            {/* Simple, Professional Pitch */}
            <div className="space-y-4 mb-10 text-slate-300 font-light leading-relaxed max-w-xl">
              <p className="font-sans text-base border-l-2 border-celestial-cyan pl-4 text-white">
                I build database-driven applications and software systems with a growing focus on database administration and database security.
              </p>
              <p className="font-sans text-xs md:text-sm text-slate-400 pl-4">
                My work includes desktop applications, cross-platform systems, relational database design, and software projects built with Java, C#, .NET MAUI, JavaFX, and SQL.
              </p>
            </div>

            {/* Editorial Call-to-actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#projects" 
                onClick={handleProjectsClick} 
                className="px-6 py-3.5 border border-white bg-white hover:bg-transparent hover:text-white text-anime-black font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center space-x-2 group"
                id="hero-explore-cta"
              >
                <span>View My Projects</span>
                <ArrowRight size={12} className="transform group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a 
                href="https://github.com/eaua008" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-white/10 hover:border-white/40 bg-white/[0.01] hover:bg-white/[0.04] text-slate-300 hover:text-white font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center space-x-2"
                id="hero-github-cta"
              >
                <Github size={12} className="text-slate-500" />
                <span>GitHub</span>
              </a>

              <a 
                href="#contact" 
                onClick={handleContactClick} 
                className="px-6 py-3.5 border border-dashed border-white/10 hover:border-white/20 text-slate-400 hover:text-white font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center space-x-2"
                id="hero-contact-cta"
              >
                <Mail size={12} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Large Portrait Image Placeholder integrated elegantly (5 columns) */}
          <div className="lg:col-span-5 flex justify-center items-center relative h-full">
            
            {/* Background elements partially overlapping behind placeholder */}
            <div className="absolute -z-10 w-[240px] h-[240px] rounded-full border border-dashed border-celestial-cyan/10 animate-spin" style={{ animationDuration: '40s' }} />
            <div className="absolute -z-10 w-[180px] h-[180px] rounded-full border border-white/5 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
            
            {/* Asymmetrical technical framing around the portrait box */}
            <div className="relative p-3 bg-[#0c0d12]/50 border border-white/10 max-w-sm w-full aspect-[3/4] flex flex-col justify-between group">
              <TechFrame className="absolute inset-0" label="PORTRAIT_STAGE // 0xAF" />
              
              {/* Corner accent blocks */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-celestial-cyan" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-celestial-cyan" />
              
              {/* Inner placeholder content wrapper */}
              <div className="w-full h-full relative overflow-hidden bg-[#050507] border border-dashed border-white/5 select-none">
               <img
              src={portraitImg}
              alt="Portrait"
              className="w-full h-full object-cover"
              />
              <div className="absolute left-1/2 top-4 -translate-x-1/2 w-[1px] h-4 bg-white/20" />
              <div className="absolute left-1/2 bottom-4 -translate-x-1/2 w-[1px] h-4 bg-white/20" />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-white/20" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-white/20" />
              <div className="absolute top-2 left-3 font-mono text-[6px] text-slate-600">SYS_COORDS // x:294 y:402</div>
              <div className="absolute bottom-2 right-3 font-mono text-[6px] text-slate-600">SIZE_REQS // 3:4 ASPECT</div>
              </div>
            </div>

            {/* Floating editorial text beside portrait frame */}
            <div className="absolute -right-6 top-[20%] font-mono text-[8px] text-slate-600 tracking-widest uppercase [writing-mode:vertical-rl] select-none pointer-events-none hidden xl:block">
              FACIAL_REGISTRY_VERIFIED // ID_9402
            </div>
          </div>

        </div>
      </div>

      {/* Extreme Bottom Edge Minimalist Rule */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 z-10 flex justify-between px-12 text-[8px] font-mono text-slate-500 select-none">
        <span className="transform -translate-y-full">SCALE: 1:1.000_CELESTIAL</span>
        <span className="transform -translate-y-full">V_06.CONTACT_SECT_READY</span>
      </div>
    </section>
  );
}
