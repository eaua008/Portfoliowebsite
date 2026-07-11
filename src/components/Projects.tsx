import React from 'react';
import { Shield, Github, Database, Cpu, HeartPulse, Terminal, ArrowUpRight, CheckSquare } from 'lucide-react';
import { TechFrame, HangingChain, VerticalJapaneseText } from './AbstractElements';

export default function Projects() {
  const projects = [
    
    {
      num: "01",
      id: 'civixia',
      name: 'Civixia',
      type: 'E-Barangay Document Request Management System',
      icon: <Database className="text-white" size={16} />,
      desc: '"A desktop system built for Barangay Pequeño, Davao City that replaces manual, paper-based document requests with a searchable, auditable digital workflow.',
      problem: 'Paper-based barangay requests had no searchable records and no audit trail — easy to lose, duplicate, or falsify. This system replaces that with a logged, role-based digital process.',
      role: 'Lead Developer & System Architect',
      tech: ['Java', 'JavaFX', 'SQLite', 'MVC Pattern', 'Audit Log Records'],
      features: [
        'Role-based access control with a Super Admin layer, separating citizen self-service from staff approval workflows.',
        'Barcode generation and CSV import/export for fast document tracking and record-keeping.',
        'Soft-delete archiving with a full audit log — no resident record can be lost or altered without a trace.'
      ],
      github: 'https://github.com/eaua008/CIVIXIA-A-BARANGAYDOCUSYSTEM',
      demo: null,
      badgeText: "Academic Capstone",
      status: "Capstone — Completed",
      scope: "Barangay Pequeño, Davao City",
      visualSchema: {
        title: "CIVIXIA_SQLITE_RELATIONAL",
        lines: [
          "Table: civixia_residents [PK: res_id]",
          "Check: auth_clearance == 'ADMIN'",
          "Action: soft_delete_trigger() active",
          "src/",
          "├── controller/",
          "│   ├── AdminController.java",
          "│   └── AuthController.java",
          "├── model/",
          "│   ├── Resident.java",
          "├── util/",
          "│   ├── DatabaseManager.java",
          "├── view/",
          "│   ├── SplashView.java",
          "│   ├── LoginView.java",
          "│   ├── RegisterView.java",
          "│   ├── UserLoginView.java",
          "│   ├── UserDashboard.java",
          "│   ├── ApplyDoc.java",
          "│   ├── FilingTracker.java",
          "│   ├── CitizenPass.java",
          "│   ├── AdminDashboard.java",
          "│   ├── DocumentRequestsView.java",
          "│   ├── ResidentsDirectoryView.java",
          "│   ├── AnnouncementsView.java",
          "│   └── DatabaseBackupView.java",
          "└── Main.java"
        ],
        mockupTitle: "Civixia Client",
        mockupScreen: "SQLITE resident_records STABLE // ROW_COUNT: 421"
      }
    },
    {
      num: "02",
      id: 'nexus',
      name: 'Nexus Inventory Engine',
      type: 'Terminal Inventory Management Tool',
      icon: <Terminal className="text-white" size={16} />,
      desc: 'An interactive keyboard-driven console tool built to manage product parameters, stock limits, and secure categorical data states.',
      problem: 'Maintaining quick state arrays and file synchronization without standard graphical buffers or database engines.',
      role: 'Solo Developer & Creator',
      tech: ['C++', 'ANSI Sequences', 'Standard Template Library', 'File Stream I/O'],
      features: [
        'Wrote custom keyboard pollers to navigate lists without blocking terminal buffers.',
        'Constructed clean ANSI terminal tables to visualize real-time inventory records.',
        'Engineered structured file streams with validation checking to prevent document corruption.'
      ],
      github: 'https://github.com/eaua008/NEXUS-INVENTORT-MANAGEMENT-SYSTEM',
      demo: null,
      badgeText: "Console Utility",
      visualSchema: {
        title: "NEXUS_CLI_STATE_MATRIX",
        lines: [
          "Buffer: Non-blocking keystroke tracking",
          "I/O Streams: Prevent text overrides",
          "Display: Non-destructive ANSI matrices"
        ],
        mockupTitle: "Nexus Console",
        mockupScreen: "NEXUS_INIT // CACHE_LOADED // STREAM_STABLE"
      }
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-anime-black text-slate-100 font-sans">
      
      {/* Background celestial grids & hanging chains for premium mood */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Alignment Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:45px_45px]" />

        {/* Large Blueprint circular compass in background - ROTATING & HIGHLY VISIBLE */}
        <div className="absolute left-[-15%] top-[15%] w-[800px] h-[800px] rounded-full border border-white/10 flex items-center justify-center animate-[spin_80s_linear_infinite]">
          <div className="w-[650px] h-[650px] rounded-full border border-dashed border-white/10 flex items-center justify-center relative">
            
            {/* Edge Indicators */}
            <div className="absolute top-0 w-3 h-3 bg-white/20 rotate-45" />
            <div className="absolute bottom-0 w-3 h-3 bg-white/20 rotate-45" />
            <div className="absolute left-0 w-3 h-3 bg-white/20 rotate-45" />
            <div className="absolute right-0 w-3 h-3 bg-white/20 rotate-45" />

            <div className="w-[450px] h-[450px] rounded-full border border-white/10 flex items-center justify-center">
              <div className="absolute w-[95%] h-[1px] bg-white/15" />
              <div className="absolute h-[95%] w-[1px] bg-white/15" />
            </div>
          </div>
          <div className="absolute w-[110%] h-[1px] bg-white/10 rotate-45" />
          <div className="absolute w-[110%] h-[1px] bg-white/10 -rotate-45" />
          <span className="absolute top-4 font-mono text-[8px] text-slate-400 font-bold uppercase tracking-widest bg-[#030303] px-1.5 border border-white/5">PROJ_BLUEPRINT_L</span>
        </div>

        {/* Second massive blueprint on the right middle - ROTATING COUNTER-CLOCKWISE */}
        <div className="absolute right-[-10%] top-[55%] w-[700px] h-[700px] rounded-full border border-white/10 flex items-center justify-center animate-[spin_90s_linear_infinite_reverse]">
          <div className="w-[500px] h-[500px] rounded-full border border-dashed border-white/10 flex items-center justify-center relative">
            
            {/* Inner indicators */}
            <div className="absolute top-[25%] left-[25%] w-2 h-2 bg-white/15 rotate-12" />
            <div className="absolute bottom-[25%] right-[25%] w-2 h-2 bg-white/15 rotate-12" />

            <div className="absolute h-[110%] w-[1px] bg-white/10" />
            <div className="absolute w-[110%] h-[1px] bg-white/10" />
            <div className="absolute h-[110%] w-[1.5px] bg-white/15 rotate-45" />
            <div className="absolute w-[110%] h-[1.5px] bg-white/15 -rotate-45" />
          </div>
          <span className="absolute bottom-4 font-mono text-[8px] text-slate-400 font-bold uppercase tracking-widest bg-[#030303] px-1.5 border border-white/5">PROJ_BLUEPRINT_R</span>
        </div>

        {/* Hanging chains scaled up */}
        <HangingChain className="absolute left-[3%] -top-12" linksCount={30} opacity="opacity-30" />
        <HangingChain className="absolute right-[12%] -top-4" linksCount={24} opacity="opacity-25" />
        <HangingChain className="absolute left-[40%] -top-24" linksCount={34} opacity="opacity-20" />
        <HangingChain className="absolute right-[30%] top-[45%]" linksCount={28} opacity="opacity-15" />

        <VerticalJapaneseText text="開発実績概要" className="absolute left-6 top-[30%] text-[40px] font-black" opacity="opacity-[0.02]" />
        <VerticalJapaneseText text="ソースコード" className="absolute right-6 top-[60%] text-[40px] font-black" opacity="opacity-[0.02]" />
      </div>

      {/* Visual divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="relative mb-24 max-w-3xl">
          <span className="section-num-huge absolute -top-16 left-0 text-white/[0.02]">
            03
          </span>
          <div className="relative pt-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block mb-2">
              // PRODUCTION CATALOG
            </span>
            <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
              Featured Projects
            </h2>
            <p className="font-sans text-slate-400 text-xs md:text-sm max-w-xl mt-4 font-light leading-relaxed">
              Relational systems, secure database administration configurations, and cross-platform integrations structured as editorial design chapters.
            </p>
          </div>
        </div>

        {/* PROJECTS BOLD EDITORIAL CHAPTERS (Split-screens, layered rectangular frames, high contrast) */}
        <div className="space-y-40">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch border-t border-white/10 pt-16 relative group"
              id={`project-chapter-${project.id}`}
            >
              
              {/* Massive Oversized Project Number on Background - SCALED UP */}
              <div className="absolute -top-12 right-0 font-sans font-black text-[180px] md:text-[300px] lg:text-[420px] leading-none text-white/[0.01] select-none pointer-events-none group-hover:text-white/[0.022] transition-colors duration-500 uppercase tracking-tighter">
                CH.{project.num}
              </div>

              {/* LEFT SIDE: Project details and requirements (7 columns) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  
                  {/* Categorization & Badges */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="font-mono text-[9px] uppercase tracking-widest border border-white/20 bg-white/[0.03] text-slate-300 py-1 px-2.5">
                      {project.badgeText}
                    </span>
                    <span className="text-slate-600">//</span>
                    <span className="font-sans text-xs text-slate-400 uppercase tracking-widest">
                      {project.type}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase mb-6 flex items-center gap-3">
                    <span className="font-mono text-xs text-slate-500 font-light border border-white/10 px-2 py-0.5">CH.{project.num}</span>
                    <span className="group-hover:text-celestial-cyan transition-colors duration-300">{project.name}</span>
                  </h3>

                  {/* Core Description */}
                  <p className="font-sans text-slate-300 text-sm leading-relaxed mb-8 font-light">
                    {project.desc}
                  </p>

                  {/* Challenge & Responsibility Grid with strong black-and-white contrast */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-5 bg-white/[0.01] border border-white/5 relative">
                    <TechFrame className="absolute inset-0" label={`SYS.METRICS.${project.num}`} />
                    
                    <div className="pt-2">
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block mb-2 font-semibold">
                        [ CHALLENGE ]
                      </span>
                      <p className="font-sans text-[11px] text-slate-300 leading-relaxed font-light">
                        {project.problem}
                      </p>
                    </div>
                    <div className="pt-2">
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block mb-2 font-semibold">
                        [ ROLE / RESPONSIBILITY ]
                      </span>
                      <p className="font-sans text-[11px] text-slate-300 leading-relaxed font-light">
                        {project.role}
                      </p>
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="mb-8">
                    <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block mb-4">
                      // CORE FEATURES IMPLEMENTED
                    </span>
                    <ul className="space-y-3">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-xs text-slate-300 font-light leading-relaxed">
                          <span className="w-1.5 h-1.5 border border-white/30 bg-white/15 shrink-0 mt-1.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Tech specifications and project links */}
                <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, tIdx) => (
                      <span key={tIdx} className="font-mono text-[9px] text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-sm border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-6">
                    {project.github ? (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-xs font-bold text-white hover:text-celestial-cyan transition-colors flex items-center gap-1.5 border-b border-white hover:border-celestial-cyan pb-0.5"
                        id={`project-git-${project.id}`}
                      >
                        <Github size={13} />
                        <span>SOURCE CODE</span>
                        <ArrowUpRight size={11} className="opacity-60" />
                      </a>
                    ) : (
                      <span className="font-mono text-[9px] text-slate-500 italic select-none uppercase tracking-wider">
                        PROPRIETARY BLUEPRINT
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* RIGHT SIDE: Bold Layered Rectangular Frame with Integrated Mockup Screenshots (5 columns) */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 border border-white/10 bg-[#0c0d12] relative overflow-hidden min-h-[320px]">
                {/* Tech frame labels */}
                <TechFrame className="absolute inset-0" label={`SYS.DIAG.${project.num} // INTEGRATED_SCREEN`} />
                
                {/* Visual Layered Rectangular frame depth representing "Layered Rectangular Frames" */}
                <div className="absolute inset-2 border border-dashed border-white/5 pointer-events-none" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/10" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-white/10" />

                {/* Simulated integrated screen / UI mockup panel */}
                <div className="space-y-6 relative z-10 pt-4">
                  
                  {/* Crop Title Header */}
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-celestial-cyan animate-pulse" />
                      <span className="font-mono text-[10px] text-white/80 uppercase tracking-widest">{project.visualSchema.mockupTitle}</span>
                    </div>
                    <span className="font-mono text-[8px] text-slate-600">[ SCREEN_MOCK_0{project.num} ]</span>
                  </div>

                  {/* Simulated interactive component / viewport inside layered frames */}
                  <div className="border border-white/10 bg-[#050507] p-4 rounded-sm shadow-inner">
                    <div className="font-mono text-[9px] text-celestial-cyan font-semibold mb-2 flex items-center gap-1.5">
                      <CheckSquare size={10} />
                      <span>{project.visualSchema.mockupScreen}</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 mb-3" />
                    
                    {/* Diagnostic list inside mockup */}
                    <div className="space-y-1.5 font-mono text-[9px] text-slate-500">
                      {project.visualSchema.lines.slice(0, 3).map((line, lIdx) => (
                        <div key={lIdx} className="truncate">
                          &gt; {line}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flow Lines details */}
                  <div className="space-y-0 font-mono text-[9px] text-slate-500">
                    <span className="text-[8px] uppercase tracking-wider text-slate-600 block mb-1">// SCHEMA ARCHITECTURE LINES</span>
                    {project.visualSchema.lines.slice(3).map((line, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2 border-l border-white/20 pl-3 py-0">
                        <span className="font-light font-mono text-[9px] leading-tight whitespace-pre">{line}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Base project metadata */}
                <div className="pt-4 border-t border-white/5 text-[8px] text-slate-600 flex justify-between relative z-10">
                  <span>STATUS: {project.status || 'In Development'}</span>
                  <span>{project.scope || project.badgeText}</span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
