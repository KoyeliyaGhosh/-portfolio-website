import { useState } from 'react';
import { Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    num: '01', title: 'MediMind-411M', category: 'AI/ML Project',
    tech: ['PyTorch', 'HuggingFace', 'LLM', 'Medical NLP'],
    desc: 'Built a custom 411M-parameter Medical LLM from scratch. Published on Hugging Face for healthcare text generation with multiple iterations.',
    github: 'https://github.com/koyelya2004',
    hf: 'https://huggingface.co/koyelog',
  },
  {
    num: '02', title: 'Face Recognition Model', category: 'Computer Vision',
    tech: ['ViT', 'PyTorch', 'Computer Vision'],
    desc: 'Custom Vision Transformer-based face recognition model. Achieved 29,000+ global downloads — most popular model in the portfolio. MIT License.',
    github: 'https://github.com/koyelya2004',
    hf: 'https://huggingface.co/koyelog',
  },
  {
    num: '03', title: 'Deepfake Voice Detector', category: 'Audio AI',
    tech: ['wav2vec2', 'PyTorch', 'Transfer Learning'],
    desc: 'State-of-the-art deepfake audio detection system. Trained on 8+ datasets including ASVspoof-2021 and WaveFake for reliable classification.',
    github: 'https://github.com/koyelya2004',
    hf: 'https://huggingface.co/koyelog',
  },
  {
    num: '04', title: 'Dhruv AI', category: 'Multi-model AI',
    tech: ['T5', 'BART', 'EfficientNetV2', 'Keras'],
    desc: 'Multi-model AI ecosystem for tourism — monument recognition, itinerary generation, hotel recommendation, sentiment analysis and forecasting.',
    github: 'https://github.com/koyelya2004',
  },
  {
    num: '05', title: 'ReviewCoder', category: 'Full Stack',
    tech: ['React', 'TypeScript', 'Node.js', 'LLM'],
    desc: 'AI-powered code review platform for developers. Bug detection reports, code quality recommendations with secure backend architecture.',
    github: 'https://github.com/koyelya2004',
  },
  {
    num: '06', title: 'Voxel Art Generator v3.0', category: '3D / WebGL',
    tech: ['Three.js', 'React', 'Groq API', 'WebGL'],
    desc: 'AI-powered 3D voxel art generation platform with animated Three.js environments and procedural rendering systems.',
    github: 'https://github.com/koyelya2004',
  },
];

export default function Projects() {
  const ref = useScrollReveal(0.05);
  const [search, setSearch] = useState('');

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase()) ||
    p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section id="projects" ref={ref} className="py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="reveal mb-8">
          <h2 className="section-heading mb-3">
            <span className="code-prefix">{'</>'}</span> PROJECTS
          </h2>
          <div className="gold-line" style={{ maxWidth: 300 }} />
        </div>

        {/* Search */}
        <div className="reveal mb-8">
          <input
            type="text"
            placeholder="Search all projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%', maxWidth: 400, padding: '0.65rem 1rem',
              background: 'rgba(15,20,40,0.7)', border: '1px solid rgba(243,198,35,0.15)',
              borderRadius: 10, color: '#e2e8f0', fontSize: '0.85rem',
              outline: 'none', transition: 'border-color 0.3s',
              fontFamily: "'Fira Code', monospace",
            }}
            onFocus={e => e.currentTarget.style.borderColor = 'rgba(243,198,35,0.4)'}
            onBlur={e => e.currentTarget.style.borderColor = 'rgba(243,198,35,0.15)'}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <div key={i} id={`proj-${i}`}
              className={`card reveal d${(i % 6) + 1} p-6 flex flex-col gap-4 group`}
              style={{ cursor: 'default' }}
            >
              {/* Top row: number + category */}
              <div className="flex items-start justify-between">
                <span style={{ fontSize: '2rem', fontWeight: 900, color: 'rgba(243,198,35,0.15)', fontFamily: "'Fira Code', monospace" }}>{p.num}</span>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#f3c623', background: 'rgba(243,198,35,0.08)', padding: '0.2rem 0.6rem', borderRadius: 6, border: '1px solid rgba(243,198,35,0.15)' }}>
                  {p.category}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem' }}>{p.title}</h3>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map(t => <span key={t} className="tag" style={{ fontSize: '0.65rem' }}>{t}</span>)}
              </div>

              {/* Description */}
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.6, flex: 1 }}>{p.desc}</p>

              {/* Links */}
              <div className="flex gap-4 pt-2" style={{ borderTop: '1px solid rgba(243,198,35,0.08)' }}>
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs transition-colors"
                  style={{ color: '#64748b' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f3c623'}
                  onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                  <Github size={12} /> Code
                </a>
                {p.hf && (
                  <a href={p.hf} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs transition-colors"
                    style={{ color: '#64748b' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f3c623'}
                    onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                    🤗 HuggingFace
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a href="https://github.com/koyelya2004" target="_blank" rel="noopener noreferrer"
            id="proj-all" className="btn-ghost">
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
