import { useEffect, useRef } from 'react';
import { MapPin, GraduationCap, Heart, Zap } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, label: 'MAKAUT (MSIT)', desc: 'B.Tech CSE Student' },
  { icon: MapPin, label: 'Kolkata, India', desc: 'West Bengal' },
  { icon: Zap, label: 'AI/ML Focus', desc: 'Deep Learning & LLMs' },
  { icon: Heart, label: 'Open Source', desc: '6+ HuggingFace Models' },
];

const passions = [
  'Large Language Models',
  'Computer Vision',
  'Deep Learning',
  'Model Fine-tuning',
  'Neural Architecture',
  'AI Ethics',
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section id="about" ref={sectionRef} className="py-28 section-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="section-heading">About Me</h2>
          <p className="section-subtitle">A little bit about who I am</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Column */}
          <div className="space-y-6 animate-on-scroll">
            <div className="card-glass rounded-2xl p-8">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I'm <span className="text-teal-400 font-semibold">Koyeliya Ghosh</span>, a B.Tech CSE student at{' '}
                <span className="text-cyan-400 font-semibold">MAKAUT (MSIT)</span>, based in Kolkata, West Bengal.
                I'm deeply passionate about the intersection of intelligence and software — building systems that think, learn, and adapt.
              </p>

              <p className="text-slate-400 leading-relaxed mb-6">
                My journey spans across <span className="text-teal-400">AI/ML research</span>, open-source model publishing on HuggingFace,
                internships with real-world ML deployments, and full-stack development. I believe in learning by building —
                from fine-tuning 411M-parameter medical LLMs to crafting SOTA deepfake detectors.
              </p>

              <p className="text-slate-400 leading-relaxed">
                Beyond coding, I actively contribute to the developer community as an{' '}
                <span className="text-cyan-400">App Team Member & Workshop Speaker at GDGC MSIT</span>,
                where I mentor peers and share technical knowledge on emerging technologies.
              </p>
            </div>

            {/* Passion Tags */}
            <div>
              <p className="text-slate-400 text-sm font-medium mb-3 uppercase tracking-wider">Passionate About</p>
              <div className="flex flex-wrap gap-2">
                {passions.map((p) => (
                  <span key={p} className="tech-badge">{p}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 animate-on-scroll">
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className="card-glass rounded-2xl p-6 text-center group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.2), rgba(6,182,212,0.2))' }}
                >
                  <Icon size={22} className="text-teal-400" />
                </div>
                <div className="font-semibold text-white text-sm mb-1">{label}</div>
                <div className="text-slate-500 text-xs">{desc}</div>
              </div>
            ))}

            {/* Quote Card */}
            <div className="col-span-2 card-glass rounded-2xl p-6">
              <p className="text-slate-400 text-sm italic text-center leading-relaxed">
                "The best way to predict the future is to invent it."
              </p>
              <p className="text-teal-400 text-xs text-center mt-2 font-medium">— Alan Kay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
