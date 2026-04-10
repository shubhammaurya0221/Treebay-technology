import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonial() {
  // 1. Data array for the slider
  const testimonials = [
    {
      id: 0,
      name: "Priya Sharma",
      role: "Managing Director, EcoFuels India",
      quote: "“Their integrated approach — engineering, procurement, and construction under one roof — saved us 8 months and ₹12 crore vs. having separate contractors.”",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
      id: 1,
      name: "Rahul Verma",
      role: "Operations Head, GreenChem Solutions",
      quote: "“The level of detail in their FEED study gave our investors complete confidence. Commissioning was incredibly smooth and ahead of schedule.”",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Ananya Desai",
      role: "CEO, BioCNG Corp",
      quote: "“Safety, quality, and efficiency. They delivered a state-of-the-art facility that has set a new benchmark for biogas production in the region.”",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  // 2. State to track the current active testimonial
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. Navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    // Expanded to max-w-[90rem] for the full-screen layout feel
    <section className="py-24 px-8 max-w-[90rem] w-full mx-auto border-b border-[var(--color-border)]">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Images */}
        <div className="flex gap-4 h-[400px] md:h-[500px] lg:h-[600px]">
          
          {/* Main large image */}
          <div className="w-2/3 h-full bg-[var(--color-bg-deep)] border border-[var(--color-border)] relative overflow-hidden rounded-sm">
            {testimonials.map((test, idx) => (
              <img 
                key={test.id}
                src={test.img} 
                alt={test.name} 
                className={`absolute inset-0 object-cover w-full h-full transition-all duration-700 ease-in-out ${
                  currentIndex === idx 
                    ? 'opacity-80 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-8 scale-105 pointer-events-none'
                }`} 
              />
            ))}
          </div>

          {/* Side Thumbnails */}
          <div className="w-1/3 flex flex-col gap-4">
            {testimonials.map((test, idx) => (
              <button 
                key={test.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-full aspect-square bg-[var(--color-bg-deep)] border relative overflow-hidden rounded-sm transition-all focus:outline-none ${
                  currentIndex === idx 
                    ? 'border-[var(--color-secondary)] ring-1 ring-[var(--color-secondary)]' 
                    : 'border-[var(--color-border)] hover:border-[var(--color-text-muted)]'
                }`}
              >
                <img 
                  src={test.img} 
                  alt={`Thumbnail ${idx + 1}`} 
                  className={`object-cover w-full h-full transition-all duration-500 ${
                    currentIndex === idx ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-80'
                  }`} 
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Right Side: Text & Controls */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[var(--color-secondary)] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Client Experiences
          </h2>
          
          {/* Animated Name & Role Container */}
          <div className="mb-8 min-h-[70px] relative">
            {testimonials.map((test, idx) => (
              <div 
                key={`info-${test.id}`}
                className={`transition-all duration-500 ease-out ${
                  currentIndex === idx 
                    ? 'opacity-100 translate-y-0 relative pointer-events-auto' 
                    : 'opacity-0 translate-y-4 absolute top-0 left-0 pointer-events-none'
                }`}
              >
                <h4 className="font-serif text-2xl md:text-3xl text-[var(--color-text)] mb-2">
                  {test.name}
                </h4>
                <p className="text-sm text-[var(--color-muted)]">
                  {test.role}
                </p>
              </div>
            ))}
          </div>
          
          {/* Animated Quote Container */}
          <div className="min-h-[160px] md:min-h-[180px] relative">
            {testimonials.map((test, idx) => (
              <blockquote 
                key={`quote-${test.id}`}
                className={`text-2xl md:text-3xl lg:text-4xl font-serif font-light italic text-[var(--color-text-muted)] leading-relaxed transition-all duration-700 ease-out ${
                  currentIndex === idx 
                    ? 'opacity-100 translate-y-0 relative pointer-events-auto delay-100' // Added delay-100 to stagger after the name
                    : 'opacity-0 translate-y-6 absolute top-0 left-0 pointer-events-none'
                }`}
              >
                {test.quote}
              </blockquote>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex gap-4 z-10">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 border border-[var(--color-border)] rounded-full flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-text)]/10 hover:border-[var(--color-border-muted)] transition-all focus:outline-none"
              aria-label="Previous Review"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 bg-[var(--color-primary)] text-[var(--color-text)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary)]/90 transition-all focus:outline-none shadow-lg shadow-black/20"
              aria-label="Next Review"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}