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
    role: 'Freelance AI & Software Developer',
    company: 'Freelance',
    period: 'Nov 2025 – Present',
    location: 'Remote',
    type: 'Freelance',
    current: true,
    bullets: [
      'Worked with clients to design, develop, and deploy custom AI-powered and web-based solutions tailored to specific business and personal requirements.',
      'Delivered projects involving machine learning models, data analysis, automation tools, responsive web applications, and AI integrations.',
      'Collaborated directly with clients to gather requirements, implement features, troubleshoot issues, and provide post-deployment support.',
      'Gained practical experience in project management, problem-solving, client communication, and delivering production-ready solutions within deadlines.',
    ],
    tags: ['Machine Learning', 'AI Integrations', 'Data Analysis', 'Web Development', 'Client Relations'],
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
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="reveal mb-16 text-center md:text-left">
          <h2 className="section-heading mb-3">
            <span className="code-prefix">{'</>'}</span> CAREER ROADMAP
          </h2>
          <div className="gold-line mx-auto md:mx-0" style={{ maxWidth: 450 }} />
        </div>

        <div className="relative select-none pr-4">
          {/* Global flowing vertical line */}
          <div className="absolute left-[25px] md:left-[253px] top-6 bottom-6 w-[2px] timeline-line-animated" />

          {experiences.map((exp, i) => {
            const CardContent = () => (
              <div
                className="card p-6 w-full max-w-[800px] text-left hover:scale-[1.01] transition-transform duration-300"
                style={{
                  background: 'rgba(15, 20, 40, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.2rem', fontFamily: "'Poppins', sans-serif" }}>
                      {exp.role}
                    </h3>
                    <p style={{ color: '#f3c623', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 flex-shrink-0">
                    {exp.current && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md"
                        style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.25)' }}>
                        ● Current
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map(t => <span key={t} className="tag text-xs">{t}</span>)}
                </div>
              </div>
            );

            return (
              <div key={i} className={`reveal d${(i % 6) + 1} relative pl-12 md:pl-[300px] pb-16 last:pb-0`}>
                {/* The dot */}
                <div className="absolute left-[12px] md:left-[240px] top-1.5 w-7 h-7 bg-[#0a0f1d] border-2 border-slate-500 rounded-full flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110">
                  <div className="w-2.5 h-2.5 bg-white rounded-full" />
                </div>

                {/* Date and Location */}
                <div className="md:absolute md:left-0 md:w-[210px] md:text-right md:top-1.5 flex flex-col mb-3 md:mb-0">
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {exp.period}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.15rem' }}>
                    {exp.location}
                  </span>
                </div>

                {/* Card */}
                <CardContent />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
