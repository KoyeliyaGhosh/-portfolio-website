import { CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certs = [
  {
    title: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    issuer: 'Amazon Web Services',
    year: '2026', emoji: '☁️', color: '#fb923c',
    desc: 'Validated expertise in designing distributed systems on AWS — compute, storage, networking, and security at scale.',
  },
  {
    title: 'Oracle AI Foundations Associate (OCI)',
    issuer: 'Oracle Cloud Infrastructure',
    year: '2026', emoji: '🔮', color: '#f87171',
    desc: 'Certified in foundational AI/ML concepts and Oracle Cloud AI services including Vision, Language, and Speech.',
  },
  {
    title: 'IBM AI Product Management Professional Certificate',
    issuer: 'IBM / Coursera',
    year: '2025', emoji: '🤖', color: '#60a5fa',
    desc: 'Full lifecycle AI product management — from ideation and data strategy through deployment and iteration.',
  },
  {
    title: 'IBM Introduction to DevOps',
    issuer: 'IBM / Coursera',
    year: '2025', emoji: '⚙️', color: '#818cf8',
    desc: 'CI/CD pipelines, Docker, Kubernetes, Agile methodologies, and modern DevOps culture and practices.',
  },
  {
    title: 'Google Cloud Generative AI, Responsible AI & Gemini Tooling',
    issuer: 'Google Cloud',
    year: '2025', emoji: '✨', color: '#34d399',
    desc: 'Vertex AI, Gemini API, prompt engineering, responsible AI principles, and LLM application development on GCP.',
  },
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" ref={ref} className="section-dark py-24 relative overflow-hidden">
      <div aria-hidden style={{ position:'absolute', left:'-5%', bottom:'10%', width:350, height:350,
        borderRadius:'50%', background:'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)', pointerEvents:'none' }} />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="reveal text-center mb-12">
          <div className="section-divider" />
          <h2 className="section-heading mb-3">Certifications</h2>
          <p className="section-subtitle">Industry credentials &amp; verified expertise</p>
        </div>

        <div className="space-y-3">
          {certs.map((c, i) => (
            <div key={i} id={`cert-${i}`}
              className={`card reveal d${i + 1} p-5 flex gap-4`}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${c.color}35`; e.currentTarget.style.boxShadow = `0 6px 24px ${c.color}12`; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background:`${c.color}12`, border:`1px solid ${c.color}25` }}>
                {c.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-white font-semibold text-sm leading-snug">{c.title}</h3>
                  <CheckCircle size={14} style={{ color:c.color, flexShrink:0 }} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs" style={{ color:c.color, fontWeight:600 }}>{c.issuer}</span>
                  <span className="text-slate-600 text-xs">·</span>
                  <span className="text-xs text-slate-600">{c.year}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
