import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Achievements', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.toLowerCase());
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-dark-900/95 backdrop-blur-md border-b border-teal-500/10 shadow-lg shadow-black/20' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          id="nav-logo"
        >
          KG<span className="text-teal-400">.</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              id={`nav-${item.toLowerCase()}`}
              onClick={() => scrollTo(item)}
              className={`nav-link text-sm ${activeSection === item.toLowerCase() ? 'text-teal-400' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="mailto:koyeliya2004@gmail.com"
          id="nav-hire-btn"
          className="hidden md:inline-flex btn-primary text-white items-center gap-2"
        >
          Hire Me
        </a>

        {/* Mobile Menu Toggle */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-teal-400 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 bg-dark-800/98 backdrop-blur-md border-t border-teal-500/10 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              id={`mobile-nav-${item.toLowerCase()}`}
              onClick={() => scrollTo(item)}
              className={`text-left py-2 font-medium transition-colors ${
                activeSection === item.toLowerCase() ? 'text-teal-400' : 'text-slate-300 hover:text-teal-400'
              }`}
            >
              {item}
            </button>
          ))}
          <a
            href="mailto:koyeliya2004@gmail.com"
            className="btn-primary text-white text-center mt-2"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
