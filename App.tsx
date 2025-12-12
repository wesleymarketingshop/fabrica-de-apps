import React from 'react';
import { ScarcityBar } from './components/ScarcityBar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { WhyItWorks } from './components/WhyItWorks';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-pink selection:text-white">
      <ScarcityBar />
      <Hero />
      <Features />
      <WhyItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      
      {/* Sticky Mobile CTA - only visible on small screens when scrolling past hero */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-brand-pink text-white font-bold py-3 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)] border border-white/20 animate-pulse"
        >
          QUERO ATIVAR AGORA
        </button>
      </div>
    </div>
  );
};

export default App;