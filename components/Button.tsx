import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = "", fullWidth = false }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-brand-pink hover:bg-pink-500 text-white font-bold py-4 px-8 rounded-full 
        shadow-[0_0_20px_rgba(236,72,153,0.6)] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]
        text-lg uppercase tracking-wide border-2 border-pink-400
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};