import { useEffect, useRef } from 'react';
import { Code2, Brain, Globe, Sparkles, Cloud, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    color: 'from-violet-500/20 to-purple-500/20',
    iconColor: 'text-violet-400',
    borderColor: 'border-violet-500/20 hover:border-violet-400/40',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'SQL', 'Dart', 'HTML/CSS'],
  },
  {
    icon: Brain,
    title: 'ML / Deep Learning',
    color: 'from-teal-500/20 to-emerald-500/20',
    iconColor: 'text-teal-400',
    borderColor: 'border-teal-500/20 hover:border-teal-400/40',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'FastAI', 'scikit-learn', 'HuggingFace Transformers'],
  },
  {
    icon: Globe,
    title: 'Web / Backend',
    color: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/20 hover:border-cyan-400/40',
    skills: ['React', 'Next.js', 'FastAPI', 'Flask', 'Node.js', 'Express', 'Vite', 'Firebase'],
  },
  {
    icon: Sparkles,
    title: 'AI / LLM',
    color: 'from-pink-500/20 to-rose-500/20',
    iconColor: 'text-pink-400',
    borderColor: 'border-pink-500/20 hover:border-pink-400/40',
    skills: ['LLM Fine-tuning', 'ViT', 'wav2vec2', 'BART', 'T5', 'EfficientNet', 'Groq', 'Gemini API'],
  },
  {
    icon: Cloud,
    title: 'Cloud / Deploy',
    color: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-orange-400',
    borderColor: 'border-orange-500/20 hover:border-orange-400/40',
    skills: ['Vercel', 'Render', 'Replit', 'AWS SAA-C03', 'GCP', 'Oracle OCI', 'Docker'],
  },
  {
    icon: Wrench,
    title: 'Tools & Others',
    color: 'from-slate-500/20 to-gray-500/20',
    iconColor: 'text-slate-400',
    borderColor: 'border-slate-500/20 hover:border-slate-400/40',
    skills: ['GitHub Actions', 'Kaggle', 'Google Colab', 'VS Code', 'Three.js', 'Tailwind CSS'],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-card').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-28 hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ icon: Icon, title, color, iconColor, borderColor, skills }, idx) => (
            <div
              key={title}
              id={`skill-card-${idx}`}
              className={`skill-card rounded-2xl p-6 border transition-all duration-500 cursor-default`}
              style={{
                background: `linear-gradient(135deg, ${color.includes('violet') ? 'rgba(139,92,246,0.05)' : color.includes('teal') ? 'rgba(20,184,166,0.05)' : color.includes('cyan') ? 'rgba(6,182,212,0.05)' : color.includes('pink') ? 'rgba(236,72,153,0.05)' : color.includes('orange') ? 'rgba(249,115,22,0.05)' : 'rgba(100,116,139,0.05)'}, rgba(15,32,64,0.4))`,
                backdropFilter: 'blur(12px)',
                borderColor: 'rgba(45,212,191,0.12)',
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(45,212,191,0.35)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(45,212,191,0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(45,212,191,0.12)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${color}`}
                >
                  <Icon size={20} className={iconColor} />
                </div>
                <h3 className="font-semibold text-white text-base">{title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 transition-all duration-200 hover:text-white cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(20,184,166,0.12)';
                      e.currentTarget.style.borderColor = 'rgba(20,184,166,0.3)';
                      e.currentTarget.style.color = '#2dd4bf';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.color = '';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
