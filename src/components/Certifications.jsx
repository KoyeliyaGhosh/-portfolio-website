import { CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certs = [
  {
    emoji: '☁️', title: 'AWS Solutions Architect Associate (SAA-C03)',
    issuer: 'Amazon Web Services', year: '2026', category: 'Cloud',
    color: '#fb923c', bg: 'rgba(249,115,22,0.08)', border: 'rgba(251,146,60,0.2)',
    description: 'Validated expertise in designing distributed AWS systems covering compute, storage, networking, and security.',
  },
  {
    emoji: '🔮', title: 'Oracle AI Foundations Associate',
    issuer: 'Oracle', year: '2026', category: 'AI/Cloud',
    color: '#f87171', bg: 'rgba(239,68,68,0.08)', border: 'rgba(248,113,113,0.2)',
    description: 'Certified in foundational AI/ML and Oracle Cloud AI services including OCI Vision, Language, and Speech.',
  },
  {
    emoji: '🤖', title: 'IBM AI Product Management',
    issuer: 'IBM / Coursera', year: '2025', category: 'Product & AI',
    color: '#60a5fa', bg: 'rgba(59,130,246,0.08)', border: 'rgba(96,165,250,0.2)',
    description: 'Managing AI products through full lifecycle — ideation, data strategy, deployment, and iteration.',
  },
  {
    emoji: '⚙️', title: 'IBM DevOps and Software Engineering',
    issuer: 'IBM / Coursera', year: '2025', category: 'DevOps',
    color: '#818cf8', bg: 'rgba(99,102,241,0.08)', border: 'rgba(129,140,248,0.2)',
    description: 'CI/CD pipelines, containerization with Docker/Kubernetes, Agile methodologies, and DevOps culture.',
  },
  {
    emoji: '✨', title: 'Google Cloud Gen AI & Gemini Tooling',
    issuer: 'Google Cloud', year: '2025', category: 'GenAI',
    color: '#2dd4bf', bg: 'rgba(20,184,166,0.08)', border: 'rgba(45,212,191,0.2)',
    description: 'Vertex AI, Gemini API, prompt engineering, and LLM application development on Google Cloud.',
  },
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" ref={ref} className="section-bg-alt relative py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="reveal text-center mb-14">
          <div className="section-divider" />
          <h2 className="section-heading">Certifications</h2>
          <p className="section-subtitle">Credentials that validate my expertise</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {certs.map((c, i) => (
            <div key={i} id={`cert-${i}`}
              className={`reveal delay-${i + 1} rounded-2xl p-6 border flex gap-4 transition-all duration-300 hover:-translate-y-1`}
              style={{ background: c.bg, borderColor: c.border }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 12px 32px ${c.bg.replace('0.08','0.25')}`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: c.bg.replace('0.08','0.2') }}>
                {c.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold text-sm leading-snug">{c.title}</h3>
                  <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: c.color }} />
                </div>
                <div className="text-slate-400 text-xs mb-1">{c.issuer} · {c.year}</div>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">{c.description}</p>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{ background: `${c.color}18`, color: c.color, border: `1px solid ${c.color}35` }}>
                  {c.category}
                </span>
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="md:col-span-2 reveal card-glass rounded-2xl p-6 border border-teal-500/15">
            <div className="flex flex-wrap justify-around gap-6 text-center">
              {[
                { v: '5', l: 'Certifications', e: '🏆' },
                { v: '3', l: 'Cloud Platforms', e: '☁️' },
                { v: '2', l: 'IBM Credentials', e: '🤖' },
                { v: '2026', l: 'Latest Year', e: '📅' },
              ].map(({ v, l, e }) => (
                <div key={l}>
                  <div className="text-xl mb-1">{e}</div>
                  <div className="text-2xl font-bold gradient-text">{v}</div>
                  <div className="text-slate-500 text-xs">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
