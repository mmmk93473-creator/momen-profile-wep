import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost';
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  variant = 'secondary',
  onClick,
  href,
  target,
  rel,
  type = 'button',
  strength = 0.25,
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      'bg-[#00f0ff] text-black font-semibold shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] hover:bg-[#33f3ff]',
    secondary:
      'bg-[#0c1322]/80 text-white border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]',
    glass:
      'bg-surface/60 backdrop-blur-md text-white border border-white/10 hover:border-cyan-400/50 hover:bg-surface/80',
    ghost:
      'text-slate-300 hover:text-cyan-400 hover:bg-white/5 border border-transparent',
  };

  const commonProps = {
    className: `relative inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 select-none overflow-hidden group ${variantStyles[variant]} ${className}`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { transform: `translate3d(${position.x}px, ${position.y}px, 0)` },
  };

  const content = (
    <motion.div
      animate={{ x: position.x * 0.4, y: position.y * 0.4 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="flex items-center gap-2 relative z-10"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        {...commonProps}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      {...commonProps}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {content}
    </button>
  );
};

