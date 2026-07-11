import { Shield, GraduationCap, Users, Terminal } from 'lucide-react';
import { TechFrame, VerticalJapaneseText } from './AbstractElements';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="text-black" size={16} />,
      title: "Academic Path",
      desc: "Computer Science student at Mapúa Malayan Colleges Mindanao (MMCM) focusing on database architectures and secure systems."
    },
    {
      icon: <Shield className="text-black" size={16} />,
      title: "Database Administration & Security",
      desc: "Deeply interested in secure entity-relationship design, Row-Level Security (RLS), access controls, and database administration."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-32 relative overflow-hidden bg-anime-light text-anime-black font-sans"
    >
      {/* 
        ARCHITECTURAL VISUAL COMPOSITION:
        Floating rectangular structures, impossible architecture, suspended platforms,
        thin connecting lines, monochrome perspective, and layered depth.
      */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        
        {/* Editorial Structural Grid Guides */}
        <div className="absolute left-12 top-0 h-full w-[1px] bg-black/[0.05]" />
        <div className="absolute left-28 top-0 h-full w-[1px] bg-black/[0.05]" />
        <div className="absolute left-44 top-0 h-full w-[1px] bg-black/[0.02]" />
        <div className="absolute right-1/4 top-0 h-full w-[1px] bg-black/[0.04]" />
        <div className="absolute right-12 top-0 h-full w-[1px] bg-black/[0.03]" />
        <div className="absolute top-[12%] left-0 w-full h-[1px] bg-black/[0.04]" />
        <div className="absolute top-[35%] left-0 w-full h-[1px] bg-black/[0.02]" />
        <div className="absolute top-[65%] left-0 w-full h-[1px] bg-black/[0.02]" />
        <div className="absolute top-[82%] left-0 w-full h-[1px] bg-black/[0.04]" />
        
        {/* Added dynamic mathematical compass overlay in background - SCALED UP & CLEARLY ROTATING */}
        <div className="absolute left-[-10%] top-[40%] w-[600px] h-[600px] rounded-full border border-black/[0.06] hidden lg:flex items-center justify-center animate-[spin_50s_linear_infinite]">
          <div className="w-[480px] h-[480px] rounded-full border border-dashed border-black/[0.04] flex items-center justify-center">
            <div className="w-[340px] h-[340px] rounded-full border border-black/[0.05] flex items-center justify-center relative">
              {/* Intersecting technical crosshair spokes that rotate visibly */}
              <div className="absolute w-full h-[1px] bg-black/[0.06]" />
              <div className="absolute h-full w-[1px] bg-black/[0.06]" />
              <div className="absolute w-full h-[1px] bg-black/[0.04] rotate-45" />
              <div className="absolute w-full h-[1px] bg-black/[0.04] -rotate-45" />
              
              {/* Rotating geometric markers to make rotation highly noticeable */}
              <div className="absolute top-0 w-2 h-2 bg-black/[0.12] -translate-y-1 rotate-45" />
              <div className="absolute bottom-0 w-2 h-2 bg-black/[0.12] translate-y-1 rotate-45" />
              <div className="absolute left-0 w-2 h-2 bg-black/[0.12] -translate-x-1 rotate-45" />
              <div className="absolute right-0 w-2 h-2 bg-black/[0.12] translate-x-1 rotate-45" />
              
              <div className="w-[200px] h-[200px] rounded-full border border-dashed border-black/[0.04] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-black/[0.08] flex items-center justify-center">
                  <span className="font-mono text-[7px] text-slate-500 font-extrabold uppercase">CORE_AXIS</span>
                </div>
              </div>
            </div>
          </div>
          {/* Degree and label coordinates around the perimeter that rotate */}
          <span className="absolute top-4 font-mono text-[8px] text-slate-500 font-bold uppercase tracking-widest">STRUCT_VECTOR_L_00</span>
          <span className="absolute bottom-4 font-mono text-[8px] text-slate-500 font-bold uppercase tracking-widest">STRUCT_VECTOR_L_180</span>
          <span className="absolute left-4 font-mono text-[8px] text-slate-500 font-bold uppercase tracking-widest">L_90_W</span>
          <span className="absolute right-4 font-mono text-[8px] text-slate-500 font-bold uppercase tracking-widest">L_270_E</span>
        </div>

        {/* 
          Background Architectural Perspectives:
          Enlarged and scaled up. Nested borders and skewed rectangular planes 
          to render a high-end, anime-inspired architectural grid of impossible platforms.
        */}
        <div className="absolute right-[-5%] top-[8%] w-[680px] h-[850px] opacity-[0.05] hidden xl:block" style={{ perspective: '1200px' }}>
          
          {/* Main Diagonal Projection Lines */}
          <div className="absolute top-0 left-0 w-[180%] h-[1px] bg-black origin-top-left rotate-[32deg]" />
          <div className="absolute top-1/3 left-0 w-[180%] h-[1px] bg-black origin-top-left rotate-[32deg]" />
          <div className="absolute top-2/3 left-0 w-[180%] h-[1px] bg-black origin-top-left rotate-[32deg]" />
          
          {/* Floating Platform A (Top, skewed) */}
          <div className="absolute top-[8%] left-[25%] w-80 h-20 border border-black bg-white/20 transform rotate-x-[45deg] rotate-z-[-20deg] shadow-md flex items-center justify-between px-5">
            <span className="font-mono text-[9px] text-black font-extrabold">LEVEL_03 // CELESTIAL_ROOF</span>
            <span className="font-mono text-[9px] text-black">ALT: 380m // STABLE</span>
          </div>
 
          {/* Thin Vertical Structural Connectors (Suspension wires scaled up) */}
          <div className="absolute top-[15%] left-[30%] w-[1px] h-[250px] bg-black border-dashed border-l" />
          <div className="absolute top-[15%] left-[50%] w-[1px] h-[250px] bg-black border-dashed border-l" />
          <div className="absolute top-[15%] left-[75%] w-[1px] h-[250px] bg-black border-dashed border-l" />
          <div className="absolute top-[15%] left-[90%] w-[1px] h-[250px] bg-black border-dashed border-l" />
 
          {/* Floating Platform B (Middle, offset skew) - Scaled Up */}
          <div className="absolute top-[38%] left-[8%] w-96 h-24 border border-black bg-white/40 transform rotate-x-[45deg] rotate-z-[-20deg] shadow-lg flex flex-col justify-between p-4">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[9px] text-black font-extrabold uppercase tracking-wider">PLATFORM_SEC_A_CORE</span>
              <span className="font-mono text-[8px] text-black/80 font-bold">SYS.VERIFY // SECURE_LOCK</span>
            </div>
            <div className="w-full h-[1px] bg-black/10" />
            <span className="font-mono text-[8px] text-black/50">COORD_X: 39.204.119 // DB_NODE_MAIN_01</span>
          </div>
 
          {/* Connected Floating Platform C (Lower-right, deeper shadow) - Scaled Up */}
          <div className="absolute top-[65%] left-[35%] w-80 h-20 border border-black bg-black/5 transform rotate-x-[45deg] rotate-z-[-20deg] shadow-sm flex items-center justify-between px-6">
            <span className="font-mono text-[9px] text-black tracking-widest uppercase font-bold">IMPOSSIBLE_GEO_BASE</span>
            <span className="font-mono text-[8px] text-slate-500">SYS_0x94</span>
          </div>
 
          {/* Ground Grid projection - Scaled Up */}
          <div className="absolute bottom-6 left-[15%] w-64 h-64 border border-dashed border-black/30 rounded-none transform rotate-x-[60deg] rotate-z-[-45deg] opacity-60 flex items-center justify-center">
            <div className="w-40 h-40 border border-dashed border-black/30 flex items-center justify-center">
              <div className="w-20 h-20 border border-black/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Japanese vertical typography styled in high contrast with the clean light background */}
      <VerticalJapaneseText 
        text="構造設計書概要" 
        className="absolute right-8 top-16 text-[42px] font-black pointer-events-none select-none hidden md:block" 
        opacity="opacity-[0.06]" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Asymmetric Section Title block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20 items-end">
          <div className="lg:col-span-8 relative">
            <span className="section-num-huge absolute -top-16 left-0 text-black/[0.05]">
              01
            </span>
            <div className="relative pt-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block mb-2">
                // ARCHITECTURAL DOSSIER
              </span>
              <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tight text-anime-black uppercase">
                About Me
              </h2>
            </div>
          </div>
          <div className="lg:col-span-4 border-l-2 border-black/20 pl-4">
            <p className="font-mono text-xs text-slate-500 uppercase tracking-wider">
              Davao City, Philippines // Database Trajectory
            </p>
          </div>
        </div>

        {/* Narrative & Highlights split screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Narrative description (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-sans text-sm md:text-base leading-relaxed font-light text-slate-800">
              I am a Computer Science student currently enrolled at Mapúa Malayan Colleges Mindanao (MMCM). I build robust, secure, and highly structured software systems. My entry into programming began with developing client-side applications in Java and C#, which quickly evolved into a passion for back-end efficiency, structured relational modeling, and database management systems.
            </p>
            <p className="font-sans text-sm md:text-base leading-relaxed font-light text-slate-800">
              Rather than standard superficial interfaces, my focus centers on backend data architectures: designing secure entity-relationship structures, programming optimized queries, and enforcing strict data security frameworks. I specialize in applying defense-in-depth principles to relational database administration, preventing logical access exploits, and studying access control patterns.
            </p>
            <p className="font-sans text-sm md:text-base leading-relaxed font-light text-slate-800">
              Currently, my studies and technical training emphasize modern database architectures, query performance optimizations, secure database administration, and application development using robust languages like Java (JavaFX), C# (.NET MAUI), and SQL engines. As the President of our university's computer science Pixel Club, I am committed to standardizing scalable architecture and secure development methodologies among aspiring student engineers.
            </p>

            {/* Architectural structural layout description card */}
            <div className="pt-6">
              <div className="border border-black/10 bg-black/[0.02] p-5 font-mono text-[10px] text-slate-600 space-y-3 relative overflow-hidden">
                <TechFrame className="absolute inset-0" label="STRUCT_FLOW // ZONE_01" />
                <div className="flex justify-between items-center pt-1">
                  <span className="text-black font-semibold block uppercase tracking-wider">// PERSPECTIVE ARCHITECTURE MODEL</span>
                  <span className="text-slate-400 text-[8px]">REF_ID: MMCM_A1</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[9px] pt-1">
                  <div className="border border-black/10 bg-white p-2">
                    <span className="block font-bold text-black uppercase">DATA STRUCTURE</span>
                    <span className="text-[8px] text-slate-500">Relational & Indexed</span>
                  </div>
                  <div className="border border-black/10 bg-white p-2">
                    <span className="block font-bold text-black uppercase">SECURITY LAYER</span>
                    <span className="text-[8px] text-slate-500">Least Privilege Access</span>
                  </div>
                  <div className="border border-black/10 bg-white p-2">
                    <span className="block font-bold text-black uppercase">SYSTEM FLOW</span>
                    <span className="text-[8px] text-slate-500">Strict Serialization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights & Suspended Platform composition (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Architectural Composition Card */}
            <div className="border border-black/10 bg-white p-6 md:p-8 shadow-sm relative overflow-hidden">
              <TechFrame className="absolute inset-0" label="TRAJECTORY_ENGINE_SYS" />

              <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-anime-black mb-6 pb-2 border-b border-black/10 mt-2">
                Core Focus & Experience
              </h3>

              <div className="space-y-6">
                {highlights.map((hl, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="p-2 border border-black/15 bg-slate-50 shrink-0">
                      {hl.icon}
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-anime-black mb-1">
                        {hl.title}
                      </h4>
                      <p className="font-sans text-[11px] text-slate-600 leading-relaxed font-light">
                        {hl.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clear Status Label */}
            <div className="border border-black/10 p-4 flex justify-between items-center text-[10px] font-mono text-slate-600 bg-black/[0.01]">
              <span>CAREER DIRECTION</span>
              <span className="text-black font-semibold uppercase">[ DATABASE ADMINISTRATION / SECURITY ]</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
