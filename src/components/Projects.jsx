// src/components/Projects.jsx
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolioData';

function ProjectCard({ title, description, tech, features, demo, github, color, delay }) {
  const [ref, inView] = useInView(0.05);

  return (
    <div
      ref={ref}
      className="glass rounded-2xl overflow-hidden border border-white/5 flex flex-col group transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Card top accent */}
      <div className={`h-px w-full ${color === 'cyan' ? 'bg-gradient-to-r from-transparent via-cyan-500 to-transparent' : 'bg-gradient-to-r from-transparent via-purple-500 to-transparent'} opacity-50 group-hover:opacity-100 transition-opacity`} />

      {/* Hover glow top strip */}
      <div className={`h-32 ${color === 'cyan' ? 'bg-gradient-to-b from-cyan-500/5' : 'bg-gradient-to-b from-purple-500/5'} to-transparent`} />

      <div className="px-6 pb-6 -mt-28 flex flex-col flex-1 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-white font-bold text-lg leading-tight">{title}</h3>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">{description}</p>
        </div>

        {/* Features */}
        <ul className="space-y-1">
          {features.map(f => (
            <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
              <span className={`w-1 h-1 rounded-full flex-shrink-0 ${color === 'cyan' ? 'bg-cyan-400' : 'bg-purple-400'}`} />
              {f}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {tech.map(t => (
            <span
              key={t}
              className={`text-xs px-2 py-1 rounded-md font-mono ${
                color === 'cyan'
                  ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/15'
                  : 'bg-purple-500/10 text-purple-300 border border-purple-500/15'
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            <FiGithub size={14} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-purple-500/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">What I've built</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            A selection of projects that showcase my full-stack capabilities — from concept to code.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} delay={i * 80} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/mohamed2001-dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-mono border-b border-dashed border-slate-700 hover:border-cyan-400 pb-0.5"
          >
            <FiGithub size={14} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
