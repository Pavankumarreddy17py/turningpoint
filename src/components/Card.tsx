import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export function Card({ children, className = '', onClick, hover = false }: CardProps) {
  const hoverStyles = hover
    ? 'hover:shadow-lg hover:scale-105 cursor-pointer'
    : '';

  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 transition-all duration-200 ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
