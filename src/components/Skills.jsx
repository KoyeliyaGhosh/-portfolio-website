import { useScrollReveal } from '../hooks/useScrollReveal';

const cats = [
  {
    label: 'Languages',
    color: '#818cf8',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'SQL', 'Dart', 'HTML', 'CSS'],
  },
  {
    label: 'Machine Learning',
    color: '#60a5fa',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'FastAI', 'Scikit-Learn', 'HuggingFace Transformers'],
  },
  {
    label: 'Web Development',
    color: '#34d399',
    skills: ['React', 'Next.js', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'Vite', 'Firebase'],
  },
  {
    label: 'AI / LLM',
    color: '#f472b6',
    skills: ['LLM Fine-Tuning', 'Vision Transformers (ViT)', 'wav2vec2', 'BART', 'T5', 'EfficientNet', 'Groq API', 'Gemini API'],
  },
  {
    label: 'Cloud & DevOps',
    color: '#fb923c',
    skills: ['AWS (SAA-C03)', 'Google Cloud Platform', 'Oracle OCI', 'Docker', 'Render', 'Vercel', 'Replit'],
  },
  {
    label: 'Tools',
    color: '#94a3b8',
    skills: ['Git', 'GitHub Actions', 'Kaggle', 'Google Colab', 'VS Code', 'Three.js', 'Tailwind CSS'],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" ref={ref} className="section-card py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="reveal text-center mb-12">
          <div className="section-divider" />
          <h2 className="section-heading mb-3">Technical Skills</h2>
          <p className="section-subtitle">Technologies I build with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cats.map(({ label, color, skills }, i) => (
            <div key={label} id={`sk-${i}`}
              className={`card reveal d${(i % 6) + 1} p-5`}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}40`; e.currentTarget.style.boxShadow = `0 8px 30px ${color}15`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-4">
                <div style={{ width:10, height:10, borderRadius:'50%', background:color, flexShrink:0 }} />
                <h3 className="font-bold text-sm text-white tracking-tight">{label}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {skills.map(s => (
                  <span key={s}
                    className="tag text-xs cursor-default"
                    onMouseEnter={e => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = `${color}50`; e.currentTarget.style.background = `${color}0f`; }}
                    onMouseLeave={e => { e.currentTarget.style.color=''; e.currentTarget.style.borderColor=''; e.currentTarget.style.background=''; }}
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
