import { MapPin, GraduationCap, Zap, Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  { icon: GraduationCap, label: 'MAKAUT (MSIT)', desc: 'B.Tech CSE Student', color: '#2dd4bf' },
  { icon: MapPin,        label: 'Kolkata, India', desc: 'West Bengal',       color: '#22d3ee' },
  { icon: Zap,           label: 'AI/ML Focus',    desc: 'Deep Learning & LLMs', color: '#a78bfa' },
  { icon: Heart,         label: 'Open Source',    desc: '6+ HuggingFace Models', color: '#f472b6' },
];

const passions = ['Large Language Models','Computer Vision','Deep Learning','Fine-tuning','Neural Architectures','AI Ethics'];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="section-bg-alt relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="reveal text-center mb-14">
          <div className="section-divider" />
          <h2 className="section-heading">About Me</h2>
          <p className="section-subtitle">A little bit about who I am</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="space-y-6 reveal-left">
            <div className="card-glass rounded-2xl p-8">
              <p className="text-slate-300 text-base leading-relaxed mb-5">
                I'm <span style={{ color: '#2dd4bf', fontWeight: 600 }}>Koyeliya Ghosh</span>, a B.Tech CSE student at{' '}
                <span style={{ color: '#22d3ee', fontWeight: 600 }}>MAKAUT (MSIT)</span>, Kolkata — passionate about
                building systems that think, learn, and adapt.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                My journey spans <span style={{ color: '#2dd4bf' }}>AI/ML research</span>, open-source model publishing
                on HuggingFace, real-world internships, and full-stack development. From fine-tuning 411M-parameter
                Medical LLMs to crafting SOTA deepfake detectors — I believe in learning by building.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Beyond code, I'm an{' '}
                <span style={{ color: '#22d3ee' }}>App Team Member &amp; Workshop Speaker at GDGC MSIT</span>,
                mentoring peers and sharing knowledge on emerging technologies.
              </p>
            </div>

            {/* Passions */}
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-3">Passionate About</p>
              <div className="flex flex-wrap gap-2">
                {passions.map(p => <span key={p} className="tech-badge">{p}</span>)}
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4 reveal-right">
            {highlights.map(({ icon: Icon, label, desc, color }, i) => (
              <div key={label}
                className={`card-glass rounded-2xl p-6 text-center reveal delay-${i + 1}`}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform"
                  style={{ background: `${color}18` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div className="font-semibold text-white text-sm mb-0.5">{label}</div>
                <div className="text-slate-500 text-xs">{desc}</div>
              </div>
            ))}

            {/* Quote */}
            <div className="col-span-2 card-glass rounded-2xl p-5 text-center reveal delay-5">
              <p className="text-slate-400 text-sm italic leading-relaxed">
                "The best way to predict the future is to invent it."
              </p>
              <p className="text-xs font-semibold mt-2" style={{ color: '#2dd4bf' }}>— Alan Kay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
