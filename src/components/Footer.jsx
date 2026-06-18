import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-white/5" style={{ background: '#040a11' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold gradient-text mb-1">
              Koyeliya Ghosh<span className="text-teal-400">.</span>
            </div>
            <p className="text-slate-600 text-xs">Aspiring AI & Software Developer · Kolkata, India</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/koyelya2004" target="_blank" rel="noopener noreferrer"
              id="footer-github" className="text-slate-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/koyeliya-ghosh-35718b324" target="_blank" rel="noopener noreferrer"
              id="footer-linkedin" className="text-slate-500 hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:koyeliya2004@gmail.com"
              id="footer-email" className="text-slate-500 hover:text-teal-400 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://huggingface.co/koyelog" target="_blank" rel="noopener noreferrer"
              id="footer-hf" className="text-slate-500 hover:text-yellow-400 transition-colors text-xl">
              🤗
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            id="footer-scroll-top"
            className="w-10 h-10 rounded-full border border-teal-500/30 flex items-center justify-center text-teal-400 hover:bg-teal-500/10 transition-all hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-white/5">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Koyeliya Ghosh · Built with React, Vite & Tailwind CSS · Designed with 💚
          </p>
        </div>
      </div>
    </footer>
  );
}
