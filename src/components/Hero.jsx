// src/components/Hero.jsx
import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const roles = [
  'Full Stack Developer',
  'React Developer',
  'Laravel Developer',
  'MERN Stack Developer',
];

const terminalLines = [
  { prefix: '$', text: ' who i am', color: 'text-cyan-400', delay: 300 },
  { prefix: '>', text: ' Mohamed Amalki — Full Stack Dev', color: 'text-green-400', delay: 900 },
  { prefix: '$', text: ' Skills', color: 'text-cyan-400', delay: 1600 },
  { prefix: '>', text: ' React · Laravel · MERN · APIs', color: 'text-purple-400', delay: 2200 },
  { prefix: '$', text: ' location', color: 'text-cyan-400', delay: 2900 },
  { prefix: '>', text: ' Agadir, Morocco 🇲🇦', color: 'text-green-400', delay: 3500 },
  { prefix: '$', text: ' status', color: 'text-cyan-400', delay: 4200 },
  { prefix: '>', text: ' Open to opportunities ✓', color: 'text-yellow-400', delay: 4800 },
];

function TerminalLine({ prefix, text, color, delay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;
  return (
    <div className="flex gap-2 font-mono text-sm leading-relaxed fade-in-up visible">
      <span className="text-slate-500 select-none">{prefix}</span>
      <span className={color}>{text}</span>
    </div>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left — text content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-green-500/20 text-green-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            <div className="space-y-2">
              <p className="text-slate-400 font-mono text-sm tracking-widest uppercase">Hi, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
                <span className="text-white">Mohamed</span>
                <br />
                <span className="text-gradient">Amalki</span>
              </h1>
            </div>

            <div className="h-8 flex items-center">
              <span className="text-xl sm:text-2xl font-semibold text-slate-300">
                {displayed}
                <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-[blink_1s_step-end_infinite]" />
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-lg">
              A motivated Full Stack developer from Agadir, Morocco, building modern web applications
              with React, Laravel, and the MERN Stack. I focus on clean code, intuitive interfaces,
              and scalable architecture — from first commit to final deploy.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-cyan-400 text-navy-900 hover:from-cyan-400 hover:to-cyan-300 transition-all duration-200 glow-cyan"
                style={{ color: '#0A0F1E' }}
              >
                View Projects
              </button>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 rounded-xl font-semibold text-sm glass border border-cyan-500/20 text-slate-200 hover:border-cyan-500/40 hover:text-white transition-all duration-200"
              >
                Contact Me
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-slate-600 text-xs uppercase tracking-widest font-mono">Find me on</span>
              <div className="h-px flex-1 max-w-[40px] bg-slate-700" />
              <a
                href="https://github.com/mohamed2001-dev"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mohamedamalki"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-cyan-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right — terminal window */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md glass rounded-2xl overflow-hidden border border-cyan-500/10 glow-cyan animate-[float_6s_ease-in-out_infinite]">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/3">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-slate-500 text-xs font-mono">~/portfolio — zsh</span>
              </div>
              {/* Terminal body */}
              <div className="p-5 space-y-1.5 min-h-[220px]">
                {terminalLines.map((line, i) => (
                  <TerminalLine key={i} {...line} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors group"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <FiArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
