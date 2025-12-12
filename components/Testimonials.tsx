import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    name: "Júlia M.",
    age: 24,
    image: "https://picsum.photos/100/100?random=1",
    text: "Gente, chocada! Mandei o print da conversa seca que ele me mandou e o bot disse EXATAMENTE o que eu tava sentindo. Mandei a resposta sugerida e ele me chamou pra sair em 10 minutos. Surreal.",
    rating: 5
  },
  {
    name: "Amanda S.",
    age: 29,
    image: "https://picsum.photos/100/100?random=2",
    text: "Eu tava bloqueada há 2 meses. O AI Love Crush me ajudou a criar uma mensagem pra enviar por SMS. Ele desbloqueou e a gente voltou a conversar ontem. Não acredito!",
    rating: 5
  },
  {
    name: "Lucas R.",
    age: 27,
    image: "https://picsum.photos/100/100?random=3",
    text: "Funciona pra homem também, viu? Usei pra entender porque ela tava fria. O bot sacou que era insegurança dela, mudei minha abordagem e salvou meu namoro.",
    rating: 5
  },
  {
    name: "Carla T.",
    age: 33,
    image: "https://picsum.photos/100/100?random=4",
    text: "Vale cada centavo. Eu pagava terapia e não tinha essas respostas. O bot analisou um áudio dele de 30 segundos e me falou que ele tava mentindo sobre onde estava. E tava mesmo!",
    rating: 5
  },
  {
    name: "Roberto F.",
    age: 31,
    image: "https://picsum.photos/100/100?random=5",
    text: "Tava pra terminar meu casamento, sério. A gente não se entendia. Comecei a usar o bot pra 'traduzir' o que minha esposa falava quando tava brava. Melhorou 1000% nossa comunicação.",
    rating: 5
  },
  {
    name: "Mariana L.",
    age: 21,
    image: "https://picsum.photos/100/100?random=6",
    text: "Uso no Tinder direto! Antes de responder qualquer match, eu jogo no AI Love Crush. Ele já me livrou de 3 embustes essa semana. O 'filtro de boy lixo' é real kkkk",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#0f0518]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-center text-white mb-12">
          Quem usou, <span className="text-brand-pink">amou e reconquistou</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#1e1035] p-6 rounded-2xl relative border border-white/5 hover:border-brand-pink/30 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-pink object-cover" />
                <div>
                  <h4 className="font-bold text-white">{t.name}, {t.age}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(t.rating)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};