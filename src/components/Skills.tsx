import { Cpu, Database, Layout, Settings, CircleDot } from 'lucide-react';
import { TechFrame, HangingChain, VerticalJapaneseText } from './AbstractElements';

export default function Skills() {
  const categories = [
    {
      num: "01",
      title: "Programming Languages",
      icon: <Cpu size={14} className="text-slate-400" />,
      skills: [
        { name: "Java", desc: "Robust object-oriented software design, JavaFX desktop applications, and municipal database system modules." },
        { name: "C#", desc: "Cross-platform development with .NET MAUI, remote diagnostic components, and backend handlers." },
        { name: "C++", desc: "Systems programming, file stream manipulations, memory safeguards, and console inventory engines." },
        { name: "JavaScript", desc: "Structured frontend user interfaces, React state loops, and client-side form routines." }
      ]
    },
    {
      num: "02",
      title: "Databases",
      icon: <Database size={14} className="text-slate-400" />,
      skills: [
        { name: "SQL", desc: "Relational database design, query structuring, transactional integrity, and key constraints." },
        { name: "SQLite", desc: "Embedding lightweight serverless database files into local applications and session management." },
        { name: "PostgreSQL", desc: "Relational schema modeling, active research in Row-Level Security (RLS), and database audits." },
        { name: "MySQL", desc: "Relational entity mapping, query performance optimization, and basic database procedures." }
      ]
    },
    {
      num: "03",
      title: "Frameworks & Technologies",
      icon: <Layout size={14} className="text-slate-400" />,
      skills: [
        { name: ".NET MAUI", desc: "Cross-platform application layout orchestration and notification dispatch integrations." },
        { name: "JavaFX", desc: "MVC architecture patterns for secure desktop dashboards and administrative grids." },
        { name: "Firebase", desc: "Cloud database synchronization, push notification dispatches, and secure client-side logins." },
        { name: "HTML & CSS", desc: "Semantic DOM structures, fluid layouts, and strict utility layouts via Tailwind." }
      ]
    },
    {
      num: "04",
      title: "Developer Tools",
      icon: <Settings size={14} className="text-slate-400" />,
      skills: [
        { name: "Git & GitHub", desc: "Branching protocols, codebase isolation, code review workflows, and version control." },
        { name: "Linux CLI", desc: "Server terminal shell operations, standard shell commands, and system permissions administration." },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-anime-black text-slate-100 font-sans">
      
      {/* 
        DIAGRAMMATIC COMPOSITION (BACKGROUND & OVERLAYS):
        Concentric circles, mathematical diagrams, technical linework, 
        circular measurement systems, and layered grids. No spaceship dashboards.
      */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Layered Alignment Grid */}
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Massive concentric measurement lines and geometric overlays - SCALED UP & HIGHLY VISIBLE ROTATION */}
        <div className="absolute right-[-15%] top-[-5%] w-[1000px] h-[1000px] rounded-full border border-white/10 opacity-80 flex items-center justify-center animate-[spin_60s_linear_infinite]">
          <div className="w-[850px] h-[850px] rounded-full border border-white/10 flex items-center justify-center relative">
            
            {/* Added extra visible rotating crosshairs */}
            <div className="absolute w-[95%] h-[1px] bg-white/10 rotate-30" />
            <div className="absolute w-[95%] h-[1px] bg-white/10 -rotate-30" />
            <div className="absolute w-[95%] h-[1px] bg-white/10 rotate-60" />
            <div className="absolute w-[95%] h-[1px] bg-white/10 -rotate-60" />

            {/* Solid rotating indicators around the edge */}
            <div className="absolute top-0 w-3 h-3 bg-white/30 rotate-45" />
            <div className="absolute bottom-0 w-3 h-3 bg-white/30 rotate-45" />
            <div className="absolute left-0 w-3 h-3 bg-white/30 rotate-45" />
            <div className="absolute right-0 w-3 h-3 bg-white/30 rotate-45" />

            <div className="w-[700px] h-[700px] rounded-full border border-dashed border-white/10 flex items-center justify-center">
              <div className="w-[500px] h-[500px] rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-[350px] h-[350px] rounded-full border border-dashed border-white/20 flex items-center justify-center relative">
                  {/* Radial measurement markings */}
                  <div className="absolute top-0 bottom-0 w-[1px] bg-white/25" />
                  <div className="absolute left-0 right-0 h-[1px] bg-white/25" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-dashed border-white/15" />
                </div>
              </div>
            </div>
          </div>
          {/* Radian Degree labels on diagram that spin around */}
          <span className="absolute top-12 font-mono text-[9px] text-slate-300 font-bold uppercase tracking-widest bg-[#030303] px-2 py-0.5 border border-white/10">000°_N // RAD_TRUE</span>
          <span className="absolute right-12 font-mono text-[9px] text-slate-300 font-bold uppercase tracking-widest bg-[#030303] px-2 py-0.5 border border-white/10">090°_E // ORIENT_X</span>
          <span className="absolute bottom-12 font-mono text-[9px] text-slate-300 font-bold uppercase tracking-widest bg-[#030303] px-2 py-0.5 border border-white/10">180°_S // AZIMUTH</span>
          <span className="absolute left-12 font-mono text-[9px] text-slate-300 font-bold uppercase tracking-widest bg-[#030303] px-2 py-0.5 border border-white/10">270°_W // COMM_LOCK</span>
        </div>

        {/* Left Side: Scaled-up math/grid lines and complex technical drawings */}
        <div className="absolute left-[-5%] top-[10%] w-[550px] h-[550px] opacity-[0.25] hidden lg:block">
          {/* Cross Coordinate with measuring scale */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-dashed border-white/10 rounded-full flex items-center justify-center">
            <div className="w-40 h-40 border border-white/5 rotate-45 flex items-center justify-center">
              <div className="w-20 h-20 border border-dashed border-white/10 rotate-12" />
            </div>
          </div>
          <div className="absolute top-[32%] left-[10%] font-mono text-[7px] text-slate-500 font-semibold tracking-widest uppercase">SCALE_CALIB: 1:40_RADIAN // STABLE</div>
          <div className="absolute bottom-[32%] right-[10%] font-mono text-[7px] text-slate-500 font-semibold tracking-widest uppercase">COORDS: [53.209 // 22.844]</div>
          <div className="absolute top-8 left-1/2 -translate-x-1/2 font-mono text-[8px] text-slate-600 font-semibold uppercase">[ SYS_COORDINATE_A ]</div>
        </div>

        {/* Vertical division lines */}
        <div className="absolute left-12 top-0 h-full w-[1px] bg-white/[0.03]" />
        <div className="absolute left-28 top-0 h-full w-[1px] bg-white/[0.03]" />
        <div className="absolute left-48 top-0 h-full w-[1px] bg-white/[0.015]" />

        {/* Graphic Hanging Chains - Scaled and offset */}
        <HangingChain className="absolute left-[24%] -top-4" linksCount={22} opacity="opacity-25" />
        <HangingChain className="absolute right-[12%] -top-16" linksCount={30} opacity="opacity-25" />

        <VerticalJapaneseText text="技術スタック体系" className="absolute right-4 bottom-16 text-[32px] font-black" opacity="opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header with oversized background letter */}
        <div className="relative mb-24 max-w-3xl">
          <span className="section-num-huge absolute -top-16 left-0 text-white/[0.02]">
            02
          </span>
          <div className="relative pt-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block mb-2">
              // TECHNICAL REGISTRY & CLASSIFICATION
            </span>
            <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
              Technical Skills
            </h2>
            <p className="font-sans text-slate-400 text-xs md:text-sm max-w-xl mt-4 font-light leading-relaxed">
              An objective, categorized database of my engineering languages, system technologies, and development environments.
            </p>
          </div>
        </div>

        {/* 
          Asymmetrical 2-Column layout:
          Left Column (4 columns on large screens): Giant Abstract Mathematical Diagram
          Right Column (8 columns on large screens): The 4 structured categories of skills
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Large Diagrammatic Composition (4 cols) */}
          <div className="lg:col-span-4 relative border border-white/5 bg-white/[0.01] p-6 md:p-8 hidden lg:block">
            <TechFrame className="absolute inset-0" label="MATH_STRUCT_DIAGRAM" />
            
            <div className="text-center py-6">
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 block mb-6">
                // SYSTEM_MAP_COMPASS
              </span>
              
              {/* Complex SVG Technical/Circular Measurement Drawing */}
              <div className="relative w-full max-w-[240px] aspect-square mx-auto flex items-center justify-center bg-white/[0.01] border border-white/5 rounded-full p-4">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white/10 fill-none stroke-current stroke-[0.25]">
                  {/* Concentric rings */}
                  <circle cx="50" cy="50" r="45" />
                  <circle cx="50" cy="50" r="38" strokeDasharray="1,2" />
                  <circle cx="50" cy="50" r="30" />
                  <circle cx="50" cy="50" r="18" strokeDasharray="3,3" />
                  
                  {/* Angular spokes */}
                  <line x1="50" y1="5" x2="50" y2="95" />
                  <line x1="5" y1="50" x2="95" y2="50" />
                  <line x1="18.2" y1="18.2" x2="81.8" y2="81.8" strokeDasharray="2,2" />
                  <line x1="18.2" y1="81.8" x2="81.8" y2="18.2" strokeDasharray="2,2" />
                  
                  {/* Geometric annotations */}
                  <polygon points="50,5 53,15 47,15" className="fill-white/10" />
                  <rect x="47" y="47" width="6" height="6" />
                </svg>
                
                {/* Embedded typography metrics */}
                <div className="absolute bottom-6 font-mono text-[7px] text-slate-500 tracking-widest uppercase">
                  UNIT: P_R_M
                </div>
              </div>

              {/* Technical indicators and labels below the compass diagram */}
              <div className="mt-8 space-y-2 text-left font-mono text-[8px] text-slate-500 border-t border-white/5 pt-6">
                <div className="flex justify-between">
                  <span>VECTOR_A_D:</span>
                  <span className="text-slate-300 font-semibold">SUCCESS // 0x94</span>
                </div>
                <div className="flex justify-between">
                  <span>MATH_RULER_B:</span>
                  <span className="text-slate-300 font-semibold">CONF_STABLE</span>
                </div>
                <div className="flex justify-between">
                  <span>SYS_CALIB_C:</span>
                  <span className="text-slate-300 font-semibold">182.029 // RAD</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The 4 structured categories of skills (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, catIdx) => (
              <div 
                key={catIdx}
                className="relative p-6 border border-white/[0.04] bg-anime-black/40 flex flex-col justify-between"
                id={`skills-category-${category.num}`}
              >
                {/* Simple structural framing targets, no glowing cards */}
                <TechFrame className="absolute inset-0" label={`SYS.CAT.${category.num}`} />

                <div>
                  {/* Large Category Number and Title */}
                  <div className="flex items-baseline space-x-3 mb-6 pt-2">
                    <span className="font-mono text-lg font-black text-slate-500">
                      {category.num}.
                    </span>
                    <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills list as clean structured rows */}
                  <div className="space-y-4">
                    {category.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="grid grid-cols-1 sm:grid-cols-12 gap-2 pb-3 border-b border-white/5 last:border-none hover:border-white/10 transition-colors duration-200"
                      >
                        <div className="sm:col-span-4 flex items-center">
                          <span className="font-sans text-[11px] font-bold text-slate-200 uppercase tracking-wider">
                            {skill.name}
                          </span>
                        </div>
                        <div className="sm:col-span-8">
                          <p className="font-sans text-[10px] text-slate-400 leading-relaxed font-light">
                            {skill.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-[1px] w-full bg-white/5 mt-4" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
