import React from 'react';
import Hero from '../Components/Home/Hero';
import Stats from '../Components/Home/Stats';
import Pillars from '../Components/Home/Pillars';
import Process from '../Components/Home/Process';
import Testimonial from '../Components/Home/Testimonials';
import Footer from '../Components/Common/Footer';
import FAQ from '../Components/Home/FAQ';
import Header from '../Components/Common/Header';
import CTASection from '../Components/Common/CTASection';

export default function Home() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] font-sans min-h-screen selection:bg-[var(--color-primary)]">
      {/* Main wrapper sets the default background for the whole page */}
      
      <Header />
      
      <Hero />
      
      {/* Alternating Section 1 */}
      <div className="bg-[var(--color-bg-alt)]">
        <Stats />
      </div>
      
      <Pillars />
      
      {/* Alternating Section 2 */}
      <div className="bg-[var(--color-bg-alt)]">
        <Process />
      </div>
      
      <Testimonial />
      
      {/* Alternating Section 3 */}
      <div className="bg-[var(--color-bg-alt)]">
        <FAQ />
      </div>
      <CTASection/>
      
      <Footer className="bg-[var(--color-bg-alt)]"/>
    </div>
  );
}