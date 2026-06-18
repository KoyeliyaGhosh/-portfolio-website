import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Achievements', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = [...navItems].map(i => i.toLowerCase());
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'py-3 shadow-2xl'
          : 'py-5'
      }`}
      style={scrolled ? {
        background: 'rgba(6,13,26,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(45,212,191,0.1)',
      } : { background: 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('home')} id="nav-logo"
          className="text-lg font-bold tracking-tight"
          style={{ background: 'linear-gradient(135deg,#2dd4bf,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Koyeliya<span style={{ color: '#2dd4bf', WebkitTextFillColor: '#2dd4bf' }}>.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <button key={item} id={`nav-${item.toLowerCase()}`}
              onClick={() => scrollTo(item)}
              className={`nav-link ${activeSection === item.toLowerCase() ? 'text-teal-400' : ''}`}>
              {item}
            </button>
          ))}
        </div>

        {/* Contact CTA — scrolls to #contact */}
        <button
          onClick={() => scrollTo('contact')}
          id="nav-contact-btn"
          className="hidden md:flex btn-primary text-sm"
        >
          Contact Me
        </button>

        {/* Mobile toggle */}
        <button id="nav-mobile-toggle" onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-teal-400 transition-colors">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-6 pt-4 pb-6 flex flex-col gap-3"
          style={{ background: 'rgba(6,13,26,0.98)', borderTop: '1px solid rgba(45,212,191,0.1)' }}>
          {navItems.map((item) => (
            <button key={item} id={`mob-nav-${item.toLowerCase()}`}
              onClick={() => scrollTo(item)}
              className={`text-left py-2 font-medium transition-colors text-sm ${
                activeSection === item.toLowerCase() ? 'text-teal-400' : 'text-slate-300 hover:text-teal-400'
              }`}>
              {item}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')} className="btn-primary text-sm justify-center mt-2">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}
