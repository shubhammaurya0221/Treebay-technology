import React, { useState, useEffect, useRef } from 'react';
import { FaGlobe, FaDumbbell, FaClock } from "react-icons/fa";

// Counter (ONLY for numbers)
const Counter = ({ end, suffix, duration = 2500, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < delay) {
        requestAnimationFrame(animateCount);
        return;
      }

      const activeProgress = progress - delay;
      const percentage = Math.min(activeProgress / duration, 1);
      const easeOut = 1 - Math.pow(1 - percentage, 2);

      setCount(Math.floor(easeOut * end));

      if (activeProgress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration, isVisible, delay]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Icon Fade Component
const FadeIcon = ({ icon, delay, isNumber }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${isNumber ? "text-4xl" : "text-5xl md:text-6xl"} mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
    >
      {icon}
    </div>
  );
};

export default function Stats() {
  const stats = [
    { icon: <FaGlobe />, end: "", suffix: "", label: "GLOBAL PRESSENCE" },
    { icon: <FaDumbbell />, end: "", suffix: "", label: "PROFESSIONAL WORKFORCE" },
    { icon: <FaClock />, end: 100, suffix: "%", label: "TIME COMMITMENT" },
  ];

  return (
    <div className="border-b bg-[var(--color-bg-alt)] border-[var(--color-border)]">
      <div className="max-w-[90rem] mx-auto grid grid-cols-2 md:grid-cols-3 divide-x divide-[var(--color-border)]">

        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`py-12 flex flex-col items-center justify-center text-center ${idx === 2 ? "col-span-2 md:col-span-1" : ""
              }`}
          >

            {/* ICON (Fade Animation) */}
            <FadeIcon
              icon={stat.icon}
              delay={idx * 150}
              isNumber={typeof stat.end === "number"}
            />

            {/* NUMBER (Counter Animation) */}
            <h3 className="text-4xl md:text-5xl font-serif mb-2 text-[var(--color-text)]">
              {typeof stat.end === "number" && (
                <Counter
                  end={stat.end}
                  suffix={stat.suffix}
                  delay={idx * 150}
                  duration={2500}
                />
              )}
            </h3>
            {/* LABEL */}
            <p className="text-xs text-[var(--color-secondary)] tracking-widest uppercase mt-2">
              {stat.label}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}