import React, { useState } from 'react';
import { ChevronDown} from 'lucide-react';

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
    { q: "What types of plants do you specialize in?", a: "We primarily specialize in end-to-end turnkey solutions for green energy infrastructure. This includes large-scale Grain/Molasses based Ethanol Bio-refineries, CBG (Compressed Biogas) / Bio-CNG plants, and sustainable Green Chemical facilities." },
    { q: "Do you handle both detailed engineering and civil construction?", a: "Yes, our EPC framework covers everything from initial feasibility and detailed engineering to procurement, structural fabrication, civil works, and final commissioning." },
    { q: "What is your typical project timeline for a 100 KLPD Ethanol plant?", a: "Project timelines vary based on site conditions, but typically range from 12 to 14 months from the signing of the agreement to initial commissioning." },
    { q: "Do you provide performance guarantees?", a: "Absolutely. We stand by our engineering with strict performance guarantees covering yield, energy consumption (steam/power), and effluent norms (ZLD)." },
    { q: "Are you involved in environmental clearance processes?", a: "While the client leads the primary application, our technical team provides all necessary designs, P&IDs, mass balance sheets, and technical documentation required to secure fast-track approvals." }
  ];

  return (
    <section className="py-24 px-8 max-w-3xl mx-auto border-b border-white/10">
      <div className="text-center mb-12">
        <h2 className="text-[#a2b38b] text-xs font-semibold tracking-widest uppercase mb-4">Common Inquiries</h2>
        <h3 className="text-4xl font-serif">Frequently Asked Questions</h3>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-white/10 pb-4">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full text-left py-4 flex justify-between items-center group"
            >
              <span className={`font-medium text-lg transition-colors ${openIdx === idx ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                {faq.q}
              </span>
              <ChevronDown 
                size={20} 
                className={`text-gray-500 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-gray-400 text-sm leading-relaxed pb-4 pr-8">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};