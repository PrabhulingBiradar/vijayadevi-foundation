import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
      {/* Lime Green Heart - Formed between figures */}
      <path 
        d="M100 155 L 88 143 C 55 110 45 95 45 75 C 45 55 60 40 80 40 C 92 40 100 48 100 55 C 100 48 108 40 120 40 C 140 40 155 55 155 75 C 155 95 145 110 112 143 Z" 
        fill="#84cc16" 
      />

      {/* Magenta Figure - Left Abstract Human */}
      <path 
        d="M 95 165 C 50 165 15 125 15 75 C 15 35 45 10 75 10" 
        stroke="#d946ef" 
        strokeWidth="14" 
        strokeLinecap="round" 
      />
      <circle cx="75" cy="10" r="12" fill="#d946ef" />

      {/* Slate Blue Figure - Right Abstract Human */}
      <path 
        d="M 105 165 C 150 165 185 125 185 75 C 185 35 155 10 125 10" 
        stroke="#475569" 
        strokeWidth="14" 
        strokeLinecap="round" 
      />
      <circle cx="125" cy="10" r="12" fill="#475569" />
    </svg>
  );
};

export default Logo;