import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2 drop-shadow-[0_0_8px_rgba(109,40,217,0.8)]">
        <path d="M50 90C50 90 90 70 90 45C90 25 75 10 58 10C48 10 40 15 35 22C30 15 22 10 12 10C-5 10 -5 35 15 55L50 90Z" fill="#5b21b6" />
        <rect x="25" y="30" width="50" height="35" rx="8" fill="white" />
        <path d="M40 70L35 60H65L40 70Z" fill="white" />
        <circle cx="40" cy="47.5" r="3.5" fill="#5b21b6" />
        <circle cx="50" cy="47.5" r="3.5" fill="#5b21b6" />
        <circle cx="60" cy="47.5" r="3.5" fill="#5b21b6" />
      </svg>
      <div className="text-center leading-none">
        <span className="block text-2xl font-black text-[#5b21b6] tracking-wider font-heading">AI - LOVE</span>
        <span className="block text-3xl font-black text-[#4c1d95] tracking-widest font-heading">CRUSH</span>
      </div>
    </div>
  );
};