import { useEffect, useState, useRef } from 'react';
import profileImg from '../assets/profile.jpg';

/* ── SVG brand icons ─────────────────────────────── */
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const HuggingFaceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
    <text y="78" fontSize="80" textAnchor="middle" x="50">🤗</text>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

/* ── Typewriter ───────────────────────────────────── */
const TypewriterText = ({ texts }) => {
  const [display, setDisplay] = useState('');
  const [tIdx, setTIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = texts[tIdx];
    const speed = deleting ? 55 : 95;
    const t = setTimeout(() => {
      if (!deleting && cIdx < cur.length) {
        setDisplay(cur.slice(0, cIdx + 1));
        setCIdx(c => c + 1);
      } else if (!deleting && cIdx === cur.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && cIdx > 0) {
        setDisplay(cur.slice(0, cIdx - 1));
        setCIdx(c => c - 1);
      } else {
        setDeleting(false);
        setTIdx(i => (i + 1) % texts.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [cIdx, deleting, tIdx, texts]);

  return (
    <span style={{ color: '#2dd4bf' }}>
      {display}<span className="animate-pulse opacity-80">|</span>
    </span>
  );
};

/* ── Floating particles (CSS-only, lightweight) ─── */
const Particles = () => {
  const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1.5,
    delay: Math.random() * 8,
    duration: Math.random() * 8 + 10,
    opacity: Math.random() * 0.4 + 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
            background: p.id % 3 === 0
              ? 'rgba(20,184,166,0.8)'
              : p.id % 3 === 1
              ? 'rgba(6,182,212,0.6)'
              : 'rgba(167,139,250,0.5)',
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles />

      <div className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28
        flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-20
        transition-all duration-1000 ease-out
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >

        {/* ── Left: Text ── */}
        <div className="flex-1 text-center lg:text-left">

          {/* Available tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-7"
            style={{
              background: 'rgba(20,184,166,0.1)',
              border: '1px solid rgba(20,184,166,0.25)',
              color: '#2dd4bf',
            }}>
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-[3.8rem] font-extrabold text-white leading-tight mb-4 tracking-tight">
            Hi, I'm{' '}
            <span className="gradient-text">Koyeliya Ghosh</span>
          </h1>

          {/* Typewriter */}
          <p className="text-xl md:text-2xl font-semibold text-slate-300 mb-5 h-8">
            <TypewriterText texts={['Aspiring AI Developer', 'ML Engineer', 'Deep Learning Enthusiast', 'Open-Source Builder']} />
          </p>

          {/* Bio */}
          <p className="text-slate-400 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            CSE student at <span style={{ color: '#2dd4bf', fontWeight: 600 }}>MAKAUT (MSIT)</span>, building
            intelligent systems — from 411M-param Medical LLMs to SOTA deepfake detectors with PyTorch &amp; HuggingFace.
          </p>

          {/* ── Social Buttons ── */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
            <a href="https://github.com/koyelya2004" target="_blank" rel="noopener noreferrer"
              id="hero-github" className="social-btn social-btn-github">
              <GithubIcon />
              GitHub
            </a>
            <a href="https://huggingface.co/koyelog" target="_blank" rel="noopener noreferrer"
              id="hero-hf" className="social-btn social-btn-hf">
              <span style={{ fontSize: 16 }}>🤗</span>
              Hugging Face
            </a>
            <a href="https://linkedin.com/in/koyeliya-ghosh-35718b324" target="_blank" rel="noopener noreferrer"
              id="hero-linkedin" className="social-btn social-btn-linkedin">
              <LinkedinIcon />
              LinkedIn
            </a>
            <a href="mailto:koyeliya2004@gmail.com"
              id="hero-email" className="social-btn social-btn-email">
              <EmailIcon />
              Email Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
            {[
              { v: '29K+', l: 'HF Downloads' },
              { v: '411M', l: 'Param LLM' },
              { v: '6+',   l: 'Open Models' },
              { v: '4+',   l: 'Internships' },
            ].map(({ v, l }) => (
              <div key={l} className="text-center">
                <div className="text-2xl font-bold gradient-text">{v}</div>
                <div className="text-slate-500 text-xs mt-0.5 font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Profile Photo ── */}
        <div className="flex-shrink-0 flex flex-col items-center gap-5">
          <div style={{ animation: 'floatPhoto 5s ease-in-out infinite' }}>
            {/* Outer gradient ring */}
            <div style={{
              padding: '3px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #14b8a6, #06b6d4, #a78bfa, #14b8a6)',
              animation: 'photoGlow 3.5s ease-in-out infinite',
            }}>
              {/* Inner white gap */}
              <div style={{ padding: '4px', borderRadius: '50%', background: '#060d1a' }}>
                <img
                  src={profileImg}
                  alt="Koyeliya Ghosh"
                  className="rounded-full object-cover object-top"
                  style={{
                    width: 230,
                    height: 230,
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Name tag below photo */}
          <div className="text-center px-5 py-3 rounded-2xl"
            style={{
              background: 'rgba(12,25,50,0.8)',
              border: '1px solid rgba(45,212,191,0.18)',
              backdropFilter: 'blur(12px)',
            }}>
            <div className="font-bold text-white text-sm">Koyeliya Ghosh</div>
            <div className="text-xs" style={{ color: '#2dd4bf' }}>AI &amp; Software Developer</div>
          </div>

          {/* Floating skill chips */}
          <div className="flex gap-2">
            {['PyTorch', 'LLMs', 'CV'].map((t, i) => (
              <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: 'rgba(20,184,166,0.12)',
                  border: '1px solid rgba(20,184,166,0.25)',
                  color: '#2dd4bf',
                  animationDelay: `${i * 0.3}s`,
                }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button onClick={() => scrollTo('about')} id="hero-scroll"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-teal-400 transition-colors group">
        <span className="text-xs font-medium group-hover:text-teal-400 transition-colors">Scroll</span>
        <div className="w-5 h-8 border-2 border-slate-600 group-hover:border-teal-400 rounded-full flex items-start justify-center pt-1 transition-colors">
          <div className="w-1 h-2 bg-teal-400 rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
}
