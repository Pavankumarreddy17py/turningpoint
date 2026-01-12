import React from 'react';
import logoImg from '../assets/main logo of tp.png'; // Update with your actual file name

export const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src={logoImg} 
        alt="HJR Logo" 
        className="h-full object-contain"
      />
      <span className="font-bold text-xl text-blue-900 hidden md:block">
        HJR
      </span>
    </div>
  );
};