import React from 'react';

interface HangingChainProps {
  className?: string;
  linksCount?: number;
  rotation?: string;
  opacity?: string;
}

export function HangingChain({ 
  className = '', 
  linksCount = 18, 
  rotation = 'rotate-0',
  opacity = 'opacity-25'
}: HangingChainProps) {
  return (
    <div className={`flex flex-col items-center select-none pointer-events-none ${opacity} ${rotation} ${className}`}>
      {/* Top Anchor anchor point */}
      <div className="w-4 h-1 bg-slate-500 rounded-sm" />
      
      {Array.from({ length: linksCount }).map((_, i) => (
        <div 
          key={i} 
          className="w-2.5 h-6 rounded-full border-2 border-slate-400 -mt-2 bg-[#050507]/80 flex items-center justify-center relative transition-transform duration-500"
          style={{ 
            transform: i % 2 === 0 ? 'rotate(18deg)' : 'rotate(-18deg)',
            boxShadow: 'inset 0 0 4px rgba(255,255,255,0.1)'
          }}
        >
          {/* Inner metallic reflection line */}
          <div className="absolute w-[1px] h-[70%] bg-slate-200/20 top-[15%] left-[20%]" />
          {/* Center link weld join point */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-600/30" />
        </div>
      ))}
    </div>
  );
}

interface MonolithProps {
  className?: string;
  height?: string;
  width?: string;
  delay?: string;
  indicatorActive?: boolean;
}

export function FloatingMonolith({
  className = '',
  height = 'h-[300px]',
  width = 'w-[45px]',
  delay = '0s',
  indicatorActive = false
}: MonolithProps) {
  return (
    <div 
      className={`relative bg-gradient-to-b from-[#0c0d12] to-[#050507] border border-white/10 shadow-2xl transition-all duration-700 hover:border-white/30 hover:-translate-y-2 select-none ${height} ${width} ${className}`}
      style={{ animationDelay: delay }}
    >
      {/* Editorial internal frames */}
      <div className="absolute inset-1 border border-dashed border-white/5 flex flex-col justify-between p-2">
        <span className="font-mono text-[8px] text-slate-600 tracking-wider">SYS_SEC</span>
        <div className="w-full h-[1px] bg-white/5" />
        <span className="font-mono text-[8px] text-slate-600 text-right">0x9F_STABLE</span>
      </div>

      {/* Extreme top notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[2px] bg-white/40" />

      {/* High-tech Stable Core Indicator instead of glitch */}
      {indicatorActive && (
        <div className="absolute inset-x-0 bottom-2 flex flex-col items-center justify-end space-y-1 z-15">
          <div className="w-1.5 h-1.5 rounded-full bg-celestial-cyan shadow-[0_0_8px_rgba(209,247,255,0.6)] animate-pulse" />
          <span className="font-mono text-[6px] text-celestial-cyan tracking-widest uppercase scale-75">DATA_LINK</span>
        </div>
      )}
    </div>
  );
}

interface TechFrameProps {
  className?: string;
  label?: string;
}

export function TechFrame({ className = '', label = 'ALIGNMENT_GRID_V.01' }: TechFrameProps) {
  return (
    <div className={`absolute pointer-events-none select-none ${className}`}>
      {/* Target Crosshairs corners */}
      <div className="absolute top-0 left-0 w-3 h-[1px] bg-white/30" />
      <div className="absolute top-0 left-0 w-[1px] h-3 bg-white/30" />
      
      <div className="absolute top-0 right-0 w-3 h-[1px] bg-white/30" />
      <div className="absolute top-0 right-0 w-[1px] h-3 bg-white/30" />
      
      <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-white/30" />
      <div className="absolute bottom-0 left-0 w-[1px] h-3 bg-white/30" />
      
      <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-white/30" />
      <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-white/30" />

      {/* Label and tech metrics */}
      <div className="absolute bottom-1 left-2 font-mono text-[7px] text-slate-600 tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
}

interface JapaneseTextProps {
  text: string;
  className?: string;
  opacity?: string;
}

export function VerticalJapaneseText({ text, className = '', opacity = 'opacity-[0.50]' }: JapaneseTextProps) {
  return (
    <div className={`font-sans font-black tracking-widest text-white uppercase select-none pointer-events-none [writing-mode:vertical-rl] text-center animate-breathe ${opacity} ${className}`}>
      {text}
    </div>
  );
}

export function AstronomicalRuler({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-between pointer-events-none select-none px-6 py-2 border-t border-b border-white/5 bg-white/[0.01] font-mono text-[8px] text-slate-500 tracking-widest ${className}`}>
      <span>DEG: 45° 12' 09"</span>
      <div className="flex gap-2 items-center">
        <span className="w-1 h-1 rounded-full bg-celestial-cyan" />
        <span>SYS.MATRIX.CELESTIAL</span>
      </div>
      <span>ASC_NODE: 182.124</span>
    </div>
  );
}

export function AlignmentGrid() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
      {/* Structural Vertical Guides */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-white/[0.04] vertical-ruler">
        <span className="absolute top-10 left-2 font-mono text-[7px] text-slate-600 tracking-wider">ALIGN_V_L1 // X: 08.0%</span>
        <span className="absolute bottom-10 left-2 font-mono text-[7px] text-slate-600 tracking-wider">GRID_SEC // 0x08</span>
      </div>
      <div className="absolute left-[24%] top-0 bottom-0 w-[1px] bg-white/[0.02] vertical-ruler">
        <span className="absolute top-24 left-2 font-mono text-[7px] text-slate-600 tracking-wider">ALIGN_V_L2 // X: 24.0%</span>
      </div>
      <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/[0.015] border-dashed border-r border-white/[0.01] vertical-ruler">
        <span className="absolute top-[45%] left-2 font-mono text-[7px] text-slate-600 tracking-wider">CENTER_AXIS // X: 50.0%</span>
      </div>
      <div className="absolute left-[76%] top-0 bottom-0 w-[1px] bg-white/[0.02] vertical-ruler">
        <span className="absolute top-24 left-2 font-mono text-[7px] text-slate-600 tracking-wider">ALIGN_V_L3 // X: 76.0%</span>
      </div>
      <div className="absolute left-[92%] top-0 bottom-0 w-[1px] bg-white/[0.04] vertical-ruler">
        <span className="absolute top-10 right-2 font-mono text-[7px] text-slate-600 tracking-wider text-right">ALIGN_V_R1 // X: 92.0%</span>
        <span className="absolute bottom-10 right-2 font-mono text-[7px] text-slate-600 tracking-wider text-right">GRID_SEC // 0x92</span>
      </div>

      {/* Structural Horizontal Baselines */}
      <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-white/[0.025] flex justify-between px-20">
        <span className="font-mono text-[6px] text-slate-600 -translate-y-1.5">GRID_H_Y25 // ELEV: 250m</span>
        <span className="font-mono text-[6px] text-slate-600 -translate-y-1.5">REF_A_342</span>
      </div>
      <div className="absolute top-[75%] left-0 right-0 h-[1px] bg-white/[0.025] flex justify-between px-20">
        <span className="font-mono text-[6px] text-slate-600 -translate-y-1.5">GRID_H_Y75 // ELEV: 750m</span>
        <span className="font-mono text-[6px] text-slate-600 -translate-y-1.5">REF_B_889</span>
      </div>

      {/* Grid intersection markers / crosshairs */}
      <div className="absolute left-[8%] top-[25%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center">
        <div className="w-[1px] h-3 bg-celestial-cyan/25 absolute" />
        <div className="w-3 h-[1px] bg-celestial-cyan/25 absolute" />
      </div>
      <div className="absolute left-[92%] top-[25%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center">
        <div className="w-[1px] h-3 bg-celestial-cyan/25 absolute" />
        <div className="w-3 h-[1px] bg-celestial-cyan/25 absolute" />
      </div>
      <div className="absolute left-[8%] top-[75%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center">
        <div className="w-[1px] h-3 bg-celestial-cyan/25 absolute" />
        <div className="w-3 h-[1px] bg-celestial-cyan/25 absolute" />
      </div>
      <div className="absolute left-[92%] top-[75%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center">
        <div className="w-[1px] h-3 bg-celestial-cyan/25 absolute" />
        <div className="w-3 h-[1px] bg-celestial-cyan/25 absolute" />
      </div>
    </div>
  );
}
