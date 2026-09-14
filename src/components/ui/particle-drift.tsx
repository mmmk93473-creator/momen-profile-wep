import React, { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

export interface ParticleDriftProps {
  className?: string;
  mode?: 'dark' | 'light';
  speed?: number;
  density?: number;
  opacity?: number;
  hue?: number;
  saturation?: number;
  brightness?: number;
  interactive?: boolean;
  showBeams?: boolean;
  showGlyphs?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  glyph?: string;
  isGlyph: boolean;
}

interface Beam {
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;
  speed: number;
  alpha: number;
}

const DIGITAL_GLYPHS = ['0', '1', 'λ', '✦', '+', '::', '0x', 'AI', '3D', '∇', '⚡'];

export const ParticleDrift: React.FC<ParticleDriftProps> = ({
  className,
  mode = 'dark',
  speed = 0.6,
  density = 1.1,
  opacity = 0.65,
  hue = 188, // Electric cyan base hue
  saturation = 95,
  brightness = 60,
  interactive = true,
  showBeams = true,
  showGlyphs = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let beams: Beam[] = [];

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const effectiveSpeed = prefersReduced ? speed * 0.2 : speed;

    // Base color configurations
    const isDark = mode === 'dark';
    const primaryHue = hue; // Cyan
    const secondaryHue = (hue + 25) % 360; // Electric Blue

    // Setup Canvas dimensions
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles();
      initBeams();
    };

    // Initialize particles based on area and density
    const initParticles = () => {
      if (width === 0 || height === 0) return;

      const baseArea = 1920 * 1080;
      const currentArea = width * height;
      const baseCount = 75;
      const calculatedCount = Math.floor((currentArea / baseArea) * baseCount * density);
      const count = Math.max(30, Math.min(prefersReduced ? 30 : 120, calculatedCount));

      particles = [];
      for (let i = 0; i < count; i++) {
        const isGlyph = showGlyphs && Math.random() < 0.18;
        const glyph = isGlyph ? DIGITAL_GLYPHS[Math.floor(Math.random() * DIGITAL_GLYPHS.length)] : undefined;
        const baseRadius = isGlyph ? 6 : Math.random() * 2 + 0.8;
        const baseAlpha = Math.random() * 0.45 + 0.25;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45 * effectiveSpeed,
          vy: (Math.random() - 0.5) * 0.45 * effectiveSpeed,
          radius: baseRadius,
          baseRadius,
          alpha: baseAlpha,
          baseAlpha,
          pulseSpeed: Math.random() * 0.02 + 0.008,
          pulsePhase: Math.random() * Math.PI * 2,
          isGlyph,
          glyph,
        });
      }
    };

    // Initialize subtle cinematic light beams
    const initBeams = () => {
      if (!showBeams) return;
      beams = [
        {
          x: -width * 0.3,
          y: height * 0.2,
          width: width * 0.8,
          height: 120,
          angle: -0.15,
          speed: 0.3 * effectiveSpeed,
          alpha: 0.08 * opacity,
        },
        {
          x: width * 0.4,
          y: height * 0.7,
          width: width * 0.9,
          height: 160,
          angle: -0.22,
          speed: 0.45 * effectiveSpeed,
          alpha: 0.06 * opacity,
        },
      ];
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Main animation loop
    let tick = 0;
    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      tick++;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle cinematic light beams
      if (showBeams && beams.length > 0) {
        for (const beam of beams) {
          beam.x += beam.speed;
          if (beam.x > width + beam.width) {
            beam.x = -beam.width * 1.2;
          }

          ctx.save();
          ctx.translate(beam.x, beam.y);
          ctx.rotate(beam.angle);

          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, beam.width * 0.5);
          grad.addColorStop(0, `hsla(${primaryHue}, ${saturation}%, ${brightness}%, ${beam.alpha})`);
          grad.addColorStop(0.5, `hsla(${secondaryHue}, ${saturation}%, ${brightness}%, ${beam.alpha * 0.4})`);
          grad.addColorStop(1, 'transparent');

          ctx.fillStyle = grad;
          ctx.fillRect(-beam.width * 0.5, -beam.height * 0.5, beam.width, beam.height);
          ctx.restore();
        }
      }

      // 2. Draw connecting lines between close particles
      const maxDistance = 110;
      const maxDistSq = maxDistance * maxDistance;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxDistance) * 0.18 * opacity;
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${primaryHue}, ${saturation}%, ${brightness}%, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // 3. Update & Draw individual particles & digital glyphs
      const mouse = mouseRef.current;
      const mouseRadius = 140;

      for (const p of particles) {
        // Subtle pulsation
        p.pulsePhase += p.pulseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.15;

        // Interactive mouse gentle repulsion
        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouseRadius && mdist > 0) {
            const force = (1 - mdist / mouseRadius) * 1.5;
            p.vx += (mdx / mdist) * force * 0.08;
            p.vy += (mdy / mdist) * force * 0.08;
          }
        }

        // Dampen velocity to prevent explosion
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Apply movement
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders seamlessly
        if (p.x < -20) p.x = width + 20;
        else if (p.x > width + 20) p.x = -20;

        if (p.y < -20) p.y = height + 20;
        else if (p.y > height + 20) p.y = -20;

        // Render particle or digital glyph
        const pAlpha = Math.max(0.05, Math.min(0.9, p.alpha * opacity));

        if (p.isGlyph && p.glyph) {
          ctx.save();
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = `hsla(${primaryHue}, ${saturation}%, ${isDark ? 80 : 30}%, ${pAlpha * 0.65})`;
          ctx.shadowColor = `hsla(${primaryHue}, 100%, 65%, ${pAlpha * 0.5})`;
          ctx.shadowBlur = 6;
          ctx.fillText(p.glyph, p.x, p.y);
          ctx.restore();
        } else {
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${primaryHue}, ${saturation}%, ${isDark ? 75 : 40}%, ${pAlpha})`;
          ctx.shadowColor = `hsla(${primaryHue}, 100%, 60%, ${pAlpha * 0.8})`;
          ctx.shadowBlur = p.radius * 3;
          ctx.fill();
          ctx.restore();
        }
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mode, speed, density, opacity, hue, saturation, brightness, interactive, showBeams, showGlyphs]);

  return (
    <div
      className={cn('relative pointer-events-none overflow-hidden select-none', className)}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
};

export default ParticleDrift;

