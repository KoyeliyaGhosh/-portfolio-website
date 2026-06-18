import { Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    emoji: '🏥',
    title: 'MediMind-411M',
    subtitle: 'Medical Large Language Model',
    date: 'May 2026',
    tech: 'PyTorch · HuggingFace Transformers',
    color: '#3b82f6',
    bullets: [
      'Built a custom 411M-parameter Medical LLM from scratch.',
      'Developed multiple iterations with improved performance and capabilities.',
      'Published and maintained publicly on Hugging Face for healthcare text generation.',
    ],
    tags: ['PyTorch', 'HuggingFace', 'LLM', 'Medical NLP'],
    hf: 'https://huggingface.co/koyelog',
    github: 'https://github.com/koyelya2004',
  },
  {
    emoji: '👤',
    title: 'Face Recognition Model',
    subtitle: 'koyelog/face — 29K+ Downloads',
    date: 'Dec 2025',
    tech: 'Vision Transformer · PyTorch',
    color: '#60a5fa',
    bullets: [
      'Developed a custom Vision Transformer-based face recognition model.',
      'Achieved 29,000+ global downloads — most downloaded in the portfolio.',
      'Released publicly under the MIT License.',
    ],
    tags: ['ViT', 'PyTorch', 'Computer Vision', 'MIT License'],
    hf: 'https://huggingface.co/koyelog',
    github: 'https://github.com/koyelya2004',
  },
  {
    emoji: '🎙️',
    title: 'Deepfake Voice Detector',
    subtitle: 'State-of-the-Art Audio Detection',
    date: 'Oct 2025',
    tech: 'wav2vec2 · PyTorch · Transfer Learning',
    color: '#f472b6',
    bullets: [
      'Built a state-of-the-art deepfake audio detection system.',
      'Trained on 8+ datasets including ASVspoof-2021 and WaveFake.',
      'Achieved reliable real vs synthetic audio classification.',
    ],
    tags: ['wav2vec2', 'PyTorch', 'Audio ML', 'Transfer Learning'],
    hf: 'https://huggingface.co/koyelog',
    github: 'https://github.com/koyelya2004',
  },
  {
    emoji: '✈️',
    title: 'Dhruv AI',
    subtitle: 'Tourism Intelligence Platform',
    date: 'Oct 2025',
    tech: 'T5 · BART · EfficientNetV2 · Keras',
    color: '#34d399',
    bullets: [
      'Developed a multi-model AI ecosystem for tourism assistance.',
      'Built monument recognition, itinerary generation and hotel recommendation modules.',
      'Integrated sentiment analysis, forecasting and price prediction systems.',
    ],
    tags: ['T5', 'BART', 'EfficientNetV2', 'Keras', 'Multi-model'],
    github: 'https://github.com/koyelya2004',
  },
  {
    emoji: '💻',
    title: 'ReviewCoder',
    subtitle: 'AI Code Review Platform',
    date: 'May 2026',
    tech: 'React · TypeScript · Node.js',
    color: '#fbbf24',
    bullets: [
      'Built an AI-powered code review platform for developers.',
      'Generated bug detection reports and code quality recommendations.',
      'Developed a secure backend architecture for LLM integration.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'LLM'],
    github: 'https://github.com/koyelya2004',
  },
  {
    emoji: '🎨',
    title: 'Voxel Art Generator v3.0',
    subtitle: 'AI-Powered 3D Generation',
    date: 'May 2026',
    tech: 'React · TypeScript · Three.js · Groq API',
    color: '#a78bfa',
    bullets: [
      'Developed an AI-powered 3D voxel art generation platform.',
      'Built animated Three.js environments and procedural rendering systems.',
      'Deployed a production-ready application with secure AI integration.',
    ],
    tags: ['Three.js', 'React', 'Groq API', 'TypeScript', 'WebGL'],
    github: 'https://github.com/koyelya2004',
  },
];

export default function Projects() {
  const ref = useScrollReveal(0.05);

  return (
    <section id="projects" ref={ref} className="section-card py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="reveal text-center mb-12">
          <div className="section-divider" />
          <h2 className="section-heading mb-3">Projects</h2>
          <p className="section-subtitle">Selected work — built and shipped</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div key={i} id={`proj-${i}`}
              className={`card reveal d${(i % 6) + 1} p-5 flex flex-col gap-3 group`}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${p.color}45`; e.currentTarget.style.boxShadow = `0 10px 40px ${p.color}15`; e.currentTarget.style.transform = 'translateY(-5px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-2">
                <span className="text-2xl">{p.emoji}</span>
                <span className="text-xs mono px-2 py-0.5 rounded" style={{ color:'#475569', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)' }}>
                  {p.date}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-white font-bold text-sm mb-0.5 transition-colors group-hover:text-opacity-90"
                  style={{ '--tw-text-opacity':1 }}
                  onMouseEnter={e => e.currentTarget.style.color = p.color}
                  onMouseLeave={e => e.currentTarget.style.color = ''}
                >{p.title}</h3>
                <p className="text-xs font-medium" style={{ color: p.color }}>{p.subtitle}</p>
                <p className="text-xs mt-1" style={{ color:'#334155' }}>{p.tech}</p>
              </div>

              {/* Bullets */}
              <ul className="space-y-1 flex-1">
                {p.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-xs text-slate-500 leading-relaxed">
                    <span style={{ color: p.color, flexShrink:0 }}>›</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                {p.tags.slice(0, 3).map(t => (
                  <span key={t} className="tag text-xs">{t}</span>
                ))}
                {p.tags.length > 3 && <span className="tag text-xs">+{p.tags.length - 3}</span>}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-1">
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  id={`proj-gh-${i}`}
                  className="flex items-center gap-1 text-xs text-slate-500 hover:text-white transition-colors">
                  <Github size={11} /> Code
                </a>
                {p.hf && (
                  <a href={p.hf} target="_blank" rel="noopener noreferrer"
                    id={`proj-hf-${i}`}
                    className="flex items-center gap-1 text-xs text-slate-500 transition-colors"
                    onMouseEnter={e => e.currentTarget.style.color='#fbbf24'}
                    onMouseLeave={e => e.currentTarget.style.color=''}>
                    🤗 HF
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
