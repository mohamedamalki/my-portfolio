// src/components/Training.jsx
import { FiAward, FiClock, FiCalendar } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import { trainings } from '../data/portfolioData';

function TrainingCard({ title, org, period, duration, description, skills, color, delay }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className="glass glass-hover rounded-2xl p-7 flex flex-col gap-5 transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
          color === 'cyan' ? 'bg-cyan-500/15 text-cyan-400' : 'bg-purple-500/15 text-purple-400'
        }`}>
          <FiAward size={22} />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg leading-snug">{title}</h3>
          <p className={`font-mono text-sm mt-0.5 ${color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>{org}</p>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-mono">
        <span className="flex items-center gap-1.5">
          <FiCalendar size={12} />
          {period}
        </span>
        <span className="flex items-center gap-1.5">
          <FiClock size={12} />
          {duration}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map(s => (
          <span
            key={s}
            className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
              color === 'cyan'
                ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/15'
                : 'bg-purple-500/10 text-purple-300 border border-purple-500/15'
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Training() {
  return (
    <section id="training" className="section-pad">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">How I sharpened my skills</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Training & <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {trainings.map((t, i) => (
            <TrainingCard key={t.title} {...t} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
