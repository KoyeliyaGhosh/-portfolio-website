import { CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certs = [
  {
    title: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    issuer: 'Amazon Web Services', year: '2026', emoji: '☁️',
    desc: 'Validated expertise in designing distributed systems on AWS — compute, storage, networking, and security at scale.',
  },
  {
    title: 'Oracle AI Foundations Associate (OCI)',
    issuer: 'Oracle Cloud Infrastructure', year: '2026', emoji: '🔮',
    desc: 'Certified in foundational AI/ML concepts and Oracle Cloud AI services including Vision, Language, and Speech.',
  },
  {
    title: 'IBM AI Product Management Professional Certificate',
    issuer: 'IBM / Coursera', year: '2025', emoji: '🤖',
    desc: 'Full lifecycle AI product management — from ideation and data strategy through deployment and iteration.',
  },
  {
    title: 'IBM Introduction to DevOps',
    issuer: 'IBM / Coursera', year: '2025', emoji: '⚙️',
    desc: 'CI/CD pipelines, Docker, Kubernetes, Agile methodologies, and modern DevOps culture and practices.',
  },
  {
    title: 'Google Cloud Generative AI, Responsible AI & Gemini Tooling',
    issuer: 'Google Cloud', year: '2025', emoji: '✨',
    desc: 'Vertex AI, Gemini API, prompt engineering, responsible AI principles, and LLM application development on GCP.',
  },
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" ref={ref} className="py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        <div className="reveal mb-12">
          <h2 className="section-heading mb-3">
            <span className="code-prefix">{'</>'}</span> CERTIFICATIONS & TRAINING
          </h2>
          <div className="gold-line" style={{ maxWidth: 500 }} />
        </div>

        <div className="space-y-3">
          {certs.map((c, i) => (
            <div key={i} id={`cert-${i}`} className={`card reveal d${i + 1} p-5 flex gap-4`}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: 'rgba(243,198,35,0.08)', border: '1px solid rgba(243,198,35,0.15)' }}>
                {c.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.9rem' }}>{c.title}</h3>
                  <CheckCircle size={14} style={{ color: '#f3c623', flexShrink: 0 }} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span style={{ fontSize: '0.75rem', color: '#f3c623', fontWeight: 600 }}>{c.issuer}</span>
                  <span style={{ color: '#334155', fontSize: '0.75rem' }}>·</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{c.year}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
