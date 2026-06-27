// src/components/Footer.jsx
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-slate-600">
          <span className="font-mono font-semibold text-slate-400">Mohamed Amalki</span>
          <span className="hidden sm:block text-slate-700">·</span>
          <span className="flex items-center gap-1">
            Built with <FiHeart size={12} className="text-red-400 mx-0.5" /> using React & Tailwind
          </span>
          <span className="hidden sm:block text-slate-700">·</span>
          <span>© {year} All rights reserved</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mohamed2001-dev"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/mohamedamalki"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
