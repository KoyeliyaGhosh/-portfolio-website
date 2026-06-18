import { Github, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    emoji: '🏥', title: 'MediMind-411M', badge: '411M Params', color: '#14b8a6',
    description: 'A 411M-parameter Medical LLM fine-tuned for clinical Q&A, medical knowledge retrieval, and healthcare assistance. Published on HuggingFace.',
    tech: ['PyTorch','HuggingFace','Transformers','Medical NLP'],
    highlights: ['411M Parameters','HuggingFace Published','Medical Domain'],
    github: 'https://github.com/koyelya2004', hf: 'https://huggingface.co/koyelog',
  },
  {
    emoji: '👤', title: 'Face Recognition Model', badge: '29K+ Downloads', color: '#22d3ee',
    description: 'High-accuracy face recognition model with 29,075+ global downloads on HuggingFace. Robust across diverse lighting and conditions.',
    tech: ['PyTorch','Computer Vision','CNN','OpenCV'],
    highlights: ['29,075+ Downloads','SOTA Accuracy','Global Adoption'],
    github: 'https://github.com/koyelya2004', hf: 'https://huggingface.co/koyelog',
  },
  {
    emoji: '🎨', title: 'Voxel Art Generator v3.0', badge: 'v3.0', color: '#a78bfa',
    description: 'AI-powered voxel art generation with 3D style transfer, improved resolution, and real-time Three.js WebGL preview.',
    tech: ['Python','Three.js','Deep Learning','React'],
    highlights: ['3D Generation','Style Transfer','WebGL Preview'],
    github: 'https://github.com/koyelya2004',
  },
  {
    emoji: '🎙️', title: 'Deepfake Voice Detector', badge: 'SOTA', color: '#f472b6',
    description: 'State-of-the-art deepfake audio detection using wav2vec2. Industry-leading accuracy distinguishing synthetic from authentic voices.',
    tech: ['wav2vec2','PyTorch','Audio ML','FastAPI'],
    highlights: ['SOTA Performance','wav2vec2 Backbone','Real-time'],
    github: 'https://github.com/koyelya2004', hf: 'https://huggingface.co/koyelog',
  },
  {
    emoji: '✈️', title: 'Dhruv AI Tourism Suite', badge: 'Full-Stack AI', color: '#34d399',
    description: 'AI-powered tourism platform with personalized travel recommendations, itinerary planning, and LLM-driven cultural insights.',
    tech: ['LLM','FastAPI','React','Groq','Gemini API'],
    highlights: ['LLM-Powered','Personalization','Real-time'],
    github: 'https://github.com/koyelya2004',
  },
  {
    emoji: '💻', title: 'ReviewCoder AI', badge: 'LLM Tool', color: '#fbbf24',
    description: 'Intelligent code review assistant powered by LLMs — analyzes quality, detects bugs, and provides natural language optimization feedback.',
    tech: ['LLM','FastAPI','React','Groq','TypeScript'],
    highlights: ['AI Analysis','Bug Detection','Multi-language'],
    github: 'https://github.com/koyelya2004',
  },
  {
    emoji: '📈', title: 'Crypto Trading Platform', badge: 'FinTech', color: '#fb923c',
    description: 'Real-time crypto platform with ML price prediction, live market data, portfolio tracking, and automated alert systems.',
    tech: ['React','Node.js','ML Prediction','Firebase'],
    highlights: ['Real-time Data','ML Predictions','Portfolio'],
    github: 'https://github.com/koyelya2004',
  },
  {
    emoji: '🌿', title: 'GreenLens & Monuments CNN', badge: 'Dual Project', color: '#4ade80',
    description: 'Dual CNN project: GreenLens for plant disease detection + a specialized model recognizing 100+ Indian historical monuments.',
    tech: ['EfficientNet','TensorFlow','CNN','Keras'],
    highlights: ['Plant Disease Detection','Monument Recognition','EfficientNet'],
    github: 'https://github.com/koyelya2004',
  },
];

export default function Projects() {
  const ref = useScrollReveal(0.05);

  return (
    <section id="projects" ref={ref} className="hero-bg relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="reveal text-center mb-14">
          <div className="section-divider" />
          <h2 className="section-heading">Projects</h2>
          <p className="section-subtitle">Things I've built and shipped</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <div key={i} id={`proj-${i}`}
              className={`reveal delay-${(i % 6) + 1} group rounded-2xl p-5 border flex flex-col gap-4 transition-all duration-350 cursor-default`}
              style={{
                background: 'rgba(12,25,50,0.6)',
                backdropFilter: 'blur(12px)',
                borderColor: 'rgba(255,255,255,0.07)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${p.color}55`;
                e.currentTarget.style.boxShadow = `0 12px 40px ${p.color}20`;
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl">{p.emoji}</span>
                <span className="px-2 py-1 rounded-full text-xs font-bold"
                  style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}35` }}>
                  {p.badge}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-bold text-sm mb-2 transition-colors"
                  style={{}} onMouseEnter={e => e.currentTarget.style.color = p.color}
                  onMouseLeave={e => e.currentTarget.style.color = ''}>
                  {p.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">{p.description}</p>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1">
                {p.highlights.map(h => (
                  <span key={h} className="px-2 py-0.5 rounded-md text-xs"
                    style={{ background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}25` }}>
                    {h}
                  </span>
                ))}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                {p.tech.slice(0, 4).map(t => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs bg-white/5 text-slate-400"
                    style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                    {t}
                  </span>
                ))}
                {p.tech.length > 4 && (
                  <span className="px-2 py-0.5 rounded text-xs text-slate-500"
                    style={{ background: 'rgba(255,255,255,0.04)' }}>
                    +{p.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  id={`proj-gh-${i}`}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors">
                  <Github size={12} /> Code
                </a>
                {p.hf && (
                  <a href={p.hf} target="_blank" rel="noopener noreferrer"
                    id={`proj-hf-${i}`}
                    className="flex items-center gap-1 text-xs text-slate-400 transition-colors"
                    style={{}} onMouseEnter={e => e.currentTarget.style.color = '#fbbf24'}
                    onMouseLeave={e => e.currentTarget.style.color = ''}>
                    🤗 HuggingFace
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12 reveal">
          <a href="https://github.com/koyelya2004" target="_blank" rel="noopener noreferrer"
            id="proj-view-all" className="btn-outline inline-flex items-center gap-2">
            <Github size={16} />
            View All on GitHub
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
