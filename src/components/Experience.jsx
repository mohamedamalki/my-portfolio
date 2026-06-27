// src/components/Experience.jsx
import { FiBriefcase, FiCode, FiShoppingBag } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import { experiences } from '../data/portfolioData';

const typeIcon = {
  Development: FiCode,
  Entrepreneurship: FiShoppingBag,
  'Part-time': FiBriefcase,
};

const typeColor = {
  Development: 'cyan',
  Entrepreneurship: 'purple',
  'Part-time': 'cyan',
};

function ExperienceItem({ title, company, period, type, description, index }) {
  const [ref, inView] = useInView(0.1);
  const Icon = typeIcon[type] || FiBriefcase;
  const color = typeColor[type] || 'cyan';
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative grid lg:grid-cols-2 gap-6 lg:gap-12 transition-all duration-700`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Timeline dot (center on desktop) */}
      <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 flex-col items-center z-10">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
          color === 'cyan'
            ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400'
            : 'bg-purple-500/15 border-purple-500/40 text-purple-400'
        }`}>
          <Icon size={16} />
        </div>
      </div>

      {/* Left col */}
      <div className={`${isLeft ? 'lg:text-right' : 'lg:order-2'}`}>
        {isLeft ? (
          <div className="glass rounded-2xl p-6 glass-hover">
            <ExperienceContent {...{ title, company, period, type, description, color }} />
          </div>
        ) : (
          <div className="flex items-center gap-3 lg:justify-start">
            <span className={`font-mono text-sm font-semibold ${color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>{period}</span>
            <span className={`px-2 py-0.5 rounded-md text-xs ${color === 'cyan' ? 'bg-cyan-500/10 text-cyan-300' : 'bg-purple-500/10 text-purple-300'}`}>{type}</span>
          </div>
        )}
      </div>

      {/* Right col */}
      <div className={`${isLeft ? '' : 'lg:order-1'}`}>
        {!isLeft ? (
          <div className="glass rounded-2xl p-6 glass-hover">
            <ExperienceContent {...{ title, company, period, type, description, color }} />
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <span className={`font-mono text-sm font-semibold ${color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>{period}</span>
            <span className={`px-2 py-0.5 rounded-md text-xs ${color === 'cyan' ? 'bg-cyan-500/10 text-cyan-300' : 'bg-purple-500/10 text-purple-300'}`}>{type}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function ExperienceContent({ title, company, description, color }) {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className={`text-sm font-mono mt-0.5 ${color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>{company}</p>
      </div>
      <ul className="space-y-2">
        {description.map((d, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
            <span className={`mt-2 w-1 h-1 rounded-full flex-shrink-0 ${color === 'cyan' ? 'bg-cyan-400' : 'bg-purple-400'}`} />
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">What I've done</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-purple-500/20 to-transparent -translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} {...exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
