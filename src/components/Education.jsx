import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" ref={ref} className="section-dark py-24 relative overflow-hidden">
      {/* Subtle bg accent */}
      <div aria-hidden style={{ position:'absolute', right:'-10%', top:'20%', width:400, height:400,
        borderRadius:'50%', background:'radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)', pointerEvents:'none' }} />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="reveal text-center mb-12">
          <div className="section-divider" />
          <h2 className="section-heading mb-3">Education</h2>
          <p className="section-subtitle">Academic background &amp; coursework</p>
        </div>

        <div className="space-y-5">

          {/* B.Tech */}
          <div className="card reveal-left p-7 relative overflow-hidden">
            <div style={{ position:'absolute', left:0, top:0, bottom:0, width:3, borderRadius:'14px 0 0 14px', background:'linear-gradient(to bottom, #3b82f6, #1d4ed8)' }} />
            <div className="pl-4">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">🎓</span>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      B.Tech in Computer Science and Engineering (CSE)
                    </h3>
                  </div>
                  <p style={{ color:'#60a5fa', fontWeight:600, fontSize:'0.9375rem' }}>MAKAUT (MSIT)</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="tag tag-blue text-sm font-semibold px-3 py-1.5">2023 – 2027</div>
                  <div className="mt-2">
                    <span className="tag tag-green text-xs">Currently: 5th Semester</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color:'#475569' }}>
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Operating Systems',
                    'Data Structures & Algorithms',
                    'Software Engineering',
                    'Compiler Design',
                    'Industrial Management',
                  ].map(c => <span key={c} className="tag">{c}</span>)}
                </div>
              </div>
            </div>
          </div>

          {/* Higher Secondary */}
          <div className="card reveal-left p-7 relative overflow-hidden d2">
            <div style={{ position:'absolute', left:0, top:0, bottom:0, width:3, borderRadius:'14px 0 0 14px', background:'linear-gradient(to bottom, #10b981, #059669)' }} />
            <div className="pl-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">📚</span>
                    <h3 className="text-white font-bold text-lg">Higher Secondary (Science Stream)</h3>
                  </div>
                  <p style={{ color:'#34d399', fontWeight:600, fontSize:'0.9375rem' }}>
                    Saltlake Shiksha Niketan, West Bengal
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="tag tag-green text-sm font-semibold px-3 py-1.5">2023</div>
                  <div className="mt-2">
                    <span style={{ fontSize:'0.85rem', fontWeight:700, color:'#34d399' }}>89%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
