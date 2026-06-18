import { useScrollReveal } from '../hooks/useScrollReveal';

const items = [
  {
    emoji: '⬇️',
    title: '29,000+ Global Downloads',
    desc: 'Achieved 29,000+ downloads on the Face Recognition Model (koyelog/face) on HuggingFace, reflecting widespread real-world adoption across research and production.',
  },
  {
    emoji: '🧠',
    title: 'Published 411M-Param Medical LLM',
    desc: 'Built and deployed a custom 411M-parameter Medical Large Language Model from scratch. Published publicly on Hugging Face for the global developer community.',
  },
  {
    emoji: '🤗',
    title: 'Multiple HuggingFace Model Publications',
    desc: 'Published multiple Machine Learning and Deep Learning models on Hugging Face spanning NLP, computer vision, and audio — contributing to the open-source AI ecosystem.',
  },
  {
    emoji: '🎤',
    title: 'Technical Workshop Speaker — GDGC MSIT',
    desc: 'Delivered technical workshops and contributed to the GDGC student developer community. Hosted "Going Incognito: App & Cloud Workshop" at MSIT campus.',
  },
  {
    emoji: '☁️',
    title: 'AWS Certified Solutions Architect Associate',
    desc: 'Achieved AWS Certified Solutions Architect Associate certification (SAA-C03) with hands-on cloud deployment experience on AWS, GCP, and Oracle OCI.',
  },
];

export default function Achievements() {
  const ref = useScrollReveal();

  return (
    <section id="achievements" ref={ref} className="py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        <div className="reveal mb-12">
          <h2 className="section-heading mb-3">
            <span className="code-prefix">{'</>'}</span> ACHIEVEMENTS & LEADERSHIP
          </h2>
          <div className="gold-line" style={{ maxWidth: 500 }} />
        </div>

        <div className="space-y-4">
          {items.map((a, i) => (
            <div key={i} id={`ach-${i}`} className={`card reveal d${i + 1} p-6 flex gap-5`}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: 'rgba(243,198,35,0.08)', border: '1px solid rgba(243,198,35,0.15)' }}>
                {a.emoji}
              </div>
              <div className="flex-1">
                <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.35rem' }}>{a.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
