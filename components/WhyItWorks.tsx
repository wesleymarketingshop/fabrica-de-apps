import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhyItWorks: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#140825] to-[#2e1065]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="w-full md:w-1/2">
           {/* Abstract Representation of AI Analysis */}
           <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-brand-pink/30 glow-box bg-black/40 p-6 flex flex-col justify-center">
              <div className="bg-gray-800/80 p-4 rounded-xl rounded-tl-none mb-4 self-start max-w-[80%] border-l-4 border-gray-500">
                <p className="text-xs text-gray-400 mb-1">Ele(a)</p>
                <p className="text-sm text-gray-200">"Tô meio confuso agora, preciso de um tempo..."</p>
              </div>
              
              <div className="flex justify-center my-4">
                <div className="bg-brand-purple text-white text-xs px-3 py-1 rounded-full animate-pulse">
                  AI LOVE CRUSH ANALISANDO...
                </div>
              </div>

              <div className="bg-brand-pink/20 p-4 rounded-xl rounded-tr-none self-end max-w-[90%] border-r-4 border-brand-pink">
                <p className="text-xs text-brand-pink mb-1 font-bold">Análise:</p>
                <p className="text-sm text-white font-semibold">
                  ⚠️ Alerta: Teste de apego. Ele não quer terminar, quer que você corra atrás.
                  <br/><br/>
                  <span className="text-green-400">Resposta sugerida:</span> "Entendo. Também estou num momento corrido. A gente se fala." (Gera escassez imediata).
                </p>
              </div>
           </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Chega de quebrar a cabeça interpretando sinais
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            O AI Love Crush usa algoritmos avançados de psicologia comportamental para ler as entrelinhas que a emoção não te deixa ver.
          </p>

          <div className="space-y-4">
            {[
              "Pare de se sabotar mandando mensagem na hora errada",
              "Descubra se ele(a) tem apego evitativo ou ansioso",
              "Tenha respostas prontas que geram desejo instantâneo",
              "Acesso imediato 24h por dia no seu WhatsApp"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-pink shrink-0 mt-1" />
                <span className="text-gray-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};