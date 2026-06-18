import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" ref={ref} className="py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="reveal mb-12">
          <h2 className="section-heading mb-3">
            <span className="code-prefix">{'</>'}</span> EDUCATION
          </h2>
          <div className="gold-line" style={{ maxWidth: 300 }} />
        </div>

        <div className="space-y-5">
          {/* B.Tech */}
          <div className="card reveal-left p-7 relative overflow-hidden">
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, borderRadius: '16px 0 0 16px', background: 'linear-gradient(to bottom, #f3c623, #d4a017)' }} />
            <div className="pl-4">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">🎓</span>
                    <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.1rem' }}>
                      B.Tech in Computer Science and Engineering (CSE)
                    </h3>
                  </div>
                  <p style={{ color: '#f3c623', fontWeight: 600, fontSize: '0.9375rem' }}>MAKAUT (MSIT)</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="tag text-sm font-semibold px-3 py-1.5">2023 – 2027</div>
                  <div className="mt-2">
                    <span style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: 600 }}>Currently: 5th Semester</span>
                  </div>
                </div>
              </div>

              <div>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f3c623', marginBottom: '0.5rem' }}>
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Operating Systems', 'Data Structures & Algorithms', 'Software Engineering', 'Compiler Design', 'Industrial Management'].map(c => (
                    <span key={c} className="tag">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Higher Secondary */}
          <div className="card reveal-left d2 p-7 relative overflow-hidden">
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, borderRadius: '16px 0 0 16px', background: 'linear-gradient(to bottom, #a855f7, #7c3aed)' }} />
            <div className="pl-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">📚</span>
                    <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.1rem' }}>Higher Secondary (Science Stream)</h3>
                  </div>
                  <p style={{ color: '#a855f7', fontWeight: 600, fontSize: '0.9375rem' }}>
                    Saltlake Shiksha Niketan, West Bengal
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="tag text-sm font-semibold px-3 py-1.5">2023</div>
                  <div className="mt-2">
                    <span style={{ fontSize: '1rem', fontWeight: 800, color: '#f3c623' }}>89%</span>
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
