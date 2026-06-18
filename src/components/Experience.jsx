import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: 'Machine Learning Intern',
    company: 'Cognifyz IT Solutions',
    period: 'May 2026 – Present',
    type: 'Internship',
    location: 'Remote',
    color: 'teal',
    description: 'Working on real-world ML pipelines, model development, and data preprocessing for production AI systems. Contributing to model optimization and deployment workflows.',
    tags: ['Python', 'PyTorch', 'scikit-learn', 'Data Pipelines'],
    current: true,
  },
  {
    role: 'Machine Learning Virtual Intern',
    company: 'CodSoft',
    period: 'May – Jun 2026',
    type: 'Virtual Internship',
    location: 'Remote',
    color: 'cyan',
    description: 'Completed ML projects including classification, regression, and NLP tasks. Worked on real datasets and developed end-to-end ML solutions with deployment.',
    tags: ['ML Algorithms', 'NLP', 'Data Analysis', 'Python'],
    current: false,
  },
  {
    role: 'Java Programming Intern',
    company: 'InternPE',
    period: 'Jul – Aug 2025',
    type: 'Internship',
    location: 'Remote',
    color: 'violet',
    description: 'Developed Java-based applications and worked on object-oriented programming, data structures, and algorithm implementation. Contributed to backend development tasks.',
    tags: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
    current: false,
  },
  {
    role: 'App Team Member & Workshop Speaker',
    company: 'GDGC MSIT',
    period: 'Apr 2025',
    type: 'Community',
    location: 'Kolkata, India',
    color: 'emerald',
    description: 'Active member of the Google Developer Group on Campus at MSIT. Conducted technical workshops on Flutter/Dart app development and mentored junior students in the developer community.',
    tags: ['Flutter', 'Dart', 'Workshop', 'Community'],
    current: false,
  },
];

const colorMap = {
  teal: {
    dot: 'bg-teal-400',
    line: 'border-teal-400',
    badge: 'bg-teal-500/15 text-teal-400 border-teal-500/30',
    glow: 'shadow-teal-500/20',
    border: 'hover:border-teal-500/30',
    tag: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
  },
  cyan: {
    dot: 'bg-cyan-400',
    line: 'border-cyan-400',
    badge: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    glow: 'shadow-cyan-500/20',
    border: 'hover:border-cyan-500/30',
    tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  },
  violet: {
    dot: 'bg-violet-400',
    line: 'border-violet-400',
    badge: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
    glow: 'shadow-violet-500/20',
    border: 'hover:border-violet-500/30',
    tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  },
  emerald: {
    dot: 'bg-emerald-400',
    line: 'border-emerald-400',
    badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    glow: 'shadow-emerald-500/20',
    border: 'hover:border-emerald-500/30',
    tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
};

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.exp-item').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateX(0)';
              }, i * 150);
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
    <section id="experience" ref={sectionRef} className="py-28 section-bg-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Experience</h2>
        <p className="section-subtitle">My professional journey so far</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-cyan-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const colors = colorMap[exp.color];
              return (
                <div
                  key={index}
                  id={`exp-item-${index}`}
                  className="exp-item flex gap-6"
                  style={{ opacity: 0, transform: 'translateX(-24px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0 mt-6">
                    <div className={`w-3 h-3 rounded-full ${colors.dot} ring-4 ring-dark-900 z-10 ${exp.current ? 'animate-pulse' : ''}`} />
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 card-glass rounded-2xl p-6 border border-white/5 transition-all duration-300 ${colors.border} hover:shadow-lg ${colors.glow}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Briefcase size={14} />
                          <span className="font-semibold text-slate-300">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {exp.current && (
                          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${colors.badge}`}>
                            🟢 Current
                          </span>
                        )}
                        <span className={`px-3 py-1 rounded-full text-xs border ${colors.badge}`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 rounded-md text-xs border ${colors.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
