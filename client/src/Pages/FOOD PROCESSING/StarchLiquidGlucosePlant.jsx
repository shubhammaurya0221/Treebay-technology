import React from 'react';
import Header from '../../Components/Common/Header';
import Footer from '../../Components/Common/Footer';
import CTASection from '../../Components/Common/CTASection';
import Hero from '../../Components/FOOD-PROCESSING/StarchLiquidGlucosePlant/Hero';
import Advantages from '../../Components/FOOD-PROCESSING/StarchLiquidGlucosePlant/Advantages';
import Applications from '../../Components/FOOD-PROCESSING/StarchLiquidGlucosePlant/Applications';
import FAQ from '../../Components/FOOD-PROCESSING/StarchLiquidGlucosePlant/FAQ';
import Pillars from '../../Components/FOOD-PROCESSING/StarchLiquidGlucosePlant/Pillars';
import Process from '../../Components/FOOD-PROCESSING/StarchLiquidGlucosePlant/Process';
import Stats from '../../Components/FOOD-PROCESSING/StarchLiquidGlucosePlant/Stats';


export default function StarchLiquidGlucosePlant() {
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