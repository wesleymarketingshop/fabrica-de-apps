import React from 'react';
import { Button } from './Button';
import { Check, Shield, Info } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-4 bg-[#0f0518] relative">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Sales Copy Header */}
        <div className="text-center mb-8 max-w-2xl">
          <div className="inline-block bg-yellow-400 text-black font-black text-sm px-3 py-1 rounded uppercase tracking-widest mb-4 animate-pulse">
            🎁 THIS IS BIG
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
            Estamos liberando um <span className="text-brand-pink">LOTE ÚNICO</span> de 300 licenças
          </h2>
          <p className="text-gray-300 text-lg">
            Quando acabar, acabou. O preço voltará para o valor original.
          </p>
        </div>

        <div className="w-full max-w-md bg-gradient-to-b from-[#2e1065] to-[#1a0b2e] rounded-3xl p-1 border-2 border-brand-pink shadow-[0_0_40px_rgba(236,72,153,0.3)] relative overflow-hidden">
          
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-brand-pink text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-20">
            ECONOMIA DE 50%
          </div>

          <div className="bg-[#1a0b2e]/90 p-6 md:p-8 rounded-[22px] h-full flex flex-col">
            
            {/* Value Stack - Perceived Value */}
            <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
               <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">O que você leva:</p>
               <div className="flex justify-between text-gray-300 text-sm">
                 <span>Acesso Anual AI Love Crush</span>
                 <span className="line-through opacity-60">R$ 197,00</span>
               </div>
               <div className="flex justify-between text-gray-300 text-sm">
                 <span>Bônus: Guia de Reconquista</span>
                 <span className="text-brand-pink font-bold">R$ 0,00</span>
                 <span className="hidden">R$ 67,00</span>
               </div>
               <div className="flex justify-between text-gray-300 text-sm">
                 <span>Bônus: Identificação de Rel. Tóxicos</span>
                 <span className="text-brand-pink font-bold">R$ 0,00</span>
                 <span className="hidden">R$ 47,00</span>
               </div>
               <div className="flex justify-between text-white font-bold pt-2 border-t border-white/5">
                 <span>Valor Total Percebido:</span>
                 <span>R$ 311,00</span>
               </div>
            </div>

            {/* Price Display */}
            <div className="text-center mb-6">
              <p className="text-gray-400 text-sm mb-1">Preço especial do lote:</p>
              <div className="flex justify-center items-end gap-2">
                <span className="text-gray-500 line-through text-lg mb-2">R$ 197</span>
                <div className="text-6xl font-black text-white font-heading tracking-tighter text-brand-pink drop-shadow-lg">
                  <span className="text-2xl align-top text-white mr-1">R$</span>99,90
                </div>
              </div>
              <p className="text-yellow-400 text-xs font-bold mt-2">
                🚨 ATENÇÃO: Este preço NÃO será repetido.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8 text-left">
              {[
                "100 Análises detalhadas por mês",
                "Leitura de Áudios, Prints e Textos",
                "Suporte emocional 24h",
                "Multilíngue (qualquer idioma)",
                "Acesso direto no WhatsApp",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-200">
                  <div className="bg-brand-pink/20 p-1 rounded-full shrink-0">
                    <Check size={14} className="text-brand-pink" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button fullWidth className="animate-pulse py-4 text-base md:text-lg leading-tight" onClick={() => window.open('https://kiwify.com.br', '_blank')}>
              LIBERAR MINHA LICENÇA<br/>
              <span className="text-xs font-normal opacity-90">POR R$ 99,90 PARA 12 MESES</span>
            </Button>

            <div className="mt-6 flex justify-center items-center gap-2 text-[10px] text-gray-500">
               <Shield size={12} />
               <span>Compra Segura • Garantia de 7 Dias • Acesso Imediato</span>
            </div>
          </div>
        </div>

        {/* Fair Use Policy Section */}
        <div className="mt-16 max-w-2xl bg-[#1e1035] rounded-2xl p-8 border border-white/5 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2e1065] text-brand-pink border border-brand-pink px-4 py-1 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg whitespace-nowrap">
            <Info size={16} />
            Política de Uso Justo
          </div>
          
          <h4 className="text-xl font-bold text-white mb-4 text-center mt-2">Por que 100 análises por mês?</h4>
          
          <div className="text-gray-300 space-y-4 text-sm leading-relaxed">
            <p>
              Para garantir que todos os usuários tenham a melhor experiência possível, usamos um modelo simples de uso justo.
            </p>
            <ul className="space-y-2 pl-2">
              <li className="flex gap-2">
                <span className="text-green-400">➡️</span> Você pode enviar textos, prints, áudios e fotos com liberdade.
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">➡️</span> O agente está disponível 24h para você.
              </li>
            </ul>
            <p className="font-semibold text-white bg-white/5 p-3 rounded-lg border-l-2 border-brand-pink">
              A única regra é simples: <br/>
              ⚖️ Evitar uso excessivo que pareça ser automação ou uso profissional de alto volume.
            </p>
            <p>
              Ou seja:
              <br/>👍 Usar no dia a dia é totalmente liberado
              <br/>👍 Fazer análises frequentes também
              <br/>⚠️ Apenas mensagens em volume extremamente alto e fora do padrão poderão ser limitadas automaticamente.
            </p>
            <p className="text-center text-brand-pink font-medium pt-2">
              Se você usa normalmente, nem vai perceber essa regra. 💜
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};