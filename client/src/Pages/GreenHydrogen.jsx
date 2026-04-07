import React from 'react';
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import CTASection from '../Components/Common/CTASection';
import Hero from '../Components/GreenHydrogen/Hero';
import Stats from '../Components/GreenHydrogen/Stats';
import Pillars from '../Components/GreenHydrogen/Pillars';
import Process from '../Components/GreenHydrogen/Process';
import Advantages from '../Components/GreenHydrogen/Advantages';
import Applications from '../Components/GreenHydrogen/Applications';
import FAQ from '../Components/GreenHydrogen/FAQ';

export default function GreenHydrogen() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] font-sans min-h-screen selection:bg-[var(--color-primary)]">

      <Header />

      {/* HERO */}
      <Hero />

      {/* STATS */}
      <div className="bg-[var(--color-bg-alt)]">
        <Stats />
      </div>

      {/* CORE CAPABILITIES */}
      <Pillars />

      {/* PROCESS */}
      {/* <div className="bg-[var(--color-bg-alt)]"> */}
        <Process />
      {/* </div> */}

      {/* ADVANTAGES (moved after process) */}
      <Advantages />

      {/* APPLICATIONS */}
        <Applications />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTASection />

      {/* FOOTER */}
      <Footer className="bg-[var(--color-bg-alt)]" />

    </div>
  );
}