// src/components/About.jsx
import { FiMapPin, FiMail, FiGithub } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import { education, languages } from '../data/portfolioData';

function StatCard({ label, value, color }) {
  return (
    <div className={`glass rounded-xl p-4 text-center border ${color === 'cyan' ? 'border-cyan-500/10' : 'border-purple-500/10'}`}>
      <div className={`text-2xl font-bold font-mono ${color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>{value}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="section-pad">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Left — bio + contact */}
          <div className="space-y-6">
            {/* Profile placeholder */}
            <div className="flex items-start gap-5">
              <div className="w-20 h-20 rounded-2xl border-gradient flex items-center justify-center flex-shrink-0 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                <span className="text-3xl font-bold text-gradient font-mono">MA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Mohamed Amalki</h3>
                <p className="text-cyan-400 text-sm font-mono">Full Stack Web Developer</p>
                <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-1">
                  <FiMapPin size={12} />
                  <span>Agadir, Morocco</span>
                </div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed">
              I'm a dedicated Full Stack developer specializing in building modern, responsive web applications.
              My technical foundation spans the full development spectrum — from crafting clean UIs with React
              and Tailwind CSS to building robust APIs and database architectures with Laravel, Node.js, MySQL, and MongoDB.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Beyond the code, I've built real-world business experience by founding and running my own
              e-commerce operation — managing everything from product logistics to customer relationships
              and sales analytics. That entrepreneurial background gives me a practical understanding of
              what products actually need to solve.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I'm currently completing my Full Stack studies at OFPPT and actively building projects
              with the MERN Stack, REST APIs. I'm open to internships,
              junior roles, and freelance opportunities where I can contribute and keep growing.
            </p>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="mailto:mohamedamalki03@gmail.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors glass px-3 py-2 rounded-lg">
                <FiMail size={14} /> mohamedamalki03@gmail.com
              </a>
              <a href="https://github.com/mohamed2001-dev" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors glass px-3 py-2 rounded-lg">
                <FiGithub size={14} /> mohamed2001-dev
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <StatCard value="3+" label="Projects Built" color="cyan" />
              <StatCard value="5+" label="Technologies" color="purple" />
              <StatCard value="4" label="Languages Spoken" color="cyan" />
            </div>
          </div>

          {/* Right — education + languages */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-5 h-px bg-cyan-400" />
                Education
              </h4>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <div key={i} className="glass rounded-xl p-4 border border-white/5 hover:border-cyan-500/15 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white">{edu.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{edu.org}</p>
                      </div>
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md whitespace-nowrap">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-5 h-px bg-purple-400" />
                Languages
              </h4>
              <div className="space-y-3">
                {languages.map((l, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-300 font-medium">{l.lang}</span>
                      <span className="text-slate-500 font-mono text-xs">{l.level}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${i % 2 === 0 ? 'bg-gradient-to-r from-cyan-500 to-cyan-400' : 'bg-gradient-to-r from-purple-600 to-purple-400'}`}
                        style={{ width: inView ? `${l.pct}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
