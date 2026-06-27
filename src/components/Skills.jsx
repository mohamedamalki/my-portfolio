// src/components/Skills.jsx
import { FaReact, FaServer, FaDatabase, FaTools, FaRobot } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolioData';

const iconMap = {
  FaReact: FaReact,
  FaServer: FaServer,
  FaDatabase: FaDatabase,
  FaTools: FaTools,
  FaRobot: FaRobot,
};

function SkillBadge({ name, color }) {
  return (
    <span
      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-default
        ${color === 'cyan'
          ? 'bg-cyan-500/8 text-cyan-300 border border-cyan-500/15 hover:bg-cyan-500/15 hover:border-cyan-500/30'
          : 'bg-purple-500/8 text-purple-300 border border-purple-500/15 hover:bg-purple-500/15 hover:border-purple-500/30'
        }`}
    >
      {name}
    </span>
  );
}

function SkillCard({ category, icon, color, items, delay }) {
  const [ref, inView] = useInView(0.1);
  const Icon = iconMap[icon];

  return (
    <div
      ref={ref}
      className={`glass glass-hover rounded-2xl p-6 transition-all duration-700`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
          color === 'cyan' ? 'bg-cyan-500/15 text-cyan-400' : 'bg-purple-500/15 text-purple-400'
        }`}>
          <Icon size={20} />
        </div>
        <h3 className="text-white font-semibold text-sm">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <SkillBadge key={item} name={item} color={color} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-cyan-500/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            A practical toolkit built through real projects, bootcamp training, and continuous self-learning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} {...skill} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
