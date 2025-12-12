import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Como recebo o acesso?",
    answer: "Após a confirmação do pagamento, você receberá via e-mail e pelo Whats o seu código de ativação, o número do WhatsApp do AI Love Crush, para começar a usar na hora."
  },
  {
    question: "Funciona para qualquer tipo de relacionamento?",
    answer: "Sim! Seja para conquistar um crush novo, reconquistar um ex, ou melhorar um casamento. O AI Love Crush identifica o contexto e adapta as respostas."
  },
  {
    question: "Preciso instalar algum aplicativo?",
    answer: "Não! O AI Love Crush funciona diretamente no seu WhatsApp, como se fosse um contato da sua agenda. Simples e sem ocupar memória."
  },
  {
    question: "É seguro? Alguém vai ler minhas conversas?",
    answer: "Totalmente seguro. O sistema é criptografado e 100% automatizado por inteligência artificial. Nenhuma pessoa humana lê suas mensagens."
  },
  {
    question: "Posso mandar áudios e prints?",
    answer: "Sim! Essa é a nossa tecnologia exclusiva. Você pode encaminhar áudios que recebeu ou enviar prints da conversa e ele analisa tudo."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-[#1a0b2e]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-center text-white mb-10">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-[#2e1065]/50 rounded-lg border border-purple-500/30 overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 text-left text-white font-semibold focus:outline-none hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{item.question}</span>
                {openIndex === index ? <ChevronUp className="text-brand-pink" /> : <ChevronDown className="text-brand-pink" />}
              </button>
              
              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-300 text-sm leading-relaxed border-t border-purple-500/20 mt-2">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};