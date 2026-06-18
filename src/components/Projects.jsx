import { Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    num: '01', title: 'CodeBuddy Overlay', category: 'Desktop AI Assistant',
    tech: ['Electron', 'React', 'Node.js', 'Tailwind CSS', 'Gemini API'],
    desc: "Developed CodeBuddy Overlay, an AI-powered desktop assistant designed to enhance productivity by providing an interactive overlay experience on top of the user's workspace. The application offers quick access to AI assistance, helping users with coding support, problem-solving, and workflow management without interrupting their current tasks.",
    github: 'https://github.com/koyeliya2004/codebuddy-overlay',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&auto=format&fit=crop&q=80',
    color: '#f3c623' // Gold
  },
  {
    num: '02', title: 'Crypto Trading Platform', category: 'Fintech Web Platform',
    tech: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'Chart.js'],
    desc: 'Developed a Crypto Trading Platform that enables users to monitor cryptocurrency market trends, analyze price movements, and make informed trading decisions through an interactive and user-friendly interface. The project integrates real-time market data visualization, trading analytics, and financial insights to help users track digital assets efficiently.',
    github: 'https://github.com/koyeliya2004/Crypto_Trading',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&auto=format&fit=crop&q=80',
    color: '#3b82f6' // Blue
  },
  {
    num: '03', title: 'Resume Screening & Job Prediction System', category: 'AI / NLP System',
    tech: ['Python', 'NLP', 'scikit-learn', 'Streamlit', 'Predictive Modeling'],
    desc: 'Developed a Resume Screening & Job Prediction System that leverages Machine Learning and Natural Language Processing (NLP) to analyze resumes and predict suitable job roles based on candidates’ skills, qualifications, and experience. The system processes resume data, extracts relevant features, and performs intelligent classification to match profiles with potential career opportunities. ✨',
    github: 'https://github.com/koyeliya2004/predict_resume',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=80',
    color: '#ec4899' // Pink
  },
  {
    num: '04', title: 'MediMind-411M', category: 'Medical AI / LLM',
    tech: ['PyTorch', 'HuggingFace', 'LLM', 'Medical NLP'],
    desc: 'Built a custom 411M-parameter Medical LLM from scratch. Published on Hugging Face for healthcare text generation with multiple iterations.',
    github: 'https://github.com/koyeliya2004',
    hf: 'https://huggingface.co/koyelog',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80',
    color: '#10b981' // Green
  },
  {
    num: '05', title: 'Face Recognition Model', category: 'Computer Vision',
    tech: ['ViT', 'PyTorch', 'Computer Vision'],
    desc: 'Custom Vision Transformer-based face recognition model. Achieved 29,000+ global downloads — most popular model in the portfolio. MIT License.',
    github: 'https://github.com/koyeliya2004',
    hf: 'https://huggingface.co/koyelog',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    color: '#a855f7' // Purple
  },
  {
    num: '06', title: 'Deepfake Voice Detector', category: 'Audio AI',
    tech: ['wav2vec2', 'PyTorch', 'Transfer Learning'],
    desc: 'State-of-the-art deepfake audio detection system. Trained on 8+ datasets including ASVspoof-2021 and WaveFake for reliable classification.',
    github: 'https://github.com/koyeliya2004',
    hf: 'https://huggingface.co/koyelog',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80',
    color: '#06b6d4' // Cyan
  },
  {
    num: '07', title: 'Dhruv AI', category: 'Multi-model AI',
    tech: ['T5', 'BART', 'EfficientNetV2', 'Keras'],
    desc: 'Multi-model AI ecosystem for tourism — monument recognition, itinerary generation, hotel recommendation, sentiment analysis and forecasting.',
    github: 'https://github.com/koyeliya2004',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=80',
    color: '#f3c623' // Gold
  },
  {
    num: '08', title: 'ReviewCoder', category: 'Full Stack',
    tech: ['React', 'TypeScript', 'Node.js', 'LLM'],
    desc: 'AI-powered code review platform for developers. Bug detection reports, code quality recommendations with secure backend architecture.',
    github: 'https://github.com/koyeliya2004',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
    color: '#06b6d4' // Cyan
  },
  {
    num: '09', title: 'Voxel Art Generator v3.0', category: '3D / WebGL',
    tech: ['Three.js', 'React', 'Groq API', 'WebGL'],
    desc: 'AI-powered 3D voxel art generation platform with animated Three.js environments and procedural rendering systems.',
    github: 'https://github.com/koyeliya2004',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    color: '#a855f7' // Purple
  }
];

export default function Projects() {
  const ref = useScrollReveal(0.05);

  return (
    <section id="projects" ref={ref} className="py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="reveal mb-12">
          <h2 className="section-heading mb-3">
            <span className="code-prefix">{'</>'}</span> PROJECTS
          </h2>
          <div className="gold-line" style={{ maxWidth: 300 }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} id={`proj-${i}`}
              className={`card reveal d${(i % 6) + 1} overflow-hidden flex flex-col group`}
              style={{ cursor: 'default', background: 'rgba(15, 20, 40, 0.7)' }}
            >
              {/* Project Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950/80">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/20 to-transparent" />

                {/* Floating major project number */}
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-white border border-white/10 px-3 py-1.5 rounded-full select-none">
                    {p.num} MAJOR PROJECT
                  </span>
                </div>

                {/* Floating click to open details hover */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] font-bold tracking-wider uppercase bg-[#0f172a]/80 backdrop-blur-md text-[#f3c623] border border-[#f3c623]/25 px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:border-[#f3c623]/60 transition-colors"
                  >
                    <span>✨ CLICK TO OPEN DETAILS</span>
                  </a>
                </div>
              </div>

              {/* Project Content Body */}
              <div className="p-6 flex flex-col gap-4 flex-grow relative">
                {/* Color accent line */}
                <div
                  className="w-12 h-1 rounded"
                  style={{
                    backgroundColor: p.color,
                    boxShadow: `0 0 10px ${p.color}80`
                  }}
                />

                <div>
                  <h3 className="font-bold text-base text-slate-100">{p.title}</h3>
                  <span className="text-[9.5px] font-semibold text-[#f3c623] uppercase tracking-wider block mt-1">
                    {p.category}
                  </span>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map(t => (
                    <span key={t} className="tag text-[9.5px] font-mono" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>{t}</span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-slate-400 text-[12.5px] leading-relaxed flex-grow">{p.desc}</p>

                {/* Bottom row: Links */}
                <div className="flex gap-4 pt-3 mt-2 border-t border-slate-800/40">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-semibold transition-colors"
                    style={{ color: '#64748b' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f3c623'}
                    onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                    <Github size={12} /> Code
                  </a>
                  {p.hf && (
                    <a href={p.hf} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] font-semibold transition-colors"
                      style={{ color: '#64748b' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#f3c623'}
                      onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
                      🤗 HuggingFace
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a href="https://github.com/koyeliya2004" target="_blank" rel="noopener noreferrer"
            id="proj-all" className="btn-ghost">
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
