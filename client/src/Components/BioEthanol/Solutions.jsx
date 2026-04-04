import React from 'react';
import { ShieldCheck, Settings, Factory, Wrench } from 'lucide-react';

export default function Solutions() {
  const services = [
    { 
      icon: <ShieldCheck size={28}/>, 
      title: "EPC Solutions", 
      desc: "Comprehensive turnkey project execution. We manage the entire lifecycle from conceptual engineering and feasibility studies to final site handover, ensuring regulatory compliance and optimized CAPEX." 
    },
    { 
      icon: <Settings size={28}/>, 
      title: "Plant Design", 
      desc: "Advanced process engineering using high-fidelity 3D modeling. We focus on spatial optimization, automated workflows, and ergonomic layouts to maximize operational throughput and future-proof your facility." 
    },
    { 
      icon: <Factory size={28}/>, 
      title: "Equipment Supply", 
      desc: "Strategic global procurement of industrial-grade assets. We specialize in high-precision distillation columns, pressurized storage tanks, and heat exchangers sourced from world-class manufacturers." 
    },
    { 
      icon: <Wrench size={28}/>, 
      title: "Commissioning", 
      desc: "Rigorous performance testing and safety validation. Our engineers lead site acceptance tests (SAT) and controlled start-up protocols to ensure your systems reach nameplate capacity safely and efficiently." 
    }
  ];

  return (
    <section className="py-32 px-8 max-w-[90rem] mx-auto w-full bg-[#0c1a10] border-y border-white/5 min-h-[80vh] flex flex-col justify-center">
      <h2 className="font-serif text-4xl md:text-5xl text-white mb-20 text-center">What We Offer</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <div key={i} className="p-10 border border-white/5 bg-[#050905] hover:border-[#1c6b36] transition-colors duration-500 group cursor-pointer relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1c6b36]/5 rounded-bl-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            {/* Icon Wrapper */}
            <div className="text-[#1c6b36] mb-8 group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300 origin-bottom-left relative z-10">
              {service.icon}
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-serif mb-4 text-white relative z-10">
              {service.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed relative z-10">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}