import { ArrowUp, Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ background: '#040a12', borderTop: '1px solid rgba(45,212,191,0.07)' }} className="py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-bold text-lg gradient-text mb-0.5">Koyeliya Ghosh.</div>
            <p className="text-slate-600 text-xs">Aspiring AI & Software Developer · Kolkata, India</p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5">
            <a href="https://github.com/koyelya2004" target="_blank" rel="noopener noreferrer"
              id="footer-github" className="text-slate-500 hover:text-white transition-colors">
              <GithubIcon />
            </a>
            <a href="https://linkedin.com/in/koyeliya-ghosh-35718b324" target="_blank" rel="noopener noreferrer"
              id="footer-linkedin" className="text-slate-500 hover:text-blue-400 transition-colors">
              <LinkedinIcon />
            </a>
            <a href="mailto:koyeliya2004@gmail.com"
              id="footer-email" className="text-slate-500 hover:text-teal-400 transition-colors">
              <Mail size={18} />
            </a>
            <a href="https://huggingface.co/koyelog" target="_blank" rel="noopener noreferrer"
              id="footer-hf" className="text-slate-500 hover:text-yellow-400 transition-colors text-lg leading-none">
              🤗
            </a>
          </div>

          {/* Back to top */}
          <button onClick={scrollTop} id="footer-top"
            className="w-9 h-9 rounded-full border border-teal-500/25 flex items-center justify-center text-teal-400 hover:bg-teal-500/10 transition-all hover:scale-110 hover:border-teal-400/50"
            aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-white/5">
          <p className="text-slate-700 text-xs">
            © {new Date().getFullYear()} Koyeliya Ghosh · Built with React, Vite &amp; Tailwind CSS · Made with 💚
          </p>
        </div>
      </div>
    </footer>
  );
}
