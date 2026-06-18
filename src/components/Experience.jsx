import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    role: 'Machine Learning Intern',
    company: 'Cognifyz IT Solutions',
    period: 'May 2026 – Present',
    location: 'Remote',
    type: 'Internship',
    current: true,
    color: '#14b8a6',
    bg: 'rgba(20,184,166,0.08)',
    border: 'rgba(20,184,166,0.2)',
    description: 'Working on real-world ML pipelines, model development, and data preprocessing for production AI systems. Contributing to model optimization and deployment workflows.',
    tags: ['Python','PyTorch','scikit-learn','Data Pipelines'],
  },
  {
    role: 'Machine Learning Virtual Intern',
    company: 'CodSoft',
    period: 'May – Jun 2026',
    location: 'Remote',
    type: 'Virtual Internship',
    current: false,
    color: '#22d3ee',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
    description: 'Completed end-to-end ML projects — classification, regression, and NLP — on real datasets with full deployment pipeline.',
    tags: ['ML Algorithms','NLP','Data Analysis','Python'],
  },
  {
    role: 'Java Programming Intern',
    company: 'InternPE',
    period: 'Jul – Aug 2025',
    location: 'Remote',
    type: 'Internship',
    current: false,
    color: '#a78bfa',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
    description: 'Developed Java applications focusing on OOP, data structures, algorithm implementation, and backend development tasks.',
    tags: ['Java','OOP','Data Structures','Algorithms'],
  },
  {
    role: 'App Team Member & Workshop Speaker',
    company: 'GDGC MSIT',
    period: 'Apr 2025',
    location: 'Kolkata, India',
    type: 'Community',
    current: false,
    color: '#34d399',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(52,211,153,0.2)',
    description: 'Active Google Developer Group member. Conducted Flutter/Dart workshops and mentored junior developers in the campus tech community.',
    tags: ['Flutter','Dart','Workshop','Mentoring'],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" ref={ref} className="section-bg-alt relative py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        <div className="reveal text-center mb-14">
          <div className="section-divider" />
          <h2 className="section-heading">Experience</h2>
          <p className="section-subtitle">My professional journey so far</p>
        </div>

        <div className="relative">
          {/* Timeline bar */}
          <div className="absolute left-5 top-6 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, rgba(20,184,166,0.5), rgba(20,184,166,0.05))' }} />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} id={`exp-${i}`}
                className={`reveal delay-${i + 1} flex gap-6`}>

                {/* Dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-6">
                  <div className="w-3 h-3 rounded-full ring-4 z-10 flex-shrink-0"
                    style={{
                      background: exp.color,
                      ringColor: '#060d1a',
                      boxShadow: `0 0 8px ${exp.color}80`,
                      ...(exp.current ? { animation: 'pulse 2s infinite' } : {}),
                    }} />
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: exp.bg,
                    borderColor: exp.border,
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = `0 12px 40px ${exp.bg.replace('0.08','0.2')}`}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-white font-bold text-base">{exp.role}</h3>
                      <p className="text-sm font-semibold mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      {exp.current && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold"
                          style={{ background: `${exp.color}18`, color: exp.color, border: `1px solid ${exp.color}40` }}>
                          🟢 Current
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full text-xs"
                        style={{ background: `${exp.color}12`, color: exp.color, border: `1px solid ${exp.color}30` }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={11} />{exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg text-xs"
                        style={{ background: `${exp.color}10`, color: exp.color, border: `1px solid ${exp.color}25` }}>
                        {tag}
                      </span>
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
