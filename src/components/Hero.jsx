import { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpg';
import NetworkBackground from './NetworkBackground';

/* ── SVG Icons ───────────────────────────────── */
const GithubSVG = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);
const LinkedinSVG = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const MailSVG = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

/* ── Typewriter ─────────────────────────────── */
const Typewriter = ({ items }) => {
  const [text, setText]   = useState('');
  const [idx, setIdx]     = useState(0);
  const [ci, setCi]       = useState(0);
  const [del, setDel]     = useState(false);

  useEffect(() => {
    const cur = items[idx];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      if (!del && ci < cur.length) {
        setText(cur.slice(0, ci + 1)); setCi(c => c + 1);
      } else if (!del && ci === cur.length) {
        setTimeout(() => setDel(true), 2200);
      } else if (del && ci > 0) {
        setText(cur.slice(0, ci - 1)); setCi(c => c - 1);
      } else {
        setDel(false); setIdx(i => (i + 1) % items.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [ci, del, idx, items]);

  return (
    <span style={{ color: '#60a5fa', fontWeight: 600 }}>
      {text}<span style={{ opacity: 0.7, animation: 'pulse 1s infinite' }}>|</span>
    </span>
  );
};

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t); }, []);

  return (
    <section id="home" className="section-dark relative min-h-screen flex items-center overflow-hidden">
      {/* Network background */}
      <NetworkBackground />

      {/* Radial gradients */}
      <div aria-hidden style={{ position:'absolute', inset:0, pointerEvents:'none',
        background:'radial-gradient(ellipse 55% 60% at 15% 50%, rgba(59,130,246,0.07) 0%, transparent 65%), radial-gradient(ellipse 45% 55% at 80% 30%, rgba(16,185,129,0.06) 0%, transparent 65%)' }} />

      <div className={`relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-28 w-full
        flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24
        transition-all duration-900 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDuration: '0.9s' }}
      >

        {/* ── Left: Copy ── */}
        <div className="flex-1 text-center lg:text-left">

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-7"
            style={{ background:'rgba(16,185,129,0.08)', border:'1px solid rgba(16,185,129,0.2)', color:'#34d399' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
            Open to internships &amp; collaborations
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-3">
            Koyeliya Ghosh
          </h1>

          {/* Typewriter role */}
          <p className="text-lg sm:text-xl font-medium text-slate-400 mb-5 h-7">
            <Typewriter items={['AI & Software Developer', 'ML Engineer', 'Deep Learning Researcher', 'Full-Stack Builder']} />
          </p>

          {/* Bio — professional, human */}
          <p className="text-slate-400 text-base max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
            Aspiring AI and Software Developer specializing in Machine Learning, Deep Learning, and Full-Stack Engineering.
            I've published production-grade LLMs on HuggingFace, built SOTA audio deepfake detection systems,
            and shipped end-to-end web applications — all while completing my B.Tech CSE.
          </p>

          {/* Social buttons */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
            <a href="https://github.com/koyelya2004" target="_blank" rel="noopener noreferrer"
              id="hero-gh" className="btn-ghost flex items-center gap-2">
              <GithubSVG /> GitHub
            </a>
            <a href="https://huggingface.co/koyelog" target="_blank" rel="noopener noreferrer"
              id="hero-hf" className="btn-ghost flex items-center gap-2" style={{ color:'#fbbf24' }}>
              <span>🤗</span> Hugging Face
            </a>
            <a href="https://linkedin.com/in/koyeliya-ghosh-35718b324" target="_blank" rel="noopener noreferrer"
              id="hero-li" className="btn-ghost flex items-center gap-2" style={{ color:'#60a5fa' }}>
              <LinkedinSVG /> LinkedIn
            </a>
            <a href="mailto:koyeliya2004@gmail.com"
              id="hero-mail" className="btn-primary flex items-center gap-2">
              <MailSVG /> Get in Touch
            </a>
          </div>

          {/* Quick facts — no stats row, just text chips */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {['B.Tech CSE · MAKAUT MSIT', '5th Semester', 'Kolkata, India'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <div className="flex-shrink-0" style={{ animation:'floatAnim 6s ease-in-out infinite' }}>
          <div style={{
            borderRadius: '50%',
            padding: '3px',
            background: 'linear-gradient(135deg, #3b82f6, #10b981)',
            animation: 'profileGlow 3.5s ease-in-out infinite',
          }}>
            <div style={{ padding:'4px', borderRadius:'50%', background:'#030812' }}>
              <img
                src={profileImg}
                alt="Koyeliya Ghosh"
                style={{ width:250, height:250, borderRadius:'50%', objectFit:'cover', objectPosition:'top', display:'block' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior:'smooth' })}
        id="hero-scroll" aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color:'#475569', border:'none', background:'none', cursor:'pointer' }}
        onMouseEnter={e => e.currentTarget.style.color='#60a5fa'}
        onMouseLeave={e => e.currentTarget.style.color='#475569'}
      >
        <span style={{ fontSize:'0.7rem', letterSpacing:'0.1em', textTransform:'uppercase', fontWeight:500 }}>Scroll</span>
        <div style={{ width:22, height:34, border:'1.5px solid currentColor', borderRadius:12, display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'4px 0' }}>
          <div style={{ width:3, height:7, borderRadius:3, background:'#3b82f6', animation:'fadeUp 1.4s ease infinite' }} />
        </div>
      </button>
    </section>
  );
}
