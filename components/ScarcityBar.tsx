import React from 'react';

export const ScarcityBar: React.FC = () => {
  return (
    <div className="bg-brand-pink text-white py-2 overflow-hidden sticky top-0 z-50 shadow-md">
      <div className="animate-marquee whitespace-nowrap flex gap-8 items-center justify-center font-bold text-sm md:text-base">
        <span className="mx-4">🔥 LOTE ÚNICO COM 300 LICENÇAS - CORRA!</span>
        <span className="mx-4 hidden md:inline">⚠️ ATENÇÃO: PREÇO DE R$ 99,90 VAI SUBIR</span>
        <span className="mx-4">🔥 RESTAM POUCAS VAGAS NESTE LOTE</span>
        <span className="mx-4 hidden md:inline">⚠️ LIBERAÇÃO IMEDIATA APÓS O PAGAMENTO</span>
      </div>
    </div>
  );
};