import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const achs = [
  {
    emoji: '🏆', title: '29,000+ Model Downloads',
    sub: 'Global HuggingFace Adoption',
    desc: 'The Face Recognition Model surpassed 29,075 downloads on HuggingFace — reflecting real-world utility across research and production globally.',
    stat: '29K+', statLabel: 'Downloads', color: '#14b8a6',
  },
  {
    emoji: '🧠', title: 'Published 411M-Param Medical LLM',
    sub: 'MediMind — Open Source AI',
    desc: 'Independently designed, trained, and published a 411M-parameter LLM specialized for medical domain Q&A on HuggingFace.',
    stat: '411M', statLabel: 'Parameters', color: '#a78bfa',
  },
  {
    emoji: '🤗', title: 'Multiple HuggingFace Models',
    sub: 'Open-Source AI Contributions',
    desc: 'Published 6+ models on HuggingFace spanning NLP, computer vision, audio processing, and medical AI for the global open-source community.',
    stat: '6+', statLabel: 'Models', color: '#f472b6',
  },
  {
    emoji: '🎤', title: 'Technical Workshop Speaker',
    sub: 'GDGC MSIT — App Development',
    desc: 'Led technical workshops on Flutter app development at GDGC MSIT, mentoring 50+ junior developers in the campus tech community.',
    stat: '50+', statLabel: 'Devs Mentored', color: '#34d399',
  },
  {
    emoji: '💼', title: 'Concurrent ML Internships',
    sub: 'Cognifyz + CodSoft',
    desc: 'Secured multiple competitive ML internships in 2026, demonstrating strong technical readiness as a first/second-year CSE student.',
    stat: '4+', statLabel: 'Internships', color: '#22d3ee',
  },
  {
    emoji: '🎓', title: 'Multi-Cloud Certified',
    sub: 'AWS + Oracle + GCP',
    desc: 'Achieved certifications across three major cloud providers while maintaining academic excellence and internship responsibilities.',
    stat: '3', statLabel: 'Cloud Certs', color: '#fbbf24',
  },
];

/* ── Animated counter ───────────────────────── */
const Counter = ({ target, suffix }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const end = parseInt(target.replace(/\D/g, ''));
        let cur = 0;
        const step = end / 60;
        const id = setInterval(() => {
          cur += step;
          if (cur >= end) { setVal(end); clearInterval(id); }
          else setVal(Math.floor(cur));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [target]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

export default function Achievements() {
  const ref = useScrollReveal();

  return (
    <section id="achievements" ref={ref} className="hero-bg relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="reveal text-center mb-14">
          <div className="section-divider" />
          <h2 className="section-heading">Achievements</h2>
          <p className="section-subtitle">Milestones I'm proud of</p>
        </div>

        {/* Stats banner */}
        <div className="reveal card-glass rounded-2xl p-8 mb-10 border border-teal-500/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: '29000', s: '+', l: 'HF Downloads', e: '⬇️' },
              { v: '411', s: 'M', l: 'LLM Params', e: '🧠' },
              { v: '6', s: '+', l: 'Open Models', e: '🤗' },
              { v: '4', s: '+', l: 'Internships', e: '💼' },
            ].map(({ v, s, l, e }) => (
              <div key={l}>
                <div className="text-2xl mb-2">{e}</div>
                <div className="text-3xl md:text-4xl font-extrabold gradient-text">
                  <Counter target={v} suffix={s} />
                </div>
                <div className="text-slate-500 text-xs mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achs.map((a, i) => (
            <div key={i} id={`ach-${i}`}
              className={`reveal delay-${(i % 6) + 1} rounded-2xl p-6 border flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1`}
              style={{ background: `${a.color}0a`, borderColor: `${a.color}30` }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 12px 40px ${a.color}20`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl">{a.emoji}</span>
                <div className="text-right">
                  <div className="text-2xl font-extrabold" style={{ color: a.color }}>{a.stat}</div>
                  <div className="text-slate-500 text-xs">{a.statLabel}</div>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">{a.title}</h3>
                <div className="text-xs font-semibold mb-2" style={{ color: a.color }}>{a.sub}</div>
                <p className="text-slate-400 text-xs leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
