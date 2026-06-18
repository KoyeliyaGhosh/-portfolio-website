import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="section-card py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="reveal text-center mb-12">
          <div className="section-divider" />
          <h2 className="section-heading mb-3">About Me</h2>
          <p className="section-subtitle">Professional background &amp; what drives me</p>
        </div>

        {/* Professional Summary card */}
        <div className="card reveal p-8 mb-8 relative overflow-hidden">
          {/* Accent line */}
          <div style={{ position:'absolute', left:0, top:0, bottom:0, width:3, borderRadius:'14px 0 0 14px',
            background:'linear-gradient(to bottom, #3b82f6, #10b981)' }} />
          <div className="pl-4">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color:'#3b82f6' }}>
              Professional Summary
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              Aspiring AI and Software Developer with strong expertise in Machine Learning, Deep Learning,
              Full-Stack Development, and Cloud Technologies. Experienced in building production-ready AI systems,
              Large Language Models, Computer Vision applications, and scalable web platforms.
              Passionate about Generative AI, research-driven development, and creating impactful technology solutions.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Quick info */}
          <div className="card reveal-left p-6 d1">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color:'#10b981' }}>Details</p>
            <div className="space-y-3">
              {[
                ['Name',     'Koyeliya Ghosh'],
                ['Degree',   'B.Tech CSE'],
                ['College',  'MAKAUT (MSIT)'],
                ['Year',     '5th Semester · 2023–27'],
                ['Location', 'Kolkata, West Bengal'],
                ['Email',    'koyeliya2004@gmail.com'],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-0.5">
                  <span style={{ fontSize:'0.7rem', color:'#475569', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.05em' }}>{k}</span>
                  <span style={{ fontSize:'0.875rem', color:'#cbd5e1' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Focus areas */}
          <div className="card reveal p-6 d2 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color:'#60a5fa' }}>Focus Areas</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                ['🧠', 'Large Language Models',   'Fine-tuning, deployment, inference optimization'],
                ['👁️', 'Computer Vision',          'Vision Transformers, CNNs, detection systems'],
                ['🎵', 'Audio AI',                 'Deepfake detection, speech processing'],
                ['🌐', 'Full-Stack Engineering',   'React, Next.js, FastAPI, Node.js'],
                ['☁️', 'Cloud & DevOps',            'AWS, GCP, Oracle OCI, Docker, CI/CD'],
                ['🔬', 'Research & Open Source',   'Published models on HuggingFace, MIT license'],
              ].map(([e, title, desc]) => (
                <div key={title} className="flex gap-3 p-3 rounded-lg" style={{ background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.05)' }}>
                  <span className="text-xl flex-shrink-0 mt-0.5">{e}</span>
                  <div>
                    <div style={{ fontSize:'0.8125rem', fontWeight:600, color:'#e2e8f0' }}>{title}</div>
                    <div style={{ fontSize:'0.73rem', color:'#475569', marginTop:'0.15rem' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
