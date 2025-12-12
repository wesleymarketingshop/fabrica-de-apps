import React from 'react';
import { Logo } from './Logo';
import { Button } from './Button';
import { ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 px-4 md:px-8 bg-gradient-to-b from-brand-dark via-[#2e1065] to-brand-dark">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-pink rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-purple rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <Logo className="mb-8 animate-float" />
        
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-6 border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-xs md:text-sm font-semibold text-white tracking-wide">MULTILÍNGUE • ONLINE AGORA</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight glow-text">
          Descubra <span className="text-brand-pink">EXATAMENTE</span> o que ele(a) quis dizer.
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl font-sans">
          O único bot de IA que <span className="text-brand-pink font-bold">lê prints, ouve áudios e decodifica mensagens</span> para te dizer o que responder no WhatsApp.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mb-10 w-full md:w-auto">
          <Button onClick={scrollToPricing} className="w-full md:w-auto text-xl animate-pulse-fast">
            QUERO ATIVAR O MEU AGORA
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-300">
          <div className="flex items-center gap-2 bg-black/30 px-3 py-2 rounded-lg border border-purple-500/30">
            <Zap size={16} className="text-yellow-400" />
            <span>Funciona no WhatsApp</span>
          </div>
          <div className="flex items-center gap-2 bg-black/30 px-3 py-2 rounded-lg border border-purple-500/30">
            <ShieldCheck size={16} className="text-green-400" />
            <span>Sem instalar nada</span>
          </div>
        </div>
      </div>
    </section>
  );
};