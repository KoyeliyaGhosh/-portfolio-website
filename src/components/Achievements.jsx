import { useScrollReveal } from '../hooks/useScrollReveal';

const items = [
  {
    emoji: '🔥',
    title: 'Built End-to-End AI Products Independently',
    desc: 'Designed, trained, deployed, and maintained full-stack AI applications integrating Machine Learning models, APIs, cloud deployment, and modern web technologies.',
  },
  {
    emoji: '🌍',
    title: 'Open-Source AI Contributor',
    desc: 'Published public repositories and AI models used by developers, researchers, and students worldwide through GitHub and Hugging Face, encouraging collaborative innovation.',
  },
  {
    emoji: '🎓',
    title: 'Multiple Industry Certifications',
    desc: 'Earned certifications from AWS, Oracle, IBM, Google Cloud, and Coursera in Cloud Computing, Artificial Intelligence, DevOps, and Responsible AI.',
  },
  {
    emoji: '💻',
    title: 'Full-Stack & AI Builder',
    desc: 'Successfully developed projects spanning Medical LLMs, Computer Vision, Tourism AI Systems, Crypto Analytics Platforms, Deepfake Detection, and AI Developer Tools.',
  },
  {
    emoji: '📢',
    title: 'Technical Community Contributor',
    desc: 'Actively contributed to the GDGC MSIT community through app development, technical workshops, and student mentoring initiatives.',
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
