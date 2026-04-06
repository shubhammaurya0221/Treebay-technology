import React, { useState } from 'react';
import { BarChart, ShieldCheck, ChevronDown, Recycle, Zap } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[var(--color-border)] py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex w-full justify-between items-center text-left focus:outline-none group"
      >
        <span className="font-serif text-lg text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors">{question}</span>
        <ChevronDown className={`text-[var(--color-muted)] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--color-secondary)]' : ''}`} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[var(--color-muted)] font-light text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQAndWhyUs() {
  return (
    <div className="bg-[var(--color-bg-deep)]">
      {/* Section 1: Why Choose Us */}
      <section className="py-24 px-8 max-w-[90rem] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-5xl text-[var(--color-text)] mb-6">Redefining Bio-Energy Infrastructure</h2>
            <p className="text-[var(--color-muted)] font-light leading-relaxed">
              We don't just build plants; we engineer sustainable ecosystems. Our approach combines 
              cutting-edge molecular technology with decades of hands-on EPC experience.
            </p>
          </div>
          <div className="h-px flex-grow bg-linear-to-r from-[var(--color-secondary)]/50 to-transparent hidden md:block mb-4 ml-10"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border-l-2 border-[var(--color-secondary)]/30 pl-6 py-4 hover:border-[var(--color-secondary)] hover:bg-[var(--color-text)]/5 transition-all duration-300 group">
            <BarChart className="text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" size={32}/>
            <h4 className="text-xl text-[var(--color-text)] mb-3 font-serif">Proven Expertise</h4>
            <p className="text-sm text-[var(--color-muted)] font-light leading-relaxed">
              Over 20 years of delivering large-scale green energy infrastructure with a 100% project success rate.
            </p>
          </div>

          <div className="border-l-2 border-[var(--color-secondary)]/30 pl-6 py-4 hover:border-[var(--color-secondary)] hover:bg-[var(--color-text)]/5 transition-all duration-300 group">
            <ShieldCheck className="text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" size={32}/>
            <h4 className="text-xl text-[var(--color-text)] mb-3 font-serif">Global Standards</h4>
            <p className="text-sm text-[var(--color-muted)] font-light leading-relaxed">
              Fully compliant with international safety and environmental norms, including ASME and ISO benchmarks.
            </p>
          </div>

          <div className="border-l-2 border-[var(--color-secondary)]/30 pl-6 py-4 hover:border-[var(--color-secondary)] hover:bg-[var(--color-text)]/5 transition-all duration-300 group">
            <Zap className="text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" size={32}/>
            <h4 className="text-xl text-[var(--color-text)] mb-3 font-serif">High Efficiency</h4>
            <p className="text-sm text-[var(--color-muted)] font-light leading-relaxed">
              Our Multi-Pressure Distillation systems achieve the lowest steam consumption in the industry.
            </p>
          </div>

          <div className="border-l-2 border-[var(--color-secondary)]/30 pl-6 py-4 hover:border-[var(--color-secondary)] hover:bg-[var(--color-text)]/5 transition-all duration-300 group">
            <Recycle className="text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" size={32}/>
            <h4 className="text-xl text-[var(--color-text)] mb-3 font-serif">Zero Discharge</h4>
            <p className="text-sm text-[var(--color-muted)] font-light leading-relaxed">
              Innovative ZLD (Zero Liquid Discharge) solutions ensure your facility meets tomorrow's environmental laws today.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: FAQs */}
      <section className="py-24 px-8 max-w-[50rem] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-[var(--color-text)] mb-4">Technical Insights</h2>
          <p className="text-[var(--color-muted)] text-sm tracking-widest uppercase">Everything you need to know</p>
        </div>
        
        <div className="border-t border-[var(--color-border)]">
          <FAQItem 
            question="What feedstocks can be used?" 
            answer="Our plants are highly adaptable, processing starch-rich grains like broken rice and maize, as well as sugar-based options including sugarcane juice, B-heavy, and C-molasses. Switch-over technology allows seasonal flexibility." 
          />
          <FAQItem 
            question="What capacity do you support?" 
            answer="We design and build turnkey ethanol plants ranging from boutique 30 KLPD facilities up to 500 KLPD single-train industrial complexes, tailored to your feedstock availability." 
          />
          <FAQItem 
            question="What is the timeline for plant setup?" 
            answer="A typical 100 KLPD grain-based ethanol distillery takes roughly 14 to 18 months. This covers the entire lifecycle: site survey, detailed engineering, procurement, fabrication, and final commissioning." 
          />
          <FAQItem 
            question="Do you provide operational training?" 
            answer="Yes. Post-commissioning, we provide intensive on-site training for your technical staff and offer optional AMC (Annual Maintenance Contracts) to ensure optimal plant performance." 
          />
          <FAQItem 
            question="How do you handle waste management?" 
            answer="We integrate advanced evaporation and drying systems (DDGS) to convert distillery spent wash into valuable animal feed, ensuring a Zero Liquid Discharge (ZLD) facility." 
          />
        </div>
      </section>
    </div>
  );
}