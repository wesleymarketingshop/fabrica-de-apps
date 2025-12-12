import React from 'react';
import { MessageCircle, Image, Mic, HeartCrack, Lock, Globe } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    icon: <MessageCircle size={32} />,
    title: "Decodificador de Mensagens",
    description: "Entenda o 'bom dia seco', o sumiço repentino e as visualizações sem resposta."
  },
  {
    icon: <Image size={32} />,
    title: "Lê Prints de Conversa",
    description: "Envie o print e ele analisa o tom emocional, intenções ocultas e sinais de perigo."
  },
  {
    icon: <Mic size={32} />,
    title: "Ouve e Analisa Áudios",
    description: "Detecta hesitação, mentiras, interesse real e segundas intenções na voz dele(a)."
  },
  {
    icon: <HeartCrack size={32} />,
    title: "Especialista em Reconquista",
    description: "Cria a estratégia perfeita e a mensagem exata para recuperar o interesse."
  },
  {
    icon: <Globe size={32} />,
    title: "100% Multilíngue",
    description: "Português, Inglês, Espanhol... mande a conversa no idioma que for. Ele entende."
  },
  {
    icon: <Lock size={32} />,
    title: "Privacidade Total",
    description: "Seus dados e conversas são protegidos. Análise sigilosa e sem julgamentos."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#140825]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            O que o <span className="text-brand-pink">AI Love Crush</span> faz por você?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mais do que um bot, um especialista emocional 24 horas no seu bolso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-[#2e1065] to-[#1a0b2e] p-8 rounded-2xl border border-purple-500/20 hover:border-brand-pink/50 transition-all duration-300 hover:transform hover:-translate-y-2 glow-box group">
              <div className="bg-brand-pink/20 w-16 h-16 rounded-full flex items-center justify-center text-brand-pink mb-6 group-hover:bg-brand-pink group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};