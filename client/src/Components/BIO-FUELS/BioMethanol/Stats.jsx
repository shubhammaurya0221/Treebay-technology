import React, { useState, useEffect, useRef } from 'react';

// Added a 'delay' prop to stagger the animations
const Counter = ({ end, suffix, duration = 2500, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // 1. Wait until the element is visible on the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 2. Animate the number counting up
  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Wait for the delay before starting the count
      if (progress < delay) {
        window.requestAnimationFrame(animateCount);
        return;
      }

      const activeProgress = progress - delay;
      const percentage = Math.min(activeProgress / duration, 1);
      
      // FIXED: Switched to a softer Quadratic ease-out. 
      // This distributes the numbers much more evenly over the duration.
      const easeOut = 1 - Math.pow(1 - percentage, 2);
      
      setCount(Math.floor(easeOut * end));

      if (activeProgress < duration) {
        window.requestAnimationFrame(animateCount);
      } else {
        setCount(end); // Ensure it finishes exactly on the target number
      }
    };

    window.requestAnimationFrame(animateCount);
  }, [end, duration, isVisible, delay]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export default function Stats() {
  const stats = [
    { end: 22, suffix: "+", label: "PROJECTS UNDER DEVELOPMENT" },
    { end: 800, suffix: "+", label: "ENGINEERS & SPECIALISTS" },
    { end: 14, suffix: "+", label: "STATES SERVED" },
    { end: 99, suffix: "%", label: "PROCESS RELIABILITY" },
  ];

  return (
    <div className="border-b bg-[var(--color-bg-alt)] border-[var(--color-border)]">
      <div className="max-w-[90rem] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)]">
        {stats.map((stat, idx) => (
          <div key={idx} className="py-12 flex flex-col items-center justify-center text-center">
            <h3 className="text-4xl md:text-5xl font-serif mb-2 text-[var(--color-text)]">
              {/* Passed the index into the delay prop: 0ms, 150ms, 300ms, 450ms */}
              <Counter 
                end={stat.end} 
                suffix={stat.suffix} 
                delay={idx * 150} 
                duration={2500} 
              />
            </h3>
            <p className="text-xs text-[var(--color-secondary)] tracking-widest uppercase mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};