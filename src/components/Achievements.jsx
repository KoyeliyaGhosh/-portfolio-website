import { useEffect, useRef, useState } from 'react';
import { Trophy, TrendingUp, Star, Users, Zap } from 'lucide-react';

const achievements = [
  {
    icon: '🏆',
    title: '29,000+ Model Downloads',
    subtitle: 'Global HuggingFace Adoption',
    description: 'The Face Recognition Model surpassed 29,075 downloads on HuggingFace, reflecting real-world utility and global adoption across research and production use cases.',
    stat: '29K+',
    statLabel: 'Downloads',
    color: 'teal',
  },
  {
    icon: '🧠',
    title: 'Published 411M-Param Medical LLM',
    subtitle: 'MediMind — Open Source AI',
    description: 'Independently designed, trained, and published a 411-million parameter Large Language Model specialized for medical domain Q&A, available publicly on HuggingFace.',
    stat: '411M',
    statLabel: 'Parameters',
    color: 'violet',
  },
  {
    icon: '🤗',
    title: 'Multiple HuggingFace Models',
    subtitle: 'Open-Source AI Contributions',
    description: 'Published 6+ models on HuggingFace spanning NLP, computer vision, audio processing, and medical AI — contributing to the global open-source AI ecosystem.',
    stat: '6+',
    statLabel: 'Models',
    color: 'pink',
  },
  {
    icon: '🎤',
    title: 'Technical Workshop Speaker',
    subtitle: 'GDGC MSIT — App Development',
    description: 'Conducted and led technical workshops on Flutter app development at Google Developer Groups on Campus (GDGC) MSIT, mentoring 50+ junior developers.',
    stat: '50+',
    statLabel: 'Developers Mentored',
    color: 'emerald',
  },
  {
    icon: '💼',
    title: 'Concurrent ML Internships',
    subtitle: 'Cognifyz + CodSoft',
    description: 'Secured multiple competitive ML internships simultaneously in 2026, demonstrating strong technical skills and industry readiness as a first/second-year CSE student.',
    stat: '4+',
    statLabel: 'Internships',
    color: 'cyan',
  },
  {
    icon: '🎓',
    title: 'Multi-Cloud Certified',
    subtitle: 'AWS + Oracle + GCP',
    description: 'Achieved certifications across three major cloud providers (AWS SAA-C03, Oracle OCI, Google Cloud) while maintaining academic excellence and internship responsibilities.',
    stat: '3',
    statLabel: 'Cloud Certs',
    color: 'amber',
  },
];

const colorMap = {
  teal: { bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.25)', stat: 'text-teal-400', glow: 'rgba(20,184,166,0.15)' },
  violet: { bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.25)', stat: 'text-violet-400', glow: 'rgba(139,92,246,0.15)' },
  pink: { bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.25)', stat: 'text-pink-400', glow: 'rgba(236,72,153,0.15)' },
  emerald: { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.25)', stat: 'text-emerald-400', glow: 'rgba(16,185,129,0.15)' },
  cyan: { bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.25)', stat: 'text-cyan-400', glow: 'rgba(6,182,212,0.15)' },
  amber: { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)', stat: 'text-amber-400', glow: 'rgba(245,158,11,0.15)' },
};

const AnimatedCounter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const end = parseInt(target.replace(/\D/g, ''));
        const duration = 1500;
        const step = end / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.ach-card').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, i * 100);
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
    <section id="achievements" ref={sectionRef} className="py-28 hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Achievements</h2>
        <p className="section-subtitle">Milestones I'm proud of</p>

        {/* Highlight Stats Banner */}
        <div className="card-glass rounded-2xl p-8 mb-12 border border-teal-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '29000', suffix: '+', label: 'HF Downloads', icon: '⬇️' },
              { value: '411', suffix: 'M', label: 'LLM Params', icon: '🧠' },
              { value: '6', suffix: '+', label: 'Open Models', icon: '🤗' },
              { value: '4', suffix: '+', label: 'Internships', icon: '💼' },
            ].map(({ value, suffix, label, icon }) => (
              <div key={label}>
                <div className="text-2xl mb-2">{icon}</div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <div className="text-slate-500 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, idx) => {
            const colors = colorMap[ach.color];
            return (
              <div
                key={idx}
                id={`achievement-${idx}`}
                className="ach-card rounded-2xl p-6 border flex flex-col gap-4"
                style={{
                  background: colors.bg,
                  borderColor: colors.border,
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 32px ${colors.glow}`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{ach.icon}</span>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${colors.stat}`}>{ach.stat}</div>
                    <div className="text-slate-500 text-xs">{ach.statLabel}</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{ach.title}</h3>
                  <div className={`text-xs font-medium mb-3 ${colors.stat}`}>{ach.subtitle}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{ach.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
