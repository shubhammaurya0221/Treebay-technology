import React, { useState } from 'react';
import { ChevronDown} from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
  {
    q: "What types of bio-methanol plants do you design?",
    a: "We specialize in turnkey EPC solutions for bio-methanol plants based on biomass gasification and syngas conversion technologies, including full integration of synthesis and purification systems."
  },
  {
    q: "Do you handle both process engineering and plant construction?",
    a: "Yes, we provide end-to-end EPC services — from feasibility studies and process design to procurement, construction, and commissioning."
  },
  {
    q: "What is the typical project timeline?",
    a: "Depending on plant capacity and feedstock type, projects typically range from 14 to 18 months from design to commissioning."
  },
  {
    q: "Do you provide performance guarantees?",
    a: "Yes, we ensure strict performance guarantees covering conversion efficiency, purity levels, and energy consumption."
  },
  {
    q: "Do you support environmental compliance?",
    a: "Our engineering team provides all necessary technical documentation, process data, and system designs to support environmental approvals and compliance."
  }
];

  return (
    <section className="py-24 px-8 max-w-3xl mx-auto border-b border-[var(--color-border)]">
      <div className="text-center mb-12">
        <h2 className="text-[var(--color-secondary)] text-xs font-semibold tracking-widest uppercase mb-4">Explain and fix problems</h2>
        <h3 className="text-4xl font-serif text-[var(--color-text)]">Frequently Asked Questions</h3>
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
              <p className="text-[var(--color-muted)] text-sm leading-relaxed pb-4 pr-8">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};