import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project?: Project;
  isPlaceholder?: boolean;
  onOpenModal?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isPlaceholder = false,
  onOpenModal,
}) => {
  if (isPlaceholder || !project) {
    return (
      <div className="relative w-full h-full min-h-[340px] rounded-2xl md:rounded-3xl bg-[#080d1a]/60 border border-cyan-500/15 p-6 md:p-8 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#080d1a]/80 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl md:rounded-3xl pointer-events-none" />

        {/* Circular Arrow Button Icon (as seen in IMAGE 2) */}
        <div className="w-14 h-14 rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-all duration-300 mb-5">
          <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>

        <h3 className="font-heading font-semibold text-lg text-white mb-1 group-hover:text-cyan-300 transition-colors">
          More Projects
        </h3>
        <p className="text-xs font-mono uppercase tracking-widest text-slate-500">
          Coming Soon
        </p>
      </div>
    );
  }

  return (
    <div
      data-cursor="project"
      onClick={() => onOpenModal && onOpenModal(project)}
      className="group relative rounded-2xl md:rounded-3xl bg-[#090f1d]/85 border border-cyan-500/20 p-5 overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(0,240,255,0.15)] cursor-pointer flex flex-col justify-between"
    >
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-cyan-300 border border-white/10">
          {project.tags[0]}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
