import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check touch devices & reduced motion
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasTouch || isCoarse || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]');

      if (projectEl) {
        setCursorVariant('project');
        setCursorText('VIEW');
      } else if (interactiveEl) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer follow ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePosition.x - (cursorVariant === 'project' ? 42 : cursorVariant === 'hover' ? 24 : 16),
          y: mousePosition.y - (cursorVariant === 'project' ? 42 : cursorVariant === 'hover' ? 24 : 16),
          width: cursorVariant === 'project' ? 84 : cursorVariant === 'hover' ? 48 : 32,
          height: cursorVariant === 'project' ? 84 : cursorVariant === 'hover' ? 48 : 32,
          backgroundColor: cursorVariant === 'project' 
            ? 'rgba(0, 240, 255, 0.95)' 
            : cursorVariant === 'hover'
            ? 'rgba(0, 240, 255, 0.12)'
            : 'rgba(0, 240, 255, 0.05)',
          borderColor: cursorVariant === 'project' 
            ? '#00f0ff' 
            : cursorVariant === 'hover' 
            ? 'rgba(0, 240, 255, 0.8)' 
            : 'rgba(0, 240, 255, 0.3)',
          borderWidth: cursorVariant === 'project' ? 0 : 1.5,
          scale: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 450,
          damping: 32,
          mass: 0.5,
        }}
      >
        {cursorVariant === 'project' && (
          <span className="text-[11px] font-bold tracking-widest text-black font-mono select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center dot */}
      {cursorVariant !== 'project' && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none shadow-[0_0_10px_#00f0ff]"
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: cursorVariant === 'hover' ? 0 : 1,
            opacity: cursorVariant === 'hover' ? 0 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 800,
            damping: 35,
          }}
        />
      )}
    </div>
  );
};

