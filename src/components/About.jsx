import { useScrollReveal } from '../hooks/useScrollReveal';

const matrixData = [
  {
    icon: '💻',
    title: 'Programming Languages',
    items: ['Python', 'C Programming', 'Java', 'JavaScript', 'SQL'],
    color: '#3b82f6'
  },
  {
    icon: '🌐',
    title: 'Web Development',
    items: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'REST APIs', 'Responsive Web Design', 'Frontend Development'],
    color: '#10b981'
  },
  {
    icon: '🤖',
    title: 'AI/ML & Data Science',
    items: ['Machine Learning', 'Deep Learning', 'Natural Language Processing (NLP)', 'Data Analysis', 'Predictive Modeling', 'Classification', 'Regression', 'Model Evaluation', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    color: '#ec4899'
  },
  {
    icon: '📊',
    title: 'Databases & Data Management',
    items: ['MySQL', 'MongoDB', 'Database Management Systems (DBMS)', 'SQL Queries', 'Data Preprocessing', 'Data Cleaning'],
    color: '#f3c623'
  },
  {
    icon: '☁️',
    title: 'Cloud & Deployment',
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'Hugging Face', 'Kaggle', 'GitHub Codespaces'],
    color: '#a855f7'
  },
  {
    icon: '🛠️',
    title: 'Frameworks & Tools',
    items: ['Flask', 'Streamlit', 'Jupyter Notebook', 'Tailwind CSS', 'Firebase', 'VS Code'],
    color: '#06b6d4'
  },
  {
    icon: '📈',
    title: 'Data Warehousing & Mining',
    items: ['Data Warehousing', 'Data Mining', 'Classification Techniques', 'Clustering', 'Association Rule Mining', 'Pattern Discovery'],
    color: '#22c55e'
  },
  {
    icon: '🚀',
    title: 'Projects & Specializations',
    items: ['Content Moderation System', 'Review Analysis System', 'CodeBuddy Overlay', 'Diabetes Prediction System', 'Flight Fare Prediction', 'House Price Prediction', 'Wine Quality Prediction', 'Loan Prediction System', 'Healthcare & AI Applications'],
    color: '#ff7849'
  },
  {
    icon: '🤝',
    title: 'Soft Skills',
    items: ['Problem Solving', 'Analytical Thinking', 'Team Collaboration', 'Quick Learning', 'Communication Skills', 'Adaptability', 'Attention to Detail', 'Continuous Learning'],
    color: '#cbd5e1'
  }
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="reveal mb-12">
          <h2 className="section-heading mb-3">
            <span className="code-prefix">{'</>'}</span> ABOUT ME
          </h2>
          <div className="gold-line" style={{ maxWidth: 400 }} />
        </div>

        {/* My Journey */}
        <div className="reveal mb-16 relative pl-8" style={{ borderLeft: '2px solid rgba(243,198,35,0.2)' }}>
          <div style={{
            position: 'absolute', left: -5, top: 0, width: 10, height: 10,
            borderRadius: '50%', background: '#f3c623',
            boxShadow: '0 0 10px rgba(243,198,35,0.4)',
          }} />
          <p className="text-slate-300 text-base leading-relaxed mb-4">
            I'm a developer focused on building <strong style={{ color: '#f3c623' }}>AI-powered</strong> applications
            and scalable web systems. I enjoy transforming ideas into real-world products using{' '}
            <strong style={{ color: '#f3c623' }}>clean architecture</strong> and{' '}
            <strong style={{ color: '#f3c623' }}>modern technologies</strong>.
          </p>
          <div style={{
            position: 'absolute', left: -5, bottom: -20, width: 10, height: 10,
            borderRadius: '50%', background: '#ec4899',
            boxShadow: '0 0 10px rgba(236,72,153,0.4)',
          }} />
          <p className="text-slate-300 text-base leading-relaxed">
            My experience spans across <strong style={{ color: '#a855f7' }}>full-stack development</strong>,{' '}
            <strong style={{ color: '#a855f7' }}>machine learning</strong>, and{' '}
            <strong style={{ color: '#a855f7' }}>cloud-based systems</strong> —
            from publishing production-grade LLMs on HuggingFace to building end-to-end web platforms.
          </p>
        </div>

        {/* Knowledge Matrix */}
        <div className="reveal mb-8">
          <h3 style={{ color: '#f3c623', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            ✦ KNOWLEDGE MATRIX
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matrixData.map((category, idx) => (
            <div
              key={category.title}
              className={`card reveal d${(idx % 6) + 1} p-6 flex flex-col justify-between`}
              style={{
                background: 'rgba(15, 20, 40, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${category.color}40`;
                e.currentTarget.style.boxShadow = `0 0 20px ${category.color}15`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl" role="img" aria-label={category.title}>
                    {category.icon}
                  </span>
                  <h4 style={{ color: category.color, fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.02em' }}>
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map(item => (
                    <span
                      key={item}
                      className="tag select-none"
                      style={{
                        fontSize: '0.7rem',
                        padding: '0.2rem 0.55rem',
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderColor: 'rgba(255, 255, 255, 0.06)',
                        color: '#cbd5e1',
                        borderRadius: '6px',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
