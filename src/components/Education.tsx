import { BookOpen, Award } from 'lucide-react';
import { TechFrame, VerticalJapaneseText } from './AbstractElements';

export default function Education() {
  const educationList = [
    {
      school: "Mapúa Malayan Colleges Mindanao (MMCM)",
      degree: "Bachelor of Science in Computer Science",
      timeline: "2025 — PRESENT (Incoming 2nd Year)",
      focus: "Database Management Systems, Software Engineering, & Systems Security",
      courses: [
        "Data Structures and Algorithms",
        "Relational Database Administration & Security",
        "Object-Oriented Programming (Java/C#)",
        "Systems Programming (C++)",
        "Discrete Structures"
      ]
    },
    {
      school: "STI Colleges General Santos Inc.",
      degree: "Senior High School Graduate - Mobile Application and Website Development Strand",
      timeline: "2023 — 2025",
      focus: "Foundational software development, electronics, and algorithms",
      courses: [
        "Java",
        "Html",
        "CSS",
        "Android Studio",
        "C#",
        ".NET Maui",
        "SQLite"
      ]
    }
  ];

  const credentials = [
    {
      issuer: "MICROSOFT CORPORATION",
      name: "Microsoft Office Specialist: Excel Associate",
      status: "Verified Achievement",
      desc: "Demonstrates practical competence in structured worksheets, table indexing, logical formulas execution, and data auditing."
    }
  ];

  return (
    <section 
      id="education" 
      className="py-32 relative overflow-hidden bg-anime-light text-anime-black font-sans"
    >
      
      {/* 
        ABSTRACT ACADEMIC COMPOSITION:
        Large circular structures, geometric diagrams, architectural linework,
        minimal celestial symbols, and strong typography.
      */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Architectural grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Large academic/geometric circular structures - SCALED UP & ROTATING */}
        <div className="absolute left-[-10%] top-[10%] w-[750px] h-[750px] rounded-full border border-black/[0.08] flex items-center justify-center animate-[spin_85s_linear_infinite]">
          <div className="w-[600px] h-[600px] rounded-full border border-dashed border-black/[0.06] flex items-center justify-center relative">
            
            {/* Added visible spokes and markers */}
            <div className="absolute w-[98%] h-[1px] bg-black/[0.06]" />
            <div className="absolute h-[98%] w-[1px] bg-black/[0.06]" />
            <div className="absolute top-0 w-2.5 h-2.5 bg-black/[0.12] rotate-45 -translate-y-1" />
            <div className="absolute bottom-0 w-2.5 h-2.5 bg-black/[0.12] rotate-45 translate-y-1" />

            <div className="w-[450px] h-[450px] rounded-full border border-black/[0.05] flex items-center justify-center">
              <div className="w-[300px] h-[300px] rounded-full border border-dashed border-black/[0.06] flex items-center justify-center" />
            </div>
          </div>
        </div>

        {/* Large geometric measurement/compass drawing on the right side - SCALED UP & ROTATING COUNTER-CLOCKWISE */}
        <div className="absolute right-[-5%] bottom-[-5%] w-[580px] h-[580px] rounded-full border border-black/[0.08] hidden lg:flex items-center justify-center animate-[spin_55s_linear_infinite_reverse]">
          {/* SVG architectural lines and math coordinates representing scholastic mapping */}
          <svg viewBox="0 0 100 100" className="w-full h-full text-black/[0.1] fill-none stroke-current stroke-[0.25]">
            <circle cx="50" cy="50" r="48" />
            <circle cx="50" cy="50" r="38" strokeDasharray="1,1" />
            <circle cx="50" cy="50" r="28" />
            <line x1="0" y1="50" x2="100" y2="50" />
            <line x1="50" y1="0" x2="50" y2="100" />
            <line x1="15" y1="15" x2="85" y2="85" strokeDasharray="0.5,0.5" />
            <line x1="85" y1="15" x2="15" y2="85" strokeDasharray="0.5,0.5" />
            <polygon points="50,15 85,50 50,85 15,50" />
            <polygon points="50,5 95,50 50,95 5,50" strokeDasharray="1,1" />
          </svg>
          
          {/* Subtle celestial compass coordinates */}
          <span className="absolute top-[45%] font-mono text-[9px] text-slate-700 font-extrabold tracking-widest uppercase bg-anime-light px-2 py-0.5 border border-black/10">SCHOLASTIC_AXIS_PRIMARY_TRUE</span>
        </div>

        {/* Minimal architectural linework lines */}
        <div className="absolute left-16 top-0 h-full w-[1px] bg-black/[0.04]" />
        <div className="absolute left-28 top-0 h-full w-[1px] bg-black/[0.04]" />
        <div className="absolute left-44 top-0 h-full w-[1px] bg-black/[0.015]" />
        <div className="absolute right-[20%] top-0 h-full w-[1px] bg-black/[0.04]" />
        <div className="absolute right-12 top-0 h-full w-[1px] bg-black/[0.02]" />

        <VerticalJapaneseText text="学歴証明書体系" className="absolute left-4 top-24 text-[36px] font-black" opacity="opacity-[0.05]" />
        <VerticalJapaneseText text="技能認証書" className="absolute right-4 top-24 text-[36px] font-black" opacity="opacity-[0.04]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24 items-end">
          <div className="lg:col-span-8 relative">
            <span className="section-num-huge absolute -top-16 left-0 text-black/[0.03]">
              05
            </span>
            <div className="relative pt-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block mb-2">
                // SCHOLASTIC RECORdS & CREdENTIALS
              </span>
              <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tight text-anime-black uppercase">
                Education
              </h2>
            </div>
          </div>
          <div className="lg:col-span-4 border-l-2 border-black/10 pl-4">
            <p className="font-mono text-xs text-slate-500 uppercase tracking-wider leading-relaxed">
              Academic paths, structural coursework, and professional technical qualifications.
            </p>
          </div>
        </div>

        {/* Asymmetric layout with Degrees on left and Certifications on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Degrees Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-3 border-b border-black/10 pb-4">
              <BookOpen className="text-black" size={15} />
              <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-anime-black">
                Academic Degrees
              </h3>
            </div>

            <div className="space-y-12">
              {educationList.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="relative group border-l-2 border-black/10 pl-6 hover:border-black transition-all duration-300"
                  id={`edu-degree-card-${idx}`}
                >
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4">
                    <h4 className="font-sans text-base font-bold text-anime-black uppercase tracking-tight group-hover:text-slate-800 transition-colors">
                      {edu.school}
                    </h4>
                    <span className="font-mono text-[10px] text-slate-600 bg-black/[0.03] border border-black/[0.05] py-0.5 px-2.5 font-medium">
                      {edu.timeline}
                    </span>
                  </div>

                  <p className="font-sans text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-3">
                    {edu.degree}
                  </p>

                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-light mb-6">
                    <span className="font-semibold uppercase text-slate-500 font-mono text-[9px] mr-1">[ MAIN FOCUS ]</span> {edu.focus}
                  </p>

                  <div>
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block mb-3">
                      // STRUCTUREd COURSEWORK MATRiX
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, cIdx) => (
                        <span 
                          key={cIdx} 
                          className="font-mono text-[10px] text-slate-700 bg-white border border-black/10 px-2.5 py-1 rounded-sm shadow-sm hover:border-black/30 transition-colors duration-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="flex items-center gap-3 border-b border-black/10 pb-4">
              <Award className="text-black" size={15} />
              <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-anime-black">
                Verified Credentials
              </h3>
            </div>

            <div className="space-y-8">
              {credentials.map((cred, idx) => (
                <div 
                  key={idx} 
                  className="border border-black/15 bg-white p-6 shadow-sm relative group"
                  id={`edu-cert-card-${idx}`}
                >
                  {/* Subtle technical framing targets inside light-themed card */}
                  <div className="absolute top-0 left-0 w-3 h-[1px] bg-black/40" />
                  <div className="absolute top-0 left-0 h-3 w-[1px] bg-black/40" />
                  <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-black/40" />
                  <div className="absolute bottom-0 right-0 h-3 w-[1px] bg-black/40" />
                  
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">
                      {cred.issuer}
                    </span>
                    <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 border ${
                      cred.status === "Verified Achievement" 
                        ? 'border-emerald-500/20 bg-emerald-50/50 text-emerald-700 font-semibold' 
                        : 'border-amber-500/20 bg-amber-50/50 text-amber-700 font-semibold'
                    }`}>
                      {cred.status}
                    </span>
                  </div>

                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-anime-black mb-3">
                    {cred.name}
                  </h4>
                  
                  <p className="font-sans text-[11px] text-slate-600 leading-relaxed font-light">
                    {cred.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
