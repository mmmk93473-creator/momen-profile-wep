import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const HeroScene: React.FC = () => {
  // Mouse coordinates mapped to -1 ... 1
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end feel
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // Depth Layers transforms
  // Layer 2: Atmospheric Glow
  const glowX = useTransform(springX, [-1, 1], [-15, 15]);
  const glowY = useTransform(springY, [-1, 1], [-12, 12]);

  // Layer 4 & 5: Outer Floating Objects & Panels (Behind Portrait)
  const obj3DX = useTransform(springX, [-1, 1], [-20, 20]);
  const obj3DY = useTransform(springY, [-1, 1], [-16, 16]);

  const panelLeftX = useTransform(springX, [-1, 1], [-28, 28]);
  const panelLeftY = useTransform(springY, [-1, 1], [-20, 20]);

  const panelRightX = useTransform(springX, [-1, 1], [24, -24]);
  const panelRightY = useTransform(springY, [-1, 1], [-18, 18]);

  // Layer 6: Momen's Real Portrait (Higher Z-index, subtle movement, anchored and dominant)
  const portraitX = useTransform(springX, [-1, 1], [-8, 8]);
  const portraitY = useTransform(springY, [-1, 1], [-6, 6]);
  const portraitScale = useTransform(springY, [-1, 1], [1.008, 0.992]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className="relative w-full h-[460px] sm:h-[560px] md:h-[640px] lg:h-[720px] xl:h-[780px] flex items-center justify-center select-none overflow-visible"
    >
      {/* ============================================================ */}
      {/* LAYER 2: ATMOSPHERIC CYAN & ROYAL BLUE LIGHT CONES           */}
      {/* ============================================================ */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute w-[380px] md:w-[540px] h-[380px] md:h-[540px] rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-transparent blur-[110px] pointer-events-none -z-10"
      />
      <motion.div
        style={{
          x: useTransform(springX, [-1, 1], [20, -20]),
          y: useTransform(springY, [-1, 1], [15, -15]),
        }}
        className="absolute right-[-40px] top-1/4 w-[340px] h-[340px] rounded-full bg-cyan-400/15 blur-[95px] pointer-events-none -z-10"
      />

      {/* ============================================================ */}
      {/* LAYER 4: 3D HOLOGRAPHIC SATELLITES (ORBITING AROUND, NOT OVER)*/}
      {/* ============================================================ */}

      {/* 1. Holographic AI Glowing Cube (High Above, Top-Left) */}
      <motion.div
        style={{ x: obj3DX, y: obj3DY }}
        className="absolute top-3 sm:top-6 left-6 sm:left-12 z-20 pointer-events-none"
      >
        <div className="relative group animate-float">
          <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-cyan-500/35 via-[#071329]/85 to-blue-600/30 border border-cyan-400/60 shadow-[0_0_30px_rgba(0,240,255,0.55)] backdrop-blur-md flex items-center justify-center transform -rotate-6">
            <span className="font-heading text-lg sm:text-2xl font-black text-cyan-300 tracking-wider shadow-[0_0_15px_#00f0ff]">
              AI
            </span>
            <div className="absolute inset-0 rounded-2xl border border-cyan-300/40 animate-pulse" />
          </div>
          <div className="absolute -inset-2 bg-cyan-400/20 blur-md rounded-full -z-10" />
        </div>
      </motion.div>

      {/* 2. Floating Blender Cube Badge (Upper-Right Space) */}
      <motion.div
        style={{
          x: useTransform(springX, [-1, 1], [25, -25]),
          y: useTransform(springY, [-1, 1], [-18, 18]),
        }}
        className="hidden md:block absolute top-6 sm:top-10 right-16 sm:right-28 z-20 pointer-events-none"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/30 via-[#10131e]/90 to-blue-500/20 border border-orange-400/50 shadow-[0_0_20px_rgba(255,140,0,0.35)] backdrop-blur-md flex items-center justify-center transform rotate-12 animate-float-slow">
          <div className="w-6 h-6 rounded-full border-2 border-orange-400 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
          </div>
        </div>
      </motion.div>

      {/* 3. Floating Luxury Yacht in Cyan Orbital Ring (Upper-Right Space) */}
      <motion.div
        style={{
          x: useTransform(springX, [-1, 1], [30, -30]),
          y: useTransform(springY, [-1, 1], [-20, 20]),
        }}
        className="hidden lg:block absolute top-14 sm:top-20 right-2 sm:right-8 z-20 pointer-events-none"
      >
        <div className="relative animate-float-reverse">
          <div className="absolute -inset-3 rounded-full border border-cyan-400/35 shadow-[0_0_18px_rgba(0,240,255,0.35)] transform -rotate-12 scale-y-50" />
          <div className="w-32 h-18 rounded-xl overflow-hidden bg-gradient-to-br from-[#0a1528]/90 to-[#05070d]/90 border border-cyan-500/30 shadow-[0_15px_30px_rgba(0,0,0,0.8)] backdrop-blur-md p-1.5 flex flex-col justify-end relative">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{ backgroundImage: "url('/assets/bella_showcase.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-transparent" />
            <span className="relative text-[8.5px] font-mono uppercase tracking-widest text-cyan-300">
              Red Sea Safari
            </span>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* LAYER 5: FLOATING PANELS (BEHIND PORTRAIT AT Z-20, TO THE SIDES)*/}
      {/* ============================================================ */}

      {/* 1. Bella Liveaboard Card (Positioned to the far left side, BEHIND portrait) */}
      <motion.div
        style={{ x: panelLeftX, y: panelLeftY }}
        className="hidden xl:block absolute -left-12 lg:-left-20 top-28 sm:top-36 z-20"
      >
        <div
          data-cursor="project"
          className="w-56 rounded-2xl bg-[#090f1d]/85 border border-cyan-400/30 shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_20px_rgba(0,240,255,0.15)] backdrop-blur-xl p-3.5 transition-transform duration-300 hover:scale-[1.03] group cursor-pointer"
          onClick={() => {
            const el = document.getElementById('work');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]" />
              <span className="font-heading font-semibold text-xs text-white tracking-wide">
                Bella Liveaboard
              </span>
            </div>
            <span className="text-[9px] font-mono text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
              Red Sea
            </span>
          </div>

          <div className="relative w-full h-24 rounded-lg overflow-hidden mb-2 border border-white/10 group-hover:border-cyan-400/40 transition-colors">
            <img
              src="/assets/bella_showcase.jpg"
              alt="Bella Liveaboard Yacht"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-1.5 left-2 flex items-center gap-1 text-[10px] text-cyan-300 font-medium">
              <span>View Case</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </div>
          </div>
          <p className="text-[10px] text-slate-400 leading-snug line-clamp-2 font-mono">
            Luxury yacht digital experience
          </p>
        </div>
      </motion.div>

      {/* 2. Floating Code Panel (Positioned to the far right side, BEHIND portrait) */}
      <motion.div
        style={{ x: panelRightX, y: panelRightY }}
        className="hidden xl:block absolute -right-8 lg:-right-16 bottom-16 sm:bottom-24 z-20"
      >
        <div className="w-52 rounded-xl bg-[#080d1a]/85 border border-cyan-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.85)] backdrop-blur-xl p-3 font-mono text-[10.5px] text-slate-300">
          <div className="flex items-center gap-1 pb-1.5 mb-1.5 border-b border-white/5">
            <span className="w-2 h-2 rounded-full bg-red-500/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
            <span className="text-[9.5px] text-slate-500 ml-1.5">creativity.ts</span>
          </div>
          <div className="space-y-0.5 text-[10px]">
            <div className="text-cyan-400">
              <span className="text-blue-400">const</span> creativity = {'{'}
            </div>
            <div className="pl-2.5 text-slate-300">ai: <span className="text-cyan-300">true</span>,</div>
            <div className="pl-2.5 text-slate-300">web: <span className="text-cyan-300">true</span>,</div>
            <div className="pl-2.5 text-slate-300">3d: <span className="text-cyan-300">true</span>,</div>
            <div className="pl-2.5 text-slate-300">automation: <span className="text-cyan-300">true</span></div>
            <div className="text-cyan-400">{'}'};</div>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* LAYER 6: MOMEN'S REAL AUTHENTIC PORTRAIT (DOMINANT & CLEAR)   */}
      {/* Visual Priority: Z-30, NOTHING COVERS THE FACE OR BODY!      */}
      {/* ============================================================ */}
      <motion.div
        style={{ x: portraitX, y: portraitY, scale: portraitScale }}
        className="relative z-30 w-full max-w-[560px] sm:max-w-[660px] lg:max-w-[760px] xl:max-w-[840px] h-full flex items-center justify-center"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Authentic Real Portrait with hand on chin, hoodie with M logo, and sharp face */}
          <img
            src="/assets/momen_hero_portrait_master.png"
            alt="Momen — Real Personal Portrait"
            className="w-full h-auto max-h-[96%] object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] filter contrast-[1.05] brightness-[1.02] select-none"
            loading="eager"
          />

          {/* Cyan Rim Lighting Accent Layer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent mix-blend-screen pointer-events-none" />

          {/* Bottom blending fade into dark navy floor */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#05070d] via-[#05070d]/80 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* VERTICAL TECH RAIL (FAR RIGHT BORDER, TOTALLY OFF CENTER)    */}
      {/* ============================================================ */}
      <div className="hidden 2xl:flex absolute -right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-20 text-[9.5px] font-mono tracking-widest text-slate-500 uppercase select-none pr-2">
        <span className="hover:text-cyan-300 transition-colors">AI</span>
        <span className="w-1 h-1 rounded-full bg-cyan-500/40" />
        <span className="hover:text-cyan-300 transition-colors">WEB</span>
        <span className="w-1 h-1 rounded-full bg-cyan-500/40" />
        <span className="hover:text-cyan-300 transition-colors">3D</span>
        <span className="w-1 h-1 rounded-full bg-cyan-500/40" />
        <span className="hover:text-cyan-300 transition-colors">AUTOMATION</span>
        <span className="w-1 h-1 rounded-full bg-cyan-500/40" />
        <span className="hover:text-cyan-300 transition-colors">CREATIVE</span>
      </div>

      {/* ============================================================ */}
      {/* LAYER 7: FOREGROUND BOTTOM GRADIENT                          */}
      {/* ============================================================ */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#05070d] to-transparent z-40 pointer-events-none" />
    </div>
  );
};

