import { useScrollReveal } from '../hooks/useScrollReveal';

const items = [
  {
    emoji: '⬇️',
    title: '29,000+ Global Downloads',
    desc: 'Achieved 29,000+ downloads on the Face Recognition Model (koyelog/face) on HuggingFace, reflecting widespread real-world adoption across research and production.',
    color: '#3b82f6',
  },
  {
    emoji: '🧠',
    title: 'Published 411M-Param Medical LLM',
    desc: 'Built and deployed a custom 411M-parameter Medical Large Language Model from scratch. Published publicly on Hugging Face for the global developer community.',
    color: '#a78bfa',
  },
  {
    emoji: '🤗',
    title: 'Multiple HuggingFace Model Publications',
    desc: 'Published multiple Machine Learning and Deep Learning models on Hugging Face spanning NLP, computer vision, and audio — contributing to the open-source AI ecosystem.',
    color: '#fbbf24',
  },
  {
    emoji: '🎤',
    title: 'Technical Workshop Speaker — GDGC MSIT',
    desc: 'Delivered technical workshops and contributed to the GDGC student developer community. Hosted "Going Incognito: App & Cloud Workshop" at MSIT campus.',
    color: '#34d399',
  },
  {
    emoji: '☁️',
    title: 'AWS Certified Solutions Architect Associate',
    desc: 'Achieved AWS Certified Solutions Architect Associate certification (SAA-C03) with hands-on cloud deployment experience on AWS, GCP, and Oracle OCI.',
    color: '#fb923c',
  },
];

export default function Achievements() {
  const ref = useScrollReveal();

  return (
    <section id="achievements" ref={ref} className="section-card py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        <div className="reveal text-center mb-12">
          <div className="section-divider" />
          <h2 className="section-heading mb-3">Achievements &amp; Leadership</h2>
          <p className="section-subtitle">Impact, recognition, and community contributions</p>
        </div>

        <div className="space-y-4">
          {items.map((a, i) => (
            <div key={i} id={`ach-${i}`}
              className={`card reveal d${i + 1} p-6 flex gap-5`}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${a.color}40`; e.currentTarget.style.boxShadow = `0 6px 30px ${a.color}12`; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background:`${a.color}10`, border:`1px solid ${a.color}22` }}>
                {a.emoji}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm mb-1.5">{a.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
