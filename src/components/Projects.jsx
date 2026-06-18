import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Star, Download } from 'lucide-react';

const projects = [
  {
    title: 'MediMind-411M',
    emoji: '🏥',
    description: 'A 411M-parameter Medical Large Language Model fine-tuned for clinical question answering, medical knowledge retrieval, and healthcare assistance. Published on HuggingFace with significant downloads.',
    tech: ['PyTorch', 'HuggingFace', 'Transformers', 'Medical NLP', 'LLM', 'Python'],
    color: 'teal',
    badge: '411M Params',
    highlights: ['411M Parameters', 'HuggingFace Published', 'Medical Domain'],
    github: 'https://github.com/koyelya2004',
    hf: 'https://huggingface.co/koyelog',
  },
  {
    title: 'Face Recognition Model',
    emoji: '👤',
    description: 'High-accuracy face recognition and identification model achieving 29,075+ global downloads on HuggingFace. Trained on diverse datasets with robust performance across lighting conditions.',
    tech: ['PyTorch', 'Computer Vision', 'CNN', 'FaceNet', 'OpenCV', 'HuggingFace'],
    color: 'cyan',
    badge: '29K+ Downloads',
    highlights: ['29,075+ Downloads', 'SOTA Accuracy', 'Global Adoption'],
    github: 'https://github.com/koyelya2004',
    hf: 'https://huggingface.co/koyelog',
  },
  {
    title: 'Voxel Art Generator v3.0',
    emoji: '🎨',
    description: 'An AI-powered voxel art generation system using deep learning and 3D rendering. Version 3.0 brings improved resolution, style transfer, and real-time Three.js preview capabilities.',
    tech: ['Python', 'Three.js', 'Deep Learning', 'WebGL', 'React', '3D Rendering'],
    color: 'violet',
    badge: 'v3.0',
    highlights: ['3D Art Generation', 'Three.js Preview', 'Style Transfer'],
    github: 'https://github.com/koyelya2004',
  },
  {
    title: 'Deepfake Voice Detector',
    emoji: '🎙️',
    description: 'State-of-the-art deepfake audio detection system using wav2vec2 architecture. Achieves industry-leading accuracy in distinguishing synthetic from authentic voice recordings.',
    tech: ['wav2vec2', 'PyTorch', 'Audio ML', 'FastAPI', 'HuggingFace', 'Python'],
    color: 'rose',
    badge: 'SOTA',
    highlights: ['SOTA Performance', 'wav2vec2 Backbone', 'Real-time Detection'],
    github: 'https://github.com/koyelya2004',
    hf: 'https://huggingface.co/koyelog',
  },
  {
    title: 'Dhruv AI Tourism Suite',
    emoji: '✈️',
    description: 'Comprehensive AI-powered tourism platform offering personalized travel recommendations, itinerary planning, and cultural insights using LLMs and real-time data integration.',
    tech: ['LLM', 'FastAPI', 'React', 'Groq', 'Gemini API', 'Next.js'],
    color: 'emerald',
    badge: 'Full-Stack AI',
    highlights: ['LLM-Powered', 'Personalization', 'Real-time Data'],
    github: 'https://github.com/koyelya2004',
  },
  {
    title: 'ReviewCoder AI Code Reviewer',
    emoji: '💻',
    description: 'Intelligent code review assistant powered by LLMs that analyzes code quality, identifies bugs, suggests optimizations, and provides detailed feedback in natural language.',
    tech: ['LLM', 'Python', 'FastAPI', 'React', 'Groq API', 'TypeScript'],
    color: 'amber',
    badge: 'LLM Tool',
    highlights: ['AI Code Analysis', 'Bug Detection', 'Multi-language'],
    github: 'https://github.com/koyelya2004',
  },
  {
    title: 'Crypto Trading Platform',
    emoji: '📈',
    description: 'Real-time cryptocurrency trading platform with ML-powered price prediction, portfolio tracking, live market data, and automated alert systems.',
    tech: ['React', 'Node.js', 'ML Prediction', 'WebSockets', 'Firebase', 'Chart.js'],
    color: 'orange',
    badge: 'FinTech',
    highlights: ['Real-time Data', 'ML Predictions', 'Portfolio Tracking'],
    github: 'https://github.com/koyelya2004',
  },
  {
    title: 'GreenLens & Indian Monuments CNN',
    emoji: '🌿',
    description: 'Dual CNN project: GreenLens for plant disease detection and classification, and a specialized CNN model for recognizing 100+ Indian historical monuments with high accuracy.',
    tech: ['EfficientNet', 'TensorFlow', 'CNN', 'Keras', 'Computer Vision', 'FastAPI'],
    color: 'green',
    badge: 'Dual Project',
    highlights: ['Plant Disease Detection', 'Monument Recognition', 'EfficientNet'],
    github: 'https://github.com/koyelya2004',
  },
];

