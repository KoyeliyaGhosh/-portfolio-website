import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV = ['Home', 'About', 'Experience', 'Projects', 'Certifications', 'Contact'];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 55);
      const ids = [...NAV].map(n => n.toLowerCase());
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

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 50,
        padding: scrolled ? '0.6rem 0' : '1.1rem 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(5,2,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
      }}>

        {/* Logo / Brand */}
        <button
          onClick={() => go('home')}
          id="nav-logo"
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            background: 'none', border: 'none', cursor: 'pointer',
          }}
        >
          {/* Diamond icon */}
          <span style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 30, height: 30,
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            borderRadius: 6,
            transform: 'rotate(45deg)',
          }}>
            <span style={{ transform: 'rotate(-45deg)', color: '#fff', fontSize: '0.7rem', fontWeight: 800 }}>K</span>
          </span>
          <span style={{
            fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.01em',
            color: '#f1f5f9',
          }}>
            KOYELIYA
          </span>
        </button>

        {/* Desktop nav — pill container */}
        <div
          className="hidden lg:flex"
          style={{
            alignItems: 'center', gap: '0.25rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 50,
            padding: '0.4rem 0.75rem',
            backdropFilter: 'blur(12px)',
          }}
        >
          {NAV.map(n => {
            const isActive = active === n.toLowerCase();
            return (
              <button
                key={n}
                id={`nav-${n.toLowerCase()}`}
                onClick={() => go(n)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: 50,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'rgba(255,255,255,0.12)' : 'transparent',
                  color: isActive ? '#ffffff' : '#94a3b8',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = '#f1f5f9'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent'; } }}
              >
                {n.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* CTA — "HIRE ME" style */}
        <button
          onClick={() => go('contact')}
          id="nav-hire"
          className="hidden lg:flex"
          style={{
            padding: '0.55rem 1.4rem',
            borderRadius: 50,
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.02em',
            color: '#fff',
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            boxShadow: '0 0 0 0 rgba(139,92,246,0)',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(139,92,246,0.5)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 0 0 0 rgba(139,92,246,0)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          HIRE ME
        </button>

        {/* Mobile toggle */}
        <button
          id="nav-mobile"
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Toggle menu"
          style={{ color: '#64748b', background: 'none', border: 'none', cursor: 'pointer' }}
          onMouseEnter={e => e.currentTarget.style.color = '#8b5cf6'}
          onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-screen' : 'max-h-0'}`}>
        <div style={{
          padding: '1rem 1.5rem 1.25rem',
          background: 'rgba(5,2,15,0.97)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', flexDirection: 'column', gap: '0.5rem',
        }}>
          {NAV.map(n => (
            <button
              key={n}
              id={`mob-${n.toLowerCase()}`}
              onClick={() => go(n)}
              style={{
                textAlign: 'left', padding: '0.5rem 0',
                fontSize: '0.9rem', fontWeight: 600,
                background: 'none', border: 'none', cursor: 'pointer',
                color: active === n.toLowerCase() ? '#8b5cf6' : '#64748b',
                transition: 'color 0.2s',
              }}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            style={{
              marginTop: '0.5rem', padding: '0.6rem 1.2rem',
              borderRadius: 50, border: 'none', cursor: 'pointer',
              fontSize: '0.85rem', fontWeight: 700,
              color: '#fff',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            }}
          >
            HIRE ME
          </button>
        </div>
      </div>
    </nav>
  );
}
