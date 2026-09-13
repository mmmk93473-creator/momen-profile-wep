import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Africa/Cairo',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030509] border-t border-cyan-500/15 py-12 px-6 md:px-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Availability Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-base text-white tracking-wider">MOMEN</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Select Projects</span>
          </div>
        </div>

        {/* Center: Live Cairo Local Time */}
        <div className="flex items-center gap-2 text-slate-400">
          <span className="text-slate-500">CAIRO / LOCAL TIME:</span>
          <span className="text-cyan-300 font-bold">{time || '00:00:00'} (GMT+3)</span>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-6">
          <span>© {new Date().getFullYear()} Momen. All rights reserved.</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-white/5 border border-cyan-500/20 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
