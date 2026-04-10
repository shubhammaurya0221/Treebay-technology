import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  
  const faqs = [
    {
      q: "What raw materials can your starch plants process?",
      a: "Our plants are highly versatile and custom-engineered to process a variety of raw materials, including Maize (Corn), Tapioca (Cassava), Potato, and Broken Rice, depending on your regional availability and market needs."
    },
    {
      q: "Do you provide turnkey solutions for Liquid Glucose manufacturing?",
      a: "Yes, Treebay Technology offers complete turnkey EPC solutions. We handle everything from process design, equipment fabrication, and plant installation to final commissioning and comprehensive operator training."
    },
    {
      q: "How do you ensure the energy efficiency of the plant?",
      a: "We utilize advanced Multi-Effect Evaporators (MEE), optimized heat recovery systems, and precise PLC/SCADA automation to minimize steam and power consumption, directly lowering your operational utility costs."
    },
    {
      q: "Can you upgrade or expand an existing starch processing plant?",
      a: "Absolutely. We offer comprehensive plant modernization services, integrating new-age automation, advanced hydrocyclone filtration, and capacity expansion modules into your existing infrastructure without excessive downtime."
    },
    {
      q: "How do you manage environmental compliance and liquid waste?",
      a: "Our plant designs incorporate sustainable engineering practices, including integrated Zero Liquid Discharge (ZLD) systems and efficient by-product recovery, ensuring you meet strict environmental regulations while maximizing your overall ROI."
    }
  ];

  return (
    <section className="py-24 px-8 max-w-3xl mx-auto border-b border-[var(--color-border)]">
      <div className="text-center mb-12">
        <h2 className="text-[var(--color-secondary)] text-xs font-semibold tracking-widest uppercase mb-4">
          Support & Queries
        </h2>
        <h3 className="text-4xl font-serif text-[var(--color-text)]">
          Frequently Asked Questions
        </h3>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-[var(--color-border)] pb-4">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full text-left py-4 flex justify-between items-center group"
            >
              <span className={`font-medium text-lg transition-colors ${openIdx === idx ? 'text-[var(--color-text)]' : 'text-[var(--color-muted)] group-hover:text-[var(--color-text-muted)]'}`}>
                {faq.q}
              </span>
              <ChevronDown 
                size={20} 
                className={`text-[var(--color-muted)] transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed pb-4 pr-8 font-light">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}