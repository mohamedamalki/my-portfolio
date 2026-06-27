// src/components/Contact.jsx
import { useState } from 'react';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';

function ContactInfo({ icon: Icon, label, value, href, color }) {
  const content = (
    <div className="flex items-center gap-3 glass rounded-xl p-4 border border-white/5 hover:border-cyan-500/20 transition-all duration-200 group">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
        color === 'cyan' ? 'bg-cyan-500/15 text-cyan-400' : 'bg-purple-500/15 text-purple-400'
      }`}>
        <Icon size={16} />
      </div>
      <div>
        <p className="text-xs text-slate-600 uppercase tracking-wider font-mono">{label}</p>
        <p className="text-sm text-slate-300 group-hover:text-white transition-colors">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{content}</a>;
  }
  return content;
}

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Build a mailto link as fallback (no backend)
    const mailto = `mailto:mohamedamalki03@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setStatus('opened');
  };

  const inputCls = "w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:bg-white/5 transition-all duration-200";

  return (
    <section id="contact" className="section-pad relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-cyan-500/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Let's work together</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            I'm open to internships, junior developer roles, and freelance projects.
            If you have an opportunity or just want to say hello — I'd love to hear from you.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-5 gap-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* info panel */}
          <div className="col-span-full space-y-4 mx-auto w-full max-w-3xl">

            <ContactInfo
              icon={FiMail}
              label="Email"
              value="mohamedamalki03@gmail.com"
              href="mailto:mohamedamalki03@gmail.com"
              color="cyan"
            />
            <ContactInfo
              icon={FiMapPin}
              label="Location"
              value="Agadir, Morocco"
              color="purple"
            />
            <ContactInfo
              icon={FiGithub}
              label="GitHub"
              value="github.com/mohamed2001-dev"
              href="https://github.com/mohamed2001-dev"
              color="cyan"
            />
            <ContactInfo
              icon={FiLinkedin}
              label="LinkedIn"
              value="Connect with me"
              href="https://linkedin.com/in/mohamedamalki"
              color="purple"
            />

            {/* Availability badge */}
            <div className="glass rounded-xl p-4 border border-green-500/15 mt-6">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Currently Available</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Open to internships, junior full-stack roles, and freelance web development projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
