import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const NAV = ['Home', 'About', 'Experience', 'Projects', 'Certifications', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 55);
      const ids = ['home', 'about', 'education', 'skills', 'experience', 'projects', 'certifications', 'achievements', 'contact'];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const isActive = (n) => {
    const id = n.toLowerCase();
    if (id === 'home') return active === 'home';
    return active === id;
  };

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: scrolled ? '0.5rem 0' : '0.9rem 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,15,29,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(243,198,35,0.08)' : 'none',
      }}
    >
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <button onClick={() => go('home')} id="nav-logo" style={{
          display: 'flex', alignItems: 'center', gap: '0.6rem',
          background: 'none', border: 'none', cursor: 'pointer',
        }}>
          <span style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 32, height: 32,
            background: 'linear-gradient(135deg, #f3c623, #ec4899, #a855f7)',
            borderRadius: 8,
            boxShadow: '0 0 15px rgba(243, 198, 35, 0.35)',
            transition: 'all 0.3s ease',
          }}
          className="hover:scale-110 duration-300"
          >
            <Code2 size={16} color="#ffffff" strokeWidth={2.5} />
          </span>
          <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#f1f5f9', letterSpacing: '0.05em', fontFamily: "'Poppins', sans-serif" }}>
            KOYELIYA
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex" style={{
          alignItems: 'center', gap: '0.2rem',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 50, padding: '0.35rem 0.5rem',
          backdropFilter: 'blur(12px)',
        }}>
          {NAV.map(n => (
            <button key={n} id={`nav-${n.toLowerCase()}`} onClick={() => go(n)}
              style={{
                padding: '0.35rem 0.9rem', borderRadius: 50, border: 'none', cursor: 'pointer',
                fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.02em',
                transition: 'all 0.2s ease',
                background: isActive(n) ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: isActive(n) ? '#fff' : '#94a3b8',
              }}
              onMouseEnter={e => { if (!isActive(n)) { e.currentTarget.style.color = '#f1f5f9'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; } }}
              onMouseLeave={e => { if (!isActive(n)) { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent'; } }}
            >
              {n.toUpperCase()}
            </button>
          ))}
        </div>

        {/* HIRE ME CTA */}
        <button onClick={() => go('contact')} id="nav-hire" className="hidden lg:flex"
          style={{
            padding: '0.5rem 1.3rem', borderRadius: 50, border: 'none', cursor: 'pointer',
            fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.03em', color: '#fff',
            background: 'linear-gradient(135deg, #ec4899, #a855f7)',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(168,85,247,0.5)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          HIRE ME
        </button>

        {/* Mobile toggle */}
        <button id="nav-mobile" onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Toggle menu"
          style={{ color: '#64748b', background: 'none', border: 'none', cursor: 'pointer' }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-screen' : 'max-h-0'}`}>
        <div style={{
          padding: '1rem 1.5rem', background: 'rgba(10,15,29,0.97)',
          borderTop: '1px solid rgba(243,198,35,0.08)',
          display: 'flex', flexDirection: 'column', gap: '0.4rem',
        }}>
          {NAV.map(n => (
            <button key={n} id={`mob-${n.toLowerCase()}`} onClick={() => go(n)}
              style={{
                textAlign: 'left', padding: '0.5rem 0', fontSize: '0.9rem', fontWeight: 600,
                background: 'none', border: 'none', cursor: 'pointer',
                color: isActive(n) ? '#f3c623' : '#64748b', transition: 'color 0.2s',
              }}>{n}</button>
          ))}
          <button onClick={() => go('contact')} style={{
            marginTop: '0.5rem', padding: '0.6rem', borderRadius: 50, border: 'none',
            cursor: 'pointer', fontWeight: 700, color: '#fff',
            background: 'linear-gradient(135deg, #ec4899, #a855f7)',
          }}>HIRE ME</button>
        </div>
      </div>
    </nav>
  );
}
