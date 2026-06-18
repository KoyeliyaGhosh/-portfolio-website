import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    role: 'Machine Learning Intern',
    company: 'Cognifyz IT Solutions Pvt. Ltd.',
    period: 'May 2026 – Present',
    location: 'Remote',
    type: 'Internship',
    current: true,
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
    <section id="experience" ref={ref} className="py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        <div className="reveal mb-12">
          <h2 className="section-heading mb-3">
            <span className="code-prefix">{'</>'}</span> EXPERIENCE ROADMAP
          </h2>
          <div className="gold-line" style={{ maxWidth: 500 }} />
        </div>

        <div className="relative pl-8">
          {/* Timeline bar */}
          <div className="timeline-line" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} id={`exp-${i}`} className={`reveal d${i + 1} relative`}>
                {/* Dot */}
                <div className="timeline-dot absolute -left-[13px] top-6"
                  style={exp.current ? { background: '#22c55e', boxShadow: '0 0 0 3px rgba(34,197,94,0.2), 0 0 12px rgba(34,197,94,0.4)' } : {}} />

                <div className="card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem' }}>{exp.role}</h3>
                      <p style={{ color: '#f3c623', fontWeight: 600, fontSize: '0.875rem', marginTop: '0.15rem' }}>{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 flex-shrink-0">
                      {exp.current && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-md"
                          style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.25)' }}>
                          ● Current
                        </span>
                      )}
                      <span className="text-xs px-2.5 py-1 rounded-md"
                        style={{ background: 'rgba(243,198,35,0.06)', color: '#f3c623', border: '1px solid rgba(243,198,35,0.15)' }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4 text-xs mb-4" style={{ color: '#64748b' }}>
                    <span>📅 {exp.period}</span>
                    <span>📍 {exp.location}</span>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-400">
                        <span style={{ color: '#f3c623', flexShrink: 0 }}>›</span>{b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map(t => <span key={t} className="tag text-xs">{t}</span>)}
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
