import { useScrollReveal } from '../hooks/useScrollReveal';

const techGrid = [
  // Row 1: Languages & Core
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Java', icon: '☕' },
  { name: 'C', icon: '⚙️' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Dart', icon: '🎯' },
  { name: 'HTML', icon: '🌐' },
  // Row 2: Frameworks
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express', icon: '🚀' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'Flask', icon: '🧪' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Vite', icon: '⚡' },
  // Row 3: AI/ML
  { name: 'PyTorch', icon: '🔦' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'HuggingFace', icon: '🤗' },
  { name: 'Keras', icon: '🔬' },
  { name: 'Scikit-Learn', icon: '📊' },
  { name: 'FastAI', icon: '🏎️' },
  { name: 'OpenCV', icon: '👁️' },
  { name: 'Three.js', icon: '🎨' },
  // Row 4: Cloud & DevOps
  { name: 'AWS', icon: '☁️' },
  { name: 'GCP', icon: '🌩️' },
  { name: 'Oracle OCI', icon: '🔮' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '📦' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Tailwind', icon: '🎨' },
];

export default function Skills() {
  const ref = useScrollReveal(0.05);

  return (
    <section id="skills" ref={ref} className="py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="reveal mb-12">
          <h2 className="section-heading mb-3" style={{ textAlign: 'left' }}>DEVELOPER ECOSYSTEM</h2>
          <div className="gold-line" />
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {techGrid.map((tech, i) => (
            <div key={tech.name} id={`tech-${i}`}
              className={`tech-card reveal d${(i % 6) + 1}`}
            >
              <span style={{ fontSize: '2rem' }}>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Core Expertise + What I Build + Stats grid */}
        <div className="grid lg:grid-cols-4 gap-4 mt-16">

          {/* Core Expertise */}
          <div className="card reveal p-6">
            <h3 style={{ color: '#f3c623', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              ✦ CORE EXPERTISE
            </h3>
            <div className="space-y-3">
              {[
                ['</>', 'Full Stack Development', '(MERN / Next.js)'],
                ['🧠', 'AI & Machine Learning', '(NLP, LLMs, GenAI)'],
                ['🗄️', 'Data Engineering', '(ETL, SQL, Pipelines)'],
                ['⚡', 'REST APIs & Backend', '(Node.js, Express.js)'],
                ['☁️', 'Cloud & DevOps', '(AWS, Docker, CI/CD)'],
              ].map(([icon, title, sub]) => (
                <div key={title} className="flex items-center gap-2.5">
                  <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#e2e8f0' }}>{title}</div>
                    <div style={{ fontSize: '0.65rem', color: '#64748b' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="card reveal d2 p-6 flex flex-col items-center justify-center text-center gap-6">
            {[
              ['6+', 'PROJECTS BUILT'],
              ['5+', 'MODELS PUBLISHED'],
              ['29K+', 'HF DOWNLOADS'],
              ['89%', 'HS SCORE'],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="stat-number">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>

          {/* What I Build */}
          <div className="card reveal d3 p-6">
            <h3 style={{ color: '#f3c623', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              🔧 WHAT I BUILD
            </h3>
            <div className="space-y-4">
              {[
                ['AI-Powered Applications', 'Building intelligent solutions using ML, NLP & GenAI.'],
                ['Scalable Web Platforms', 'Developing modern, responsive and high-performance apps.'],
                ['Data Driven Systems', 'Creating ETL pipelines, data models & analytics solutions.'],
                ['Real-world Impact', 'Solving meaningful problems with clean, efficient code.'],
              ].map(([title, desc]) => (
                <div key={title}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.15rem' }}>{title}</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Distribution */}
          <div className="card reveal d4 p-6">
            <h3 style={{ color: '#f3c623', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              ✦ TECH STACK
            </h3>
            <div className="space-y-3">
              {[
                ['Python', 90],
                ['PyTorch', 85],
                ['React', 80],
                ['Node.js', 75],
                ['AWS', 70],
              ].map(([name, pct]) => (
                <div key={name}>
                  <div className="flex justify-between mb-1">
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#e2e8f0', fontFamily: "'Fira Code', monospace" }}>{name}</span>
                    <span style={{ fontSize: '0.7rem', color: '#f3c623', fontWeight: 700 }}>{pct}%</span>
                  </div>
                  <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{
                      width: `${pct}%`, height: '100%', borderRadius: 3,
                      background: 'linear-gradient(90deg, #f3c623, #d4a017)',
                      transition: 'width 1.5s ease',
                    }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {['TypeScript', 'Tailwind', 'Docker', 'Git'].map(t => (
                <span key={t} className="tag" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
