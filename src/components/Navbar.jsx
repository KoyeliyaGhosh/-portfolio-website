import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV = ['Home','About','Education','Skills','Experience','Projects','Certifications','Achievements','Contact'];

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
    window.addEventListener('scroll', onScroll, { passive:true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior:'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
      style={scrolled ? {
        background:'rgba(3,8,18,0.92)',
        backdropFilter:'blur(20px)',
        WebkitBackdropFilter:'blur(20px)',
        borderBottom:'1px solid rgba(255,255,255,0.06)',
        boxShadow:'0 1px 30px rgba(0,0,0,0.5)',
      } : { background:'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => go('home')} id="nav-logo"
          className="font-black text-base tracking-tight"
          style={{ background:'linear-gradient(135deg,#60a5fa,#34d399)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', border:'none', cursor:'pointer' }}>
          Koyeliya.
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV.map(n => (
            <button key={n} id={`nav-${n.toLowerCase()}`}
              onClick={() => go(n)}
              className={`nav-link ${active === n.toLowerCase() ? 'active' : ''}`}>
              {n}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button onClick={() => go('contact')} id="nav-contact"
          className="hidden lg:flex btn-primary text-sm">
          Contact Me
        </button>

        {/* Mobile toggle */}
        <button id="nav-mobile" onClick={() => setOpen(!open)}
          className="lg:hidden" aria-label="Toggle menu"
          style={{ color:'#64748b', background:'none', border:'none', cursor:'pointer' }}
          onMouseEnter={e=>e.currentTarget.style.color='#60a5fa'}
          onMouseLeave={e=>e.currentTarget.style.color='#64748b'}>
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-6 pt-4 pb-5 flex flex-col gap-2.5"
          style={{ background:'rgba(3,8,18,0.97)', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
          {NAV.map(n => (
            <button key={n} id={`mob-${n.toLowerCase()}`} onClick={() => go(n)}
              className={`text-left py-1.5 text-sm font-medium transition-colors ${active === n.toLowerCase() ? 'text-blue-400' : 'text-slate-500 hover:text-white'}`}
              style={{ background:'none', border:'none', cursor:'pointer' }}>
              {n}
            </button>
          ))}
          <button onClick={() => go('contact')} className="btn-primary text-sm justify-center mt-2">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}
