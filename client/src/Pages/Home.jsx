import React from 'react';
import { Hero } from '../Components/Home/Hero';
import { Stats } from '../Components/Home/Stats';
import { Pillars } from '../Components/Home/Pillars';
import { Process } from '../Components/Home/Process';
import { Testimonial } from '../Components/Home/Testimonials';
import { Footer } from '../Components/Common/Footer';
import { FAQ } from '../Components/Home/FAQ';
import Header from '../Components/Common/Header';
import CTASection from '../Components/Common/CTASection';

export default function Home() {
  return (
    <div className="bg-[#060e09] text-white font-sans min-h-screen selection:bg-green-900">
      {/* Main wrapper sets the default background for the whole page */}
      
      <Header />
      
      <Hero />
      
      {/* Alternating Section 1 */}
      <div className="bg-[#0c1a10]">
        <Stats />
      </div>
      
      <Pillars />
      
      {/* Alternating Section 2 */}
      <div className="bg-[#0c1a10]">
        <Process />
      </div>
      
      <Testimonial />
      
      {/* Alternating Section 3 */}
      <div className="bg-[#0c1a10]">
        <FAQ />
      </div>
      <CTASection/>
      
      <Footer className="bg-[#0c1a10]"/>
    </div>
  );
}