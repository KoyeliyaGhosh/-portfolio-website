import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpg';

const TypewriterText = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else {
        setIsDeleting(false);
        setTextIndex(i => (i + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="text-teal-400">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-bg grid-overlay overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col-reverse lg:flex-row items-center gap-16 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
            <Cpu size={14} className="animate-pulse" />
            Available for internships & collaborations
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text block md:inline">Koyeliya Ghosh</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-slate-300 mb-4 h-10">
            <TypewriterText texts={['Aspiring AI Developer', 'ML Engineer', 'Deep Learning Enthusiast', 'Open-Source Contributor']} />
          </div>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            CSE student at <span className="text-teal-400 font-semibold">MAKAUT (MSIT)</span>, building intelligent systems with PyTorch, HuggingFace, and modern LLMs. From 411M-param medical models to SOTA deepfake detectors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <a
              href="https://github.com/koyelya2004"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-btn"
              className="btn-primary text-white flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://huggingface.co/koyelog"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-huggingface-btn"
              className="btn-outline flex items-center gap-2"
            >
              🤗 Hugging Face
            </a>
            <a
              href="https://linkedin.com/in/koyeliya-ghosh-35718b324"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin-btn"
              className="btn-outline flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="mailto:koyeliya2004@gmail.com"
              id="hero-email-btn"
              className="btn-outline flex items-center gap-2"
            >
              <Mail size={18} />
              Email Me
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
            {[
              { value: '29K+', label: 'Model Downloads' },
              { value: '411M', label: 'Param Medical LLM' },
              { value: '6+', label: 'HF Models' },
              { value: '4+', label: 'Internships' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Photo */}
        <div className="flex-shrink-0 relative">
          {/* Outer glowing ring */}
          <div className="absolute inset-0 rounded-full animate-glow" style={{ padding: '3px' }}>
            <div className="w-full h-full rounded-full" style={{ background: 'linear-gradient(135deg, #14b8a6, #06b6d4, #818cf8)' }} />
          </div>

          <div className="relative animate-float">
            {/* Spinning border */}
            <div
              className="absolute -inset-3 rounded-full opacity-60"
              style={{
                background: 'conic-gradient(from 0deg, #14b8a6, #06b6d4, #818cf8, #14b8a6)',
                animation: 'spin 8s linear infinite',
                padding: '2px',
                borderRadius: '50%',
              }}
            />
            <div
              className="absolute -inset-3 rounded-full"
              style={{ background: '#050b14', borderRadius: '50%', margin: '2px' }}
            />

            {/* Photo container */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-dark-900">
              <img
                src={profileImg}
                alt="Koyeliya Ghosh"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div
                className="absolute inset-0 hidden items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0f2040, #1a2f4a)' }}
              >
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold gradient-text">KG</div>
                  <div className="text-slate-500 text-xs mt-1">Add profile.jpg</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-dark-800 border border-teal-500/30 rounded-xl px-3 py-2 text-xs font-semibold text-teal-400 shadow-lg shadow-teal-500/10 backdrop-blur-sm">
              🔬 AI/ML
            </div>
            <div className="absolute -bottom-4 -left-4 bg-dark-800 border border-cyan-500/30 rounded-xl px-3 py-2 text-xs font-semibold text-cyan-400 shadow-lg shadow-cyan-500/10 backdrop-blur-sm">
              🤗 Open-Source
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        id="hero-scroll-down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-teal-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>

      {/* CSS for the spinning animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
