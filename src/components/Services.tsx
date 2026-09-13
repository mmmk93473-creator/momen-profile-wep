import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Globe, Cpu, Bot, Box, Sparkles, Layers } from 'lucide-react';
import { services, Service } from '../data/services';

const iconMap = {
  globe: Globe,
  cpu: Cpu,
  bot: Bot,
  box: Box,
  sparkles: Sparkles,
  layers: Layers,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 220, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);

    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="perspective-1000"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative h-full rounded-2xl md:rounded-3xl bg-[#080d19]/90 border border-cyan-500/20 p-6 sm:p-8 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(0,240,255,0.15)] cursor-pointer"
      >
        {/* Spotlight Radial Follower */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-2xl md:rounded-3xl"
          style={{
            background: isHovered
              ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.12), transparent 80%)`
              : 'none',
          }}
        />

        {/* Card Header: Number & Category */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs text-cyan-400/80 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full">
              {service.number}
            </span>
            <div className="w-12 h-12 rounded-xl bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/15 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:-translate-y-1 transition-all duration-300">
              <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>

          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
            {service.title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {service.description}
          </p>
        </div>

        {/* Highlights List */}
        <div className="relative z-10 pt-4 border-t border-white/5 space-y-2">
          {service.highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#05070d] overflow-hidden border-t border-cyan-500/10">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              EXPERTISE &amp; OFFERINGS
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            SERVICES
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            High-caliber creative technology capabilities engineered for brands, innovative startups, and modern enterprises seeking category dominance.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
