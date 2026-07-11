import React, { useState } from 'react';
import { Mail, Github, Linkedin, Facebook, Instagram, Send, Check } from 'lucide-react';
import { TechFrame, HangingChain, VerticalJapaneseText } from './AbstractElements';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!formData.name || !formData.email || !formData.message) return;

  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    const response = await fetch('https://formspree.io/f/mkodwoqb', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/eijkim-maulit-334306373/", username: "Eijkim Maulit", icon: <Linkedin size={14} /> },
    { name: "GitHub", url: "https://github.com/eaua008", username: "eaua008", icon: <Github size={14} /> },
    { name: "Facebook", url: "https://www.facebook.com/eaua008/", username: "Eijkim Maulit", icon: <Facebook size={14} /> },
    { name: "Instagram", url: "https://www.instagram.com/eaua008/", username: "eaua008", icon: <Instagram size={14} /> }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-anime-black text-slate-100 min-h-[90vh] flex items-center font-sans">
      
      {/* 
        MINIMAL FINAL COMPOSITION:
        Enlarged and scaled up. Large empty space, one dominant abstract structure, 
        slow-moving geometric lines, and complex celestial geometry.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Alignment Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* DOMINANT CELESTIAL STRUCTURE (Slow rotating mathematical wheel) - SCALED UP & HIGHLY VISIBLE ROTATION */}
        <div className="absolute right-[-15%] bottom-[-20%] w-[950px] h-[950px] rounded-full border border-white/10 flex items-center justify-center animate-[spin_50s_linear_infinite]">
          <div className="absolute w-[800px] h-[800px] rounded-full border border-dashed border-white/10 flex items-center justify-center relative">
            
            {/* Edge Indicators for extreme rotation visibility */}
            <div className="absolute top-0 w-3 h-3 bg-white/35 rotate-45" />
            <div className="absolute bottom-0 w-3 h-3 bg-white/35 rotate-45" />
            <div className="absolute left-0 w-3 h-3 bg-white/35 rotate-45" />
            <div className="absolute right-0 w-3 h-3 bg-white/35 rotate-45" />

            <div className="absolute w-[600px] h-[600px] rounded-full border border-white/10 flex items-center justify-center">
              <div className="absolute w-[450px] h-[450px] rounded-full border border-dashed border-white/15 flex items-center justify-center relative">
                {/* Crossed mathematical degree scales */}
                <div className="absolute w-full h-[1.5px] bg-white/20" />
                <div className="absolute h-full w-[1.5px] bg-white/20" />
                <div className="absolute w-full h-[1px] bg-white/10 rotate-45" />
                <div className="absolute w-full h-[1px] bg-white/10 -rotate-45" />
                <div className="absolute w-full h-[1px] bg-white/10 rotate-12" />
                <div className="absolute w-full h-[1px] bg-white/10 -rotate-12" />
              </div>
            </div>
          </div>
          <span className="absolute top-12 font-mono text-[9px] text-slate-300 font-bold uppercase tracking-widest bg-anime-black border border-white/10 px-2 py-0.5">FINAL_CELESTIAL_COORD</span>
          <span className="absolute bottom-12 font-mono text-[9px] text-slate-300 font-bold uppercase tracking-widest bg-anime-black border border-white/10 px-2 py-0.5">MATRIX_LOCK_SEC_07</span>
        </div>

        {/* Balancing secondary top-left mathematical drawing - ROTATING */}
        <div className="absolute left-[-5%] top-[-5%] w-[450px] h-[450px] rounded-full border border-white/10 hidden lg:flex items-center justify-center animate-[spin_65s_linear_infinite]">
          <div className="w-[320px] h-[320px] rounded-full border border-dashed border-white/10 flex items-center justify-center relative">
            <div className="absolute top-0 w-2 h-2 bg-white/25 rotate-45" />
            <div className="absolute bottom-0 w-2 h-2 bg-white/25 rotate-45" />
            <div className="w-[180px] h-[180px] rounded-full border border-white/10" />
          </div>
          <div className="absolute w-full h-[1.5px] bg-white/15 rotate-30" />
          <div className="absolute w-full h-[1.5px] bg-white/15 -rotate-30" />
        </div>

        {/* Abstract structural chain layouts */}
        <HangingChain className="absolute left-[10%] -top-20" linksCount={22} opacity="opacity-15" />
        <HangingChain className="absolute right-[20%] -top-12" linksCount={24} opacity="opacity-15" />
        <VerticalJapaneseText text="連絡窓口案内" className="absolute left-8 top-16 text-[36px] font-black" opacity="opacity-[0.03]" />

        {/* Thin vertical alignment ruler */}
        <div className="absolute right-1/3 top-0 h-full w-[1px] bg-white/[0.015]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">
        
        {/* Section Header */}
        <div className="relative mb-24 max-w-3xl">
          <span className="section-num-huge absolute -top-16 left-0 text-white/[0.02]">
            06
          </span>
          <div className="relative pt-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block mb-2">
              // CONTACT ROUTE
            </span>
            <h2 className="font-sans text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
              Get in Touch
            </h2>
            <p className="font-sans text-slate-400 text-xs md:text-sm max-w-xl mt-4 font-light leading-relaxed">
              Have an internship opportunity, project collaboration, or technical inquiry? Drop me a message and let's construct secure systems together.
            </p>
          </div>
        </div>

        {/* Split Screen Composition (Asymmetric) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct channels and social networks (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-white/10 bg-[#0c0d12]/60 p-6 md:p-8 backdrop-blur-sm relative">
              <TechFrame className="absolute inset-0" label="CONTACT_CHANNELS" />
              
              <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-white mb-6 pb-2 border-b border-white/5 mt-2">
                Primary Channels
              </h3>

              <div className="space-y-4">
                <a 
                  href="mailto:eaua008@gmail.com" 
                  className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/15 transition-all duration-300 group"
                  id="contact-email-link"
                >
                  <div className="p-3 border border-white/10 bg-white/5 text-slate-400 group-hover:text-white transition-colors">
                    <Mail size={14} />
                  </div>
                  <div>
                    <span className="font-mono text-[8px] text-slate-500 uppercase tracking-widest block mb-0.5">Email</span>
                    <span className="font-sans text-xs text-slate-300 group-hover:text-white transition-colors tracking-wide">
                      eaua008@gmail.com
                    </span>
                  </div>
                </a>
              </div>

              {/* Social Channels arranged in Swiss grid */}
              <div className="mt-8">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block mb-4">
                  Professional Networks
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2.5 p-3 border border-white/5 bg-white/[0.005] hover:bg-white/[0.03] hover:border-white/15 transition-all duration-300 text-slate-400 hover:text-white group text-xs"
                      title={link.name}
                      aria-label={link.name}
                      id={`social-link-${link.name.toLowerCase()}`}
                    >
                      <div className="text-slate-600 group-hover:text-white transition-colors">
                        {link.icon}
                      </div>
                      <div className="truncate">
                        <span className="font-mono text-[8px] text-slate-600 block leading-none mb-0.5 uppercase">{link.name}</span>
                        <span className="truncate block font-sans text-[10px] text-slate-300 group-hover:text-white">{link.username}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-white/10 p-5 bg-[#0c0d12]/20 text-[10px] font-mono text-slate-500 leading-relaxed">
              <span className="text-slate-400 uppercase block mb-1">DATA INTEGRITY // ENCRYPTION</span>
              Secure parameter checking is enforced. All form submissions are handled within standard client security contexts.
            </div>
          </div>

          {/* Right Column: Contact form (7 cols) */}
          <div className="lg:col-span-7 border border-white/10 bg-[#0c0d12]/40 p-6 md:p-8 relative">
            <TechFrame className="absolute inset-0" label="MESSAGE_GATEWAY" />
            
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-white mb-6 mt-2">
              Write Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="form-name" className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    className="w-full bg-white/[0.02] border border-white/10 focus:border-white/40 rounded-sm px-4 py-3 font-sans text-xs text-white focus:outline-none transition-all"
                    placeholder="e.g. Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="form-email" className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    className="w-full bg-white/[0.02] border border-white/10 focus:border-white/40 rounded-sm px-4 py-3 font-sans text-xs text-white focus:outline-none transition-all"
                    placeholder="e.g. jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="form-subject" className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="form-subject"
                  className="w-full bg-white/[0.02] border border-white/10 focus:border-white/40 rounded-sm px-4 py-3 font-sans text-xs text-white focus:outline-none transition-all"
                  placeholder="e.g. Internship Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="form-message" className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block mb-1.5">
                  Message Details
                </label>
                <textarea
                  id="form-message"
                  rows={5}
                  className="w-full bg-white/[0.02] border border-white/10 focus:border-white/40 rounded-sm px-4 py-3 font-sans text-xs text-white focus:outline-none transition-all resize-none"
                  placeholder="Briefly describe your requirements or inquiry details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white hover:bg-transparent hover:text-white border border-white text-anime-black font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                disabled={isSubmitting}
                id="form-submit-btn"
              >
                {isSubmitting ? (
                  <span>SENDING MESSAGE...</span>
                ) : (
                  <>
                    <Send size={12} />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-white p-4 border border-white/10 bg-white/[0.02]" id="form-success-banner">
                  <Check size={12} />
                  <span>Your message has been delivered. I will respond to you shortly!</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-red-400 p-4 border border-red-400/20 bg-red-400/[0.02]" id="form-error-banner">
                <span>Something went wrong. Please try again or email me directly.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
