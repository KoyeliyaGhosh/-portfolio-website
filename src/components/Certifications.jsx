import { useEffect, useRef } from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Solutions Architect Associate (SAA-C03)',
    issuer: 'Amazon Web Services',
    emoji: '☁️',
    description: 'Validated expertise in designing distributed systems on AWS, covering compute, storage, networking, and security services.',
    color: 'orange',
    category: 'Cloud',
    year: '2026',
  },
  {
    title: 'Oracle AI Foundations Associate',
    issuer: 'Oracle',
    emoji: '🔮',
    description: 'Certified in foundational AI/ML concepts and Oracle Cloud AI services including OCI AI Vision, Language, and Speech.',
    color: 'red',
    category: 'AI/Cloud',
    year: '2026',
  },
  {
    title: 'IBM AI Product Management',
    issuer: 'IBM / Coursera',
    emoji: '🤖',
    description: 'Comprehensive training in managing AI products through the full lifecycle — from ideation and data strategy to deployment and iteration.',
    color: 'blue',
    category: 'Product & AI',
    year: '2025',
  },
  {
    title: 'IBM DevOps and Software Engineering',
    issuer: 'IBM / Coursera',
    emoji: '⚙️',
    description: 'Professional certificate covering CI/CD pipelines, containerization with Docker/Kubernetes, Agile methodologies, and DevOps culture.',
    color: 'indigo',
    category: 'DevOps',
    year: '2025',
  },
  {
    title: 'Google Cloud Generative AI & Gemini Tooling',
    issuer: 'Google Cloud',
    emoji: '✨',
    description: 'Hands-on training in Generative AI on Google Cloud including Vertex AI, Gemini API, prompt engineering, and LLM application development.',
    color: 'teal',
    category: 'GenAI',
    year: '2025',
  },
];

const colorMap = {
  orange: { badge: 'bg-orange-500/15 text-orange-400 border-orange-500/30', glow: 'rgba(249,115,22,0.2)', dot: 'bg-orange-400' },
  red: { badge: 'bg-red-500/15 text-red-400 border-red-500/30', glow: 'rgba(239,68,68,0.2)', dot: 'bg-red-400' },
  blue: { badge: 'bg-blue-500/15 text-blue-400 border-blue-500/30', glow: 'rgba(59,130,246,0.2)', dot: 'bg-blue-400' },
  indigo: { badge: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30', glow: 'rgba(99,102,241,0.2)', dot: 'bg-indigo-400' },
  teal: { badge: 'bg-teal-500/15 text-teal-400 border-teal-500/30', glow: 'rgba(20,184,166,0.2)', dot: 'bg-teal-400' },
};

export default function Certifications() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.cert-item').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateX(0)';
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
    <section id="certifications" ref={sectionRef} className="py-28 section-bg-alt">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Certifications</h2>
        <p className="section-subtitle">Credentials that validate my expertise</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, idx) => {
            const colors = colorMap[cert.color];
            return (
              <div
                key={idx}
                id={`cert-${idx}`}
                className={`cert-item card-glass rounded-2xl p-6 border border-white/5 flex gap-4 group`}
                style={{
                  opacity: 0,
                  transform: 'translateX(-20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.glow.replace('0.2', '0.5');
                  e.currentTarget.style.boxShadow = `0 8px 24px ${colors.glow}`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Emoji Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: colors.glow.replace('0.2', '0.1') }}
                >
                  {cert.emoji}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-teal-300 transition-colors">
                      {cert.title}
                    </h3>
                    <CheckCircle size={16} className={`flex-shrink-0 ${colors.badge.split(' ')[1]}`} />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-slate-400 text-xs">{cert.issuer}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-500 text-xs">{cert.year}</span>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed mb-3">{cert.description}</p>

                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${colors.badge}`}>
                    {cert.category}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Summary Card */}
          <div className="md:col-span-2 card-glass rounded-2xl p-6 border border-teal-500/20">
            <div className="flex flex-wrap items-center justify-around gap-6 text-center">
              {[
                { value: '5', label: 'Certifications', icon: '🏆' },
                { value: '3', label: 'Cloud Platforms', icon: '☁️' },
                { value: '2', label: 'IBM Credentials', icon: '🤖' },
                { value: '2026', label: 'Latest Year', icon: '📅' },
              ].map(({ value, label, icon }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl mb-1">{icon}</div>
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-slate-500 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
