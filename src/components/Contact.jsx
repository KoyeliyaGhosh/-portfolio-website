import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const contactInfo = [
  { icon: Mail,  label: 'Email',    value: 'koyeliya2004@gmail.com', href: 'mailto:koyeliya2004@gmail.com', color: '#14b8a6', copy: true },
  { icon: Phone, label: 'Phone',    value: '+91 85830 15279',        href: 'tel:+918583015279',             color: '#22d3ee', copy: true },
  { icon: MapPin,label: 'Location', value: 'Kolkata, West Bengal, India', href: null,                       color: '#34d399', copy: false },
];

const socials = [
  { label: 'GitHub',      icon: <GithubIcon />,  href: 'https://github.com/koyelya2004',                     user: '@koyelya2004',                   bg: 'rgba(255,255,255,0.05)',  border: 'rgba(255,255,255,0.12)', hoverBg: 'rgba(255,255,255,0.1)',  color: '#e2e8f0' },
  { label: 'HuggingFace', icon: <span className="text-xl">🤗</span>, href: 'https://huggingface.co/koyelog', user: '@koyelog',                        bg: 'rgba(255,183,0,0.06)',    border: 'rgba(255,183,0,0.2)',    hoverBg: 'rgba(255,183,0,0.12)', color: '#fbbf24' },
  { label: 'LinkedIn',    icon: <LinkedinIcon />, href: 'https://linkedin.com/in/koyeliya-ghosh-35718b324',   user: 'koyeliya-ghosh-35718b324',        bg: 'rgba(10,102,194,0.07)',   border: 'rgba(10,102,194,0.2)',   hoverBg: 'rgba(10,102,194,0.15)', color: '#60a5fa' },
];

export default function Contact() {
  const [copied, setCopied] = useState(null);
  const ref = useScrollReveal();

  const copy = async (text, label) => {
    try { await navigator.clipboard.writeText(text); setCopied(label); setTimeout(() => setCopied(null), 2000); } catch {}
  };

  return (
    <section id="contact" ref={ref} className="section-bg-alt relative py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="reveal text-center mb-14">
          <div className="section-divider" />
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subtitle">Open to internships, collaborations &amp; interesting conversations</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}
          <div className="space-y-5 reveal-left">
            <div className="card-glass rounded-2xl p-7 border border-teal-500/12">
              <h3 className="text-white font-bold text-lg mb-2">Let's Connect!</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Whether it's an exciting project, research collaboration, or a chat about AI —
                my inbox is always open. I respond within 24 hours.
              </p>

              <div className="space-y-3">
                {contactInfo.map(item => (
                  <div key={item.label}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                    style={{ background: `${item.color}08`, border: `1px solid ${item.color}20` }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}18` }}>
                      <item.icon size={16} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-slate-500 text-xs mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} id={`contact-${item.label.toLowerCase()}`}
                          className="text-sm font-medium hover:underline truncate block transition-colors"
                          style={{ color: item.color }}>
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-slate-300 text-sm">{item.value}</span>
                      )}
                    </div>
                    {item.copy && (
                      <button onClick={() => copy(item.value, item.label)}
                        id={`copy-${item.label.toLowerCase()}`}
                        className="text-slate-500 hover:text-teal-400 transition-colors flex-shrink-0"
                        aria-label={`Copy ${item.label}`}>
                        {copied === item.label
                          ? <Check size={15} style={{ color: item.color }} />
                          : <Copy size={15} />}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Available badge */}
            <div className="card-glass rounded-xl p-4 border border-teal-500/15 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-teal-400 text-sm font-semibold">Open to opportunities</p>
                <p className="text-slate-500 text-xs mt-0.5">ML internships · research · freelance projects</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4 reveal-right">
            <div className="card-glass rounded-2xl p-6 border border-white/5">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Find Me Online</h3>
              <div className="space-y-3">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    id={`social-${s.label.toLowerCase()}`}
                    className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-250 group"
                    style={{ background: s.bg, borderColor: s.border }}
                    onMouseEnter={e => { e.currentTarget.style.background = s.hoverBg; e.currentTarget.style.transform = 'translateX(5px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = s.bg; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <span style={{ color: s.color }}>{s.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-sm" style={{ color: s.color }}>{s.label}</div>
                      <div className="text-slate-500 text-xs">{s.user}</div>
                    </div>
                    <ExternalLink size={14} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Email CTA */}
            <a href="mailto:koyeliya2004@gmail.com" id="contact-email-cta"
              className="btn-primary w-full justify-center py-4 text-base font-semibold rounded-2xl"
              style={{ display: 'flex' }}>
              <Send size={18} className="mr-2" />
              Send Me an Email
            </a>

            {/* Fun fact */}
            <div className="card-glass rounded-xl p-5 border border-violet-500/15 text-center">
              <p className="text-slate-400 text-sm leading-relaxed">
                🌟 My Face Recognition Model has{' '}
                <span className="text-white font-semibold">29,000+</span> downloads globally —
                <span style={{ color: '#a78bfa' }}> built as a student!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