const colorMap = {
  teal: { badge: 'bg-teal-500/15 text-teal-400 border-teal-500/30', tech: 'bg-teal-500/10 text-teal-300 border-teal-500/20', glow: 'rgba(20,184,166,0.15)' },
  cyan: { badge: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30', tech: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20', glow: 'rgba(6,182,212,0.15)' },
  violet: { badge: 'bg-violet-500/15 text-violet-400 border-violet-500/30', tech: 'bg-violet-500/10 text-violet-300 border-violet-500/20', glow: 'rgba(139,92,246,0.15)' },
  rose: { badge: 'bg-rose-500/15 text-rose-400 border-rose-500/30', tech: 'bg-rose-500/10 text-rose-300 border-rose-500/20', glow: 'rgba(244,63,94,0.15)' },
  emerald: { badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30', tech: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20', glow: 'rgba(16,185,129,0.15)' },
  amber: { badge: 'bg-amber-500/15 text-amber-400 border-amber-500/30', tech: 'bg-amber-500/10 text-amber-300 border-amber-500/20', glow: 'rgba(245,158,11,0.15)' },
  orange: { badge: 'bg-orange-500/15 text-orange-400 border-orange-500/30', tech: 'bg-orange-500/10 text-orange-300 border-orange-500/20', glow: 'rgba(249,115,22,0.15)' },
  green: { badge: 'bg-green-500/15 text-green-400 border-green-500/30', tech: 'bg-green-500/10 text-green-300 border-green-500/20', glow: 'rgba(34,197,94,0.15)' },
};

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.project-card').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-28 hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Projects</h2>
        <p className="section-subtitle">Things I've built and shipped</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project, idx) => {
            const colors = colorMap[project.color];
            return (
              <div
                key={idx}
                id={`project-card-${idx}`}
                className="project-card group relative rounded-2xl p-5 border border-white/5 flex flex-col gap-4 cursor-default"
                style={{
                  background: 'rgba(15,32,64,0.6)',
                  backdropFilter: 'blur(12px)',
                  opacity: 0,
                  transform: 'translateY(24px) scale(0.97)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${colors.glow.replace('0.15', '0.4')}`;
                  e.currentTarget.style.boxShadow = `0 8px 32px ${colors.glow}`;
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{project.emoji}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold border ${colors.badge}`}>
                    {project.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-teal-300 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{project.description}</p>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1">
                  {project.highlights.map((h) => (
                    <span key={h} className={`px-2 py-0.5 rounded-md text-xs border ${colors.tech}`}>{h}</span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 pt-1 border-t border-white/5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs bg-white/5 text-slate-400 border border-white/8">{t}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-xs bg-white/5 text-slate-500 border border-white/8">+{project.tech.length - 4}</span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-github-${idx}`}
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={13} />
                    Code
                  </a>
                  {project.hf && (
                    <a
                      href={project.hf}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-hf-${idx}`}
                      className="flex items-center gap-1 text-xs text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      🤗 HuggingFace
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/koyelya2004"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-view-all"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={16} />
            View All on GitHub
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
