import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0312] py-12 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <Logo className="scale-75 mb-6 opacity-80" />
        <p className="text-gray-500 text-sm mb-4">
          © {new Date().getFullYear()} AI Love Crush. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-xs text-gray-600">
          <a href="#" className="hover:text-brand-pink transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-brand-pink transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-brand-pink transition-colors">Suporte</a>
        </div>
        <p className="mt-8 text-[10px] text-gray-700 max-w-lg">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usar resultados reais.
        </p>
      </div>
    </footer>
  );
};