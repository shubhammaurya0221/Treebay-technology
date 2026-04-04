import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, suffix, duration = 2500, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      if (progress < delay) { window.requestAnimationFrame(animateCount); return; }
      const activeProgress = progress - delay;
      const percentage = Math.min(activeProgress / duration, 1);
      const easeOut = 1 - Math.pow(1 - percentage, 2);
      setCount(Math.floor(easeOut * end));
      if (activeProgress < duration) window.requestAnimationFrame(animateCount);
      else setCount(end);
    };
    window.requestAnimationFrame(animateCount);
  }, [end, duration, isVisible, delay]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Stats() {
  const stats = [
    { end: 500, suffix: " KLPD", label: "Max Plant Capacity" },
    { end: 25, suffix: "+", label: "Ethanol Projects" },
    { end: 99, suffix: "%", label: "Process Efficiency" },
    { end: 100, suffix: "%", label: "ZLD Integration" }
  ];

  return (
    <section className="border-y bg-[#0c1a10] border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1c6b36]/10 via-transparent to-transparent opacity-50"></div>
      <div className="max-w-[90rem] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 relative z-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="py-20 flex flex-col items-center justify-center text-center group cursor-default">
            <h3 className="text-4xl md:text-5xl font-serif mb-3 text-white group-hover:scale-110 transition-transform duration-500">
              <Counter end={stat.end} suffix={stat.suffix} delay={idx * 150} duration={2500} />
            </h3>
            <p className="text-[10px] text-[#c29a4b] font-bold tracking-[0.2em] uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}