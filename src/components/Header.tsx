import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface HeaderProps {
  onStartProject?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll-spy active section detection
      const sections = ['home', 'about', 'work', 'services', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3.5 bg-[#05070d]/85 backdrop-blur-xl border-b border-cyan-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.7)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-1 text-xl md:text-2xl font-bold tracking-wider font-heading text-white group"
        >
          <span>MOMEN</span>
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] group-hover:scale-125 transition-transform duration-300" />
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#090e1a]/70 border border-cyan-500/15 backdrop-blur-md px-4 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-4 py-1.5 text-xs uppercase tracking-widest font-medium transition-colors duration-200 ${
                  isActive ? 'text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 rounded-full shadow-[0_0_8px_#00f0ff]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA Magnetic Button */}
        <div className="hidden md:block">
          <MagneticButton
            variant="secondary"
            className="text-xs uppercase tracking-wider py-2.5 px-5 !rounded-full text-slate-200 border-cyan-500/30 hover:border-cyan-400"
            onClick={onStartProject ? onStartProject : () => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Let's Work Together</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-cyan-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-400"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#070b14]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`text-base font-medium py-2 border-b border-white/5 transition-colors flex items-center justify-between ${
                      isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />}
                  </a>
                );
              })}
              <div className="pt-2">
                <MagneticButton
                  variant="primary"
                  className="w-full py-3 text-sm text-center"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onStartProject) onStartProject();
                    else document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

