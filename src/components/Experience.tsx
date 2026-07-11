import { Briefcase, Users, ShieldAlert, Layers } from 'lucide-react';
import { TechFrame, HangingChain, VerticalJapaneseText } from './AbstractElements';

export default function Experience() {
  const experiences = [
    {
      time: '2025',
      role: 'Lead Developer & Database Architect',
      organization: 'Civixia Software Architectures',
      desc: 'Formulated entity-relationship database models, schema check constraints, and secure access paths for academic development capstones. Managed transactional flowcharts and parametrized execution statements to prevent query injections.',
      tags: ['Schema Design', 'Data Flowcharts', 'Query Security']
    }
  ];

  const leadership = [
    {
      time: '2024 — 2025',
      role: 'Pixel Club President',
      organization: 'STI Colleges General Santos City Inc.',
      desc: 'Elected as lead representative to coordinate the students creatives club and basic relational workshops for incoming students.',
      tags: ['Student Leadership']
    }
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-[#07080c] text-slate-100 font-sans">
      
      {/* 
        VERTICAL ABSTRACT COMPOSITION:
        Suspended lines, thin chains, vertical paths, floating dates,
        layered timeline structures, and large negative space.
      */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Alignment grid background */}
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Giant architectural compass background behind timeline - SCALED UP & CLEARLY ROTATING */}
        <div className="absolute left-[30%] top-[20%] w-[900px] h-[900px] rounded-full border border-white/10 flex items-center justify-center animate-[spin_75s_linear_infinite]">
          <div className="w-[750px] h-[750px] rounded-full border border-dashed border-white/10 flex items-center justify-center relative">
            
            {/* Highly visible rotating indicators */}
            <div className="absolute top-0 w-3.5 h-3.5 bg-white/20 rotate-45" />
            <div className="absolute bottom-0 w-3.5 h-3.5 bg-white/20 rotate-45" />
            <div className="absolute left-0 w-3.5 h-3.5 bg-white/20 rotate-45" />
            <div className="absolute right-0 w-3.5 h-3.5 bg-white/20 rotate-45" />

            <div className="w-[550px] h-[550px] rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-[350px] h-[350px] rounded-full border border-dashed border-white/10 flex items-center justify-center relative">
                {/* Visible inner crosshair lines */}
                <div className="absolute h-full w-[1.5px] bg-white/20" />
                <div className="absolute w-full h-[1.5px] bg-white/20" />
                <div className="absolute h-full w-[1px] bg-white/10 rotate-45" />
                <div className="absolute w-full h-[1px] bg-white/10 rotate-45" />
              </div>
            </div>
          </div>
          <div className="absolute h-[110%] w-[1.5px] bg-white/15" />
          <div className="absolute w-[110%] h-[1.5px] bg-white/15" />
          <div className="absolute h-[110%] w-[1px] bg-white/10 rotate-30" />
          <div className="absolute h-[110%] w-[1px] bg-white/10 -rotate-30" />
          
          {/* Rotating text label anchors */}
          <span className="absolute top-6 font-mono text-[9px] text-slate-300 font-extrabold uppercase tracking-widest bg-anime-black border border-white/10 px-2 py-0.5">AXIS_TIMELINE_00</span>
          <span className="absolute bottom-6 font-mono text-[9px] text-slate-300 font-extrabold uppercase tracking-widest bg-anime-black border border-white/10 px-2 py-0.5">AXIS_TIMELINE_180</span>
        </div>

        {/* Floating vertical architectural lines */}
        <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-white/[0.04]" />
        <div className="absolute left-[15.5%] top-0 bottom-0 w-[1px] bg-dashed bg-white/[0.015]" />
        <div className="absolute right-[15%] top-0 bottom-0 w-[1px] bg-white/[0.04]" />
        <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/[0.02]" />
        <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/[0.02]" />

        {/* Suspended chains as graphical timeline accents - SCALED UP */}
        <HangingChain className="absolute left-[14.8%] -top-12" linksCount={48} opacity="opacity-30" />
        <HangingChain className="absolute right-[14.8%] -top-24" linksCount={42} opacity="opacity-25" />
        <HangingChain className="absolute left-1/2 -top-8" linksCount={28} opacity="opacity-20" />
        <HangingChain className="absolute left-8 -top-16" linksCount={32} opacity="opacity-15" />

        <VerticalJapaneseText text="実務経験履歴" className="absolute right-6 top-[20%] text-[36px] font-black" opacity="opacity-[0.03]" />
        <VerticalJapaneseText text="リーダーシップ" className="absolute left-6 bottom-[20%] text-[36px] font-black" opacity="opacity-[0.03]" />
      </div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="relative mb-32 max-w-3xl">
          <span className="section-num-huge absolute -top-16 left-0 text-white/[0.02]">
            04
          </span>
          <div className="relative pt-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block mb-2">
              // CHRONOLOGICAL LOG & MILESTONES
            </span>
            <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
              Experience
            </h2>
            <p className="font-sans text-slate-400 text-xs md:text-sm max-w-xl mt-4 font-light leading-relaxed">
              An architectural layout of my academic engineering projects, technical leadership, and security CTF accomplishments.
            </p>
          </div>
        </div>

        {/* 
          Architectural Timeline Layout:
          Central vertical path with floating dates, layered boxes offset asynchronously,
          incorporating thin structural lines and high-contrast styling.
        */}
        <div className="relative border-l border-white/10 ml-0 md:ml-32 pl-6 md:pl-12 space-y-20 py-8">
          
          {/* Timeline Spine Accents */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none" />
          
          {/* TIMELINE SECTION 1: Academic & Architecture Projects */}
          <div className="relative">
            {/* Structural Marker */}
            <div className="absolute -left-[31px] md:-left-[55px] top-1 bg-anime-black border border-white/20 p-1.5 rounded-none z-10">
              <Briefcase className="text-celestial-cyan" size={12} />
            </div>
            
            <div className="font-mono text-[9px] uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
              <span>[ PHASE 01 ]</span>
              <span className="h-[1px] w-12 bg-white/10" />
              <span>ACADEMIC DEVELOPMENTS</span>
            </div>

            <div className="space-y-16">
              {experiences.map((exp, idx) => (
                <div 
                  key={idx} 
                  className="relative group grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
                  id={`timeline-exp-${idx}`}
                >
                  {/* Floating Date (Left offset on desktop) */}
                  <div className="lg:col-span-3 lg:-translate-x-44 lg:text-right font-mono text-sm font-black text-slate-400 group-hover:text-celestial-cyan transition-colors duration-300">
                    <span className="border border-white/10 bg-white/[0.02] px-3 py-1 text-xs block lg:inline-block">
                      {exp.time}
                    </span>
                  </div>

                  {/* Layered Timeline Card */}
                  <div className="lg:col-span-9 relative p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-300">
                    <TechFrame className="absolute inset-0" label={`EXP.LOG.0${idx + 1}`} />
                    
                    <h4 className="font-sans text-lg font-black text-white uppercase tracking-tight mb-1">
                      {exp.role}
                    </h4>
                    
                    <p className="font-sans text-[11px] text-slate-400 font-medium uppercase tracking-wider mb-4">
                      {exp.organization}
                    </p>
                    
                    <p className="font-sans text-xs text-slate-300 leading-relaxed font-light mb-6">
                      {exp.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="font-mono text-[9px] text-slate-400 bg-[#0c0d12] border border-white/5 py-1 px-2.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TIMELINE SECTION 2: Leadership & Activities */}
          <div className="relative pt-12">
            {/* Structural Marker */}
            <div className="absolute -left-[31px] md:-left-[55px] top-14 bg-anime-black border border-white/20 p-1.5 rounded-none z-10">
              <Users className="text-celestial-cyan" size={12} />
            </div>

            <div className="font-mono text-[9px] uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
              <span>[ PHASE 02 ]</span>
              <span className="h-[1px] w-12 bg-white/10" />
              <span>LEADERSHIP & ENGAGEMENTS</span>
            </div>

            <div className="space-y-16">
              {leadership.map((act, idx) => (
                <div 
                  key={idx} 
                  className="relative group grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
                  id={`timeline-lead-${idx}`}
                >
                  {/* Floating Date (Left offset on desktop) */}
                  <div className="lg:col-span-3 lg:-translate-x-44 lg:text-right font-mono text-sm font-black text-slate-400 group-hover:text-celestial-cyan transition-colors duration-300">
                    <span className="border border-white/10 bg-white/[0.02] px-3 py-1 text-xs block lg:inline-block">
                      {act.time}
                    </span>
                  </div>

                  {/* Layered Timeline Card */}
                  <div className="lg:col-span-9 relative p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-300">
                    <TechFrame className="absolute inset-0" label={`EXP.LOG.0${experiences.length + idx + 1}`} />
                    
                    <h4 className="font-sans text-lg font-black text-white uppercase tracking-tight mb-1">
                      {act.role}
                    </h4>
                    
                    <p className="font-sans text-[11px] text-slate-400 font-medium uppercase tracking-wider mb-4">
                      {act.organization}
                    </p>
                    
                    <p className="font-sans text-xs text-slate-300 leading-relaxed font-light mb-6">
                      {act.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {act.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="font-mono text-[9px] text-slate-400 bg-[#0c0d12] border border-white/5 py-1 px-2.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Minimal technical indicator at base with TechFrame corners */}
        <div className="mt-32 border border-white/5 bg-white/[0.005] p-5 text-center flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <TechFrame className="absolute inset-0" label="VERIFY_SECURITY_AUTH" />
          
          <div className="flex items-center gap-3 text-left pt-2 pl-2">
            <ShieldAlert size={16} className="text-slate-400 shrink-0" />
            <p className="font-sans text-[11px] text-slate-400 font-light">
              All listed milestones are verified with university registration registries and project code structures.
            </p>
          </div>
          <span className="font-mono text-[9px] text-slate-600 uppercase tracking-widest pt-2 pr-2">
            LOG_TRACE // SYS_VERIFIED_2026
          </span>
        </div>

      </div>
    </section>
  );
}
