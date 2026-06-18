import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    role: 'Machine Learning Intern',
    company: 'Cognifyz IT Solutions Pvt. Ltd.',
    period: 'May 2026 – Present',
    location: 'Remote',
    type: 'Internship',
    current: true,
    color: '#3b82f6',
    bullets: [
      'Analyzing complex datasets and developing machine learning pipelines.',
      'Extracting actionable insights and supporting production ML solutions.',
      'Working on data-driven solutions for real-world business applications.',
    ],
    tags: ['Python', 'PyTorch', 'Data Pipelines', 'ML Modeling'],
  },
  {
    role: 'Machine Learning Virtual Intern',
    company: 'CodSoft',
    period: 'May 2026 – Jun 2026',
    location: 'Remote',
    type: 'Virtual Internship',
    current: false,
    color: '#60a5fa',
    bullets: [
      'Completed hands-on machine learning projects involving practical model development.',
      'Applied supervised learning techniques to real-world datasets.',
    ],
    tags: ['Supervised Learning', 'NLP', 'Python', 'scikit-learn'],
  },
  {
    role: 'Java Programming Intern',
    company: 'InternPE',
    period: 'Jul 2025 – Aug 2025',
    location: 'Remote',
    type: 'Internship',
    current: false,
    color: '#818cf8',
    bullets: [
      'Developed Java applications using Object-Oriented Programming principles.',
      'Implemented structured and maintainable software solutions.',
    ],
    tags: ['Java', 'OOP', 'Data Structures', 'Problem Solving'],
  },
  {
    role: 'App Team Member & Workshop Speaker',
    company: 'GDGC, MSIT',
    period: 'Apr 2025',
    location: 'Kolkata, India',
    type: 'Community',
    current: false,
    color: '#34d399',
    bullets: [
      'Developed Flutter and Firebase applications for the GDGC chapter.',
      'Delivered a workshop titled "Going Incognito: App & Cloud Workshop".',
    ],
    tags: ['Flutter', 'Firebase', 'Dart', 'Workshop'],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" ref={ref} className="section-dark py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        <div className="reveal text-center mb-12">
          <div className="section-divider" />
          <h2 className="section-heading mb-3">Experience</h2>
          <p className="section-subtitle">Professional roles &amp; internships</p>
        </div>

        <div className="relative pl-6">
          {/* Timeline bar */}
          <div className="timeline-line" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} id={`exp-${i}`}
                className={`reveal d${i + 1} relative`}>

                {/* Dot */}
                <div className={`timeline-dot ${exp.color === '#34d399' ? 'green' : ''} absolute -left-9 top-5`}
                  style={{ background: exp.color, boxShadow: `0 0 0 3px rgba(${exp.color === '#34d399' ? '16,185,129' : '59,130,246'},0.15), 0 0 10px ${exp.color}50` }} />

                <div className="card p-6"
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${exp.color}40`; e.currentTarget.style.boxShadow = `0 8px 32px ${exp.color}12`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-base">{exp.role}</h3>
                      <p className="font-semibold text-sm mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 flex-shrink-0">
                      {exp.current && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-md"
                          style={{ background:`${exp.color}15`, color:exp.color, border:`1px solid ${exp.color}35` }}>
                          ● Live
                        </span>
                      )}
                      <span className="text-xs px-2.5 py-1 rounded-md"
                        style={{ background:'rgba(255,255,255,0.04)', color:'#94a3b8', border:'1px solid rgba(255,255,255,0.08)' }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex gap-4 text-xs text-slate-500 mb-4">
                    <span>📅 {exp.period}</span>
                    <span>📍 {exp.location}</span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-400">
                        <span style={{ color: exp.color, flexShrink:0, marginTop:'0.1em' }}>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map(t => (
                      <span key={t} className="tag text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
