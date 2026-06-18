import { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpg';

/* ── Typewriter ─────────────────────────────── */
const Typewriter = ({ items }) => {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = items[idx];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del && ci < cur.length) {
        setText(cur.slice(0, ci + 1)); setCi(c => c + 1);
      } else if (!del && ci === cur.length) {
        setTimeout(() => setDel(true), 2400);
      } else if (del && ci > 0) {
        setText(cur.slice(0, ci - 1)); setCi(c => c - 1);
      } else {
        setDel(false); setIdx(i => (i + 1) % items.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [ci, del, idx, items]);

  return (
    <span style={{ color: '#f3c623', fontWeight: 700 }}>
      {text}<span className="cursor-blink">|</span>
    </span>
  );
};

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section id="home" style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
      overflow: 'hidden',
    }}>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: 1200, margin: '0 auto', padding: '0 2rem', width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '3rem', paddingTop: 100, paddingBottom: 80, flexWrap: 'wrap',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.9s ease, transform 0.9s ease',
      }}>

        {/* LEFT: Text */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 560 }}>
          <p style={{
            color: '#64748b', fontSize: '0.85rem', fontWeight: 500,
            letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.75rem',
          }}>
            HEY, I'M
          </p>

          <h1 style={{ lineHeight: 1.05, marginBottom: '1rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
            <span style={{ display: 'block', fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#ffffff' }}>
              Koyeliya
            </span>
            <span style={{
              display: 'block', fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              color: '#f3c623',
              textShadow: '0 0 40px rgba(243,198,35,0.35)',
            }}>
              Ghosh
            </span>
          </h1>

          <p style={{
            fontSize: '1.1rem', fontWeight: 600, color: '#64748b', marginBottom: '1.25rem',
            fontFamily: "'Fira Code', monospace", minHeight: '1.8rem',
          }}>
            <span style={{ color: '#f3c623', marginRight: '0.5rem' }}>{'>'}</span>
            <Typewriter items={['AI & Software Developer', 'ML Engineer', 'Deep Learning Researcher', 'Full-Stack Builder']} />
          </p>

          <p style={{
            color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.75,
            maxWidth: 480, marginBottom: '2rem',
          }}>
            Building intelligent systems across AI, data, and full-stack development —
            from machine learning models to production-ready applications. Passionate
            about creating scalable, high-performance solutions with real-world impact.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <button id="hero-work" className="btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              VIEW MY WORK
            </button>
            <button id="hero-contact" className="btn-ghost"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              GET IN TOUCH
            </button>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['B.Tech CSE · MAKAUT MSIT', '5th Semester', 'Kolkata, India'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* RIGHT: Profile */}
        <div style={{ flexShrink: 0, animation: 'floatAnim 6s ease-in-out infinite', position: 'relative' }}>
          <div style={{
            borderRadius: 28, overflow: 'hidden', width: 300, height: 380,
            border: '2px solid rgba(243,198,35,0.25)',
            boxShadow: '0 0 60px rgba(243,198,35,0.12), 0 20px 80px rgba(0,0,0,0.6)',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, #f3c623 0%, #ec4899 40%, #a855f7 70%, #3b82f6 100%)',
            }} />
            <img src={profileImg} alt="Koyeliya Ghosh" style={{
              position: 'relative', width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top center', display: 'block',
            }} />
          </div>

          {/* Available badge */}
          <div style={{
            position: 'absolute', bottom: -14, left: '50%', transform: 'translateX(-50%)',
            background: 'rgba(10,15,29,0.95)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(243,198,35,0.2)', borderRadius: 30,
            padding: '0.4rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
            whiteSpace: 'nowrap', boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%', background: '#22c55e',
              boxShadow: '0 0 8px #22c55e', display: 'inline-block',
              animation: 'pulse 1.5s ease infinite',
            }} />
            <span style={{ color: '#e2e8f0', fontSize: '0.8rem', fontWeight: 500 }}>Available for work</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        id="hero-scroll" aria-label="Scroll down"
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          color: '#475569', border: 'none', background: 'none', cursor: 'pointer', zIndex: 10,
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#f3c623'}
        onMouseLeave={e => e.currentTarget.style.color = '#475569'}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>SCROLL</span>
        <div style={{
          width: 22, height: 36, border: '1.5px solid currentColor', borderRadius: 12,
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '5px 0',
        }}>
          <div style={{ width: 3, height: 8, borderRadius: 3, background: '#f3c623', animation: 'fadeUp 1.4s ease infinite' }} />
        </div>
      </button>
    </section>
  );
}
