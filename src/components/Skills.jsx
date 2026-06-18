import { Code2, Brain, Globe, Sparkles, Cloud, Wrench } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const cats = [
  {
    icon: Code2, title: 'Languages', gradient: 'linear-gradient(135deg,#7c3aed,#a855f7)',
    bg: 'rgba(124,58,237,0.08)', border: 'rgba(167,139,250,0.2)',
    skills: ['Python','TypeScript','JavaScript','Java','C','SQL','Dart','HTML/CSS'],
  },
  {
    icon: Brain, title: 'ML / Deep Learning', gradient: 'linear-gradient(135deg,#0d9488,#14b8a6)',
    bg: 'rgba(13,148,136,0.08)', border: 'rgba(45,212,191,0.2)',
    skills: ['PyTorch','TensorFlow','Keras','FastAI','scikit-learn','HuggingFace Transformers'],
  },
  {
    icon: Globe, title: 'Web / Backend', gradient: 'linear-gradient(135deg,#0e7490,#06b6d4)',
    bg: 'rgba(6,182,212,0.08)', border: 'rgba(34,211,238,0.2)',
    skills: ['React','Next.js','FastAPI','Flask','Node.js','Express','Vite','Firebase'],
  },
  {
    icon: Sparkles, title: 'AI / LLM', gradient: 'linear-gradient(135deg,#be185d,#ec4899)',
    bg: 'rgba(236,72,153,0.08)', border: 'rgba(244,114,182,0.2)',
    skills: ['LLM Fine-tuning','ViT','wav2vec2','BART','T5','EfficientNet','Groq','Gemini API'],
  },
  {
    icon: Cloud, title: 'Cloud / Deploy', gradient: 'linear-gradient(135deg,#c2410c,#f97316)',
    bg: 'rgba(249,115,22,0.08)', border: 'rgba(251,146,60,0.2)',
    skills: ['Vercel','Render','Replit','AWS SAA-C03','GCP','Oracle OCI','Docker'],
  },
  {
    icon: Wrench, title: 'Tools & Others', gradient: 'linear-gradient(135deg,#334155,#64748b)',
    bg: 'rgba(100,116,139,0.08)', border: 'rgba(148,163,184,0.2)',
    skills: ['GitHub Actions','Kaggle','Google Colab','VS Code','Three.js','Tailwind CSS'],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" ref={ref} className="hero-bg relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="reveal text-center mb-14">
          <div className="section-divider" />
          <h2 className="section-heading">Technical Skills</h2>
          <p className="section-subtitle">Technologies &amp; tools I work with daily</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cats.map(({ icon: Icon, title, gradient, bg, border, skills }, i) => (
            <div
              key={title}
              id={`skill-${i}`}
              className={`reveal delay-${(i % 6) + 1} rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1`}
              style={{
                background: bg,
                borderColor: border,
                boxShadow: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 12px 40px ${bg.replace('0.08','0.25')}`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: gradient }}>
                  <Icon size={18} color="#fff" />
                </div>
                <h3 className="font-bold text-white text-sm">{title}</h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {skills.map(s => (
                  <span key={s}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 transition-all duration-200 cursor-default"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(45,212,191,0.1)';
                      e.currentTarget.style.borderColor = 'rgba(45,212,191,0.3)';
                      e.currentTarget.style.color = '#2dd4bf';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.color = '';
                    }}
                  >{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
