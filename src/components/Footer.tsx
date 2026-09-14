import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Instagram, Linkedin } from 'lucide-react';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  const footerSocialLinks = [
    {
      label: 'Email',
      display: 'mmmk93473@gmail.com',
      icon: Mail,
      href: 'mailto:mmmk93473@gmail.com',
      isExternal: false,
      hoverType: 'highlight',
    },
    {
      label: 'WhatsApp',
      display: '01006550329',
      icon: WhatsAppIcon,
      href: 'https://wa.me/201006550329',
      isExternal: true,
      hoverType: 'highlight',
    },
    {
      label: 'Instagram',
      display: '@momen_memo_1',
      icon: Instagram,
      href: 'https://www.instagram.com/momen_memo_1?stkn=eno0ZTFmcjBvZm1j',
      isExternal: true,
      hoverType: 'movement',
    },
    {
      label: 'LinkedIn',
      display: 'Moamen Elmon',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/moamen-elmon-158973436/',
      isExternal: true,
      hoverType: 'movement',
    },
  ];

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
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Availability Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-base text-white tracking-wider">MOAMEN</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Select Projects</span>
          </div>
        </div>

        {/* Center: Live Cairo Local Time & Contact / Social Channels */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-slate-500">CAIRO / LOCAL TIME:</span>
            <span className="text-cyan-300 font-bold">{time || '00:00:00'} (GMT+3)</span>
          </div>

          <div className="flex items-center gap-2.5">
            {footerSocialLinks.map((item) => {
              const Icon = item.icon;
              const isMove = item.hoverType === 'movement';
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={item.label}
                  title={`${item.label}: ${item.display}`}
                  className="group w-8 h-8 rounded-lg bg-[#080d1a] border border-cyan-500/20 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/60 hover:bg-[#0e192c] hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all duration-300"
                >
                  <Icon className={`w-3.5 h-3.5 transition-transform duration-300 ${isMove ? 'group-hover:-translate-y-0.5 group-hover:scale-110' : 'group-hover:scale-105'}`} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-6">
          <span>© {new Date().getFullYear()} MOAMEN. All rights reserved.</span>
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
