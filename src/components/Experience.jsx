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
      {/* Background gradient definitions for SVG paths */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="roadmap-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f3c623" />
            <stop offset="40%" stopColor="#ec4899" />
            <stop offset="70%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="reveal mb-16 text-center md:text-left">
          <h2 className="section-heading mb-3">
            <span className="code-prefix">{'</>'}</span> CAREER ROADMAP
          </h2>
          <div className="gold-line mx-auto md:mx-0" style={{ maxWidth: 450 }} />
        </div>

        <div className="relative flex flex-col gap-0 select-none">
          {experiences.map((exp, i) => {
            const isEven = i % 2 === 0;

            const CardContent = () => (
              <div className="card p-6 w-full max-w-[460px] text-left hover:scale-[1.02] transition-transform duration-300">
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
            );

            return (
              <div key={i} id={`exp-${i}`} className={`reveal d${i + 1} flex flex-row items-stretch`}>
                
                {/* Desktop Left Column (Visible only for even indexes on desktop) */}
                <div className={`flex-1 md:flex flex-col items-end justify-center hidden ${isEven ? 'md:flex' : 'md:hidden'}`}>
                  {isEven && <CardContent />}
                </div>

                {/* Center Column: Curved Wavy Winding Line (Snake) */}
                <div className="w-12 md:w-28 relative flex-shrink-0 flex items-stretch select-none pointer-events-none">
                  {/* Dynamic Curvy Snake Path Segment */}
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path
                        d={isEven ? "M 50 0 C 15 30, 15 70, 50 100" : "M 50 0 C 85 30, 85 70, 50 100"}
                        fill="none"
                        stroke={exp.current ? "#22c55e" : "url(#roadmap-grad)"}
                        strokeWidth="3.5"
                        vectorEffect="non-scaling-stroke"
                        style={{
                          filter: exp.current 
                            ? 'drop-shadow(0 0 5px rgba(34,197,94,0.4))'
                            : 'drop-shadow(0 0 5px rgba(243,198,35,0.25))'
                        }}
                      />
                    </svg>
                  </div>

                  {/* Curvy Snake Glowing Node Dot */}
                  <div
                    className="absolute w-[14px] h-[14px] rounded-full z-20 border-2 border-[#0a0f1d] transition-all duration-300"
                    style={{
                      left: isEven ? '20%' : '80%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: exp.current ? '#22c55e' : '#f3c623',
                      boxShadow: exp.current
                        ? '0 0 0 3.5px rgba(34,197,94,0.25), 0 0 15px rgba(34,197,94,0.7)'
                        : '0 0 0 3.5px rgba(243,198,35,0.25), 0 0 15px rgba(243,198,35,0.7)',
                      pointerEvents: 'auto'
                    }}
                  />
                </div>

                {/* Desktop/Mobile Right Column */}
                <div className="flex-1 flex flex-col items-start justify-center py-6">
                  {/* On desktop: show card here if it's odd index. On mobile: always show card here. */}
                  <div className={isEven ? 'md:hidden w-full' : 'w-full'}>
                    <CardContent />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
