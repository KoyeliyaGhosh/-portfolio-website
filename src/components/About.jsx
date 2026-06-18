import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="reveal mb-12">
          <h2 className="section-heading mb-3">
            <span className="code-prefix">{'</>'}</span> ABOUT ME
          </h2>
          <div className="gold-line" style={{ maxWidth: 400 }} />
        </div>

        {/* My Journey */}
        <div className="reveal mb-12 relative pl-8" style={{ borderLeft: '2px solid rgba(243,198,35,0.2)' }}>
          <div style={{
            position: 'absolute', left: -5, top: 0, width: 10, height: 10,
            borderRadius: '50%', background: '#f3c623',
            boxShadow: '0 0 10px rgba(243,198,35,0.4)',
          }} />
          <p className="text-slate-300 text-base leading-relaxed mb-4">
            I'm a developer focused on building <strong style={{ color: '#f3c623' }}>AI-powered</strong> applications
            and scalable web systems. I enjoy transforming ideas into real-world products using{' '}
            <strong style={{ color: '#f3c623' }}>clean architecture</strong> and{' '}
            <strong style={{ color: '#f3c623' }}>modern technologies</strong>.
          </p>
          <div style={{
            position: 'absolute', left: -5, bottom: -20, width: 10, height: 10,
            borderRadius: '50%', background: '#ec4899',
            boxShadow: '0 0 10px rgba(236,72,153,0.4)',
          }} />
          <p className="text-slate-300 text-base leading-relaxed">
            My experience spans across <strong style={{ color: '#a855f7' }}>full-stack development</strong>,{' '}
            <strong style={{ color: '#a855f7' }}>machine learning</strong>, and{' '}
            <strong style={{ color: '#a855f7' }}>cloud-based systems</strong> —
            from publishing production-grade LLMs on HuggingFace to building end-to-end web platforms.
          </p>
        </div>

        {/* Knowledge Matrix */}
        <div className="reveal mb-8">
          <h3 style={{ color: '#f3c623', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            ✦ KNOWLEDGE MATRIX
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: '🧠', title: 'AI Systems',
              desc: 'LLM fine-tuning, Vision Transformers, Audio deepfake detection, HuggingFace deployment',
              color: '#f3c623',
            },
            {
              icon: '🌐', title: 'Full-Stack Web',
              desc: 'React, Next.js, Node.js, FastAPI, Firebase — end-to-end application development',
              color: '#a855f7',
            },
            {
              icon: '⚙️', title: 'Core Engineering',
              desc: 'Data structures, system design, cloud architecture (AWS, GCP, OCI), CI/CD pipelines',
              color: '#ec4899',
            },
          ].map(item => (
            <div key={item.title} className="card reveal p-6"
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${item.color}40`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ''; }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h4 style={{ color: item.color, fontWeight: 700, fontSize: '0.9rem' }}>{item.title}</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Quick Details */}
        <div className="card reveal p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ['Name', 'Koyeliya Ghosh'],
              ['Degree', 'B.Tech CSE'],
              ['College', 'MAKAUT (MSIT)'],
              ['Year', '5th Semester · 2023–27'],
              ['Location', 'Kolkata, West Bengal'],
              ['Email', 'koyeliya2004@gmail.com'],
            ].map(([k, v]) => (
              <div key={k}>
                <span style={{ fontSize: '0.7rem', color: '#f3c623', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{k}</span>
                <div style={{ fontSize: '0.875rem', color: '#cbd5e1', marginTop: '0.15rem' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
