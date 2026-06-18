import { useScrollReveal } from '../hooks/useScrollReveal';

const techGrid = [
  // Row 1: Languages & Core
  { name: 'PY', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', color: 'rgba(55,118,171,0.5)' },
  { name: 'JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: 'rgba(247,223,30,0.5)' },
  { name: 'TS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', color: 'rgba(49,120,198,0.5)' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', color: 'rgba(168,185,204,0.5)' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: 'rgba(97,218,251,0.5)' },
  { name: 'NextJS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/nextdotjs.svg', color: 'rgba(255,255,255,0.45)', invert: true },
  { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', color: 'rgba(51,153,51,0.5)' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/express.svg', color: 'rgba(255,255,255,0.45)', invert: true },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', color: 'rgba(71,162,72,0.5)' },
  
  // Row 2
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', color: 'rgba(0,117,143,0.5)' },
  { name: 'Postgres', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', color: 'rgba(65,105,225,0.5)' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', color: 'rgba(62,207,142,0.5)' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/amazonwebservices.svg', color: 'rgba(255,153,0,0.5)' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', color: 'rgba(36,150,237,0.5)' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg', color: 'rgba(50,108,230,0.5)' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', color: 'rgba(240,80,50,0.5)' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/github.svg', color: 'rgba(255,255,255,0.45)', invert: true },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/flask.svg', color: 'rgba(255,255,255,0.45)', invert: true },
  
  // Row 3
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', color: 'rgba(216,44,32,0.5)' },
  { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/prisma.svg', color: 'rgba(43,186,180,0.5)' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: 'rgba(6,182,212,0.5)' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', color: 'rgba(21,114,182,0.5)' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', color: 'rgba(227,79,38,0.5)' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', color: 'rgba(242,78,29,0.5)' },
  { name: 'Notion', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/notion.svg', color: 'rgba(255,255,255,0.45)', invert: true },
  { name: 'MD', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/markdown.svg', color: 'rgba(255,255,255,0.45)', invert: true },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', color: 'rgba(252,194,0,0.5)' },

  // Row 4
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', color: 'rgba(238,76,44,0.5)' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', color: 'rgba(255,111,0,0.5)' },
  { name: 'HF', icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg', color: 'rgba(255,210,30,0.5)' },
  { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg', color: 'rgba(208,0,0,0.5)' },
  { name: 'Scikit-Learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg', color: 'rgba(247,147,30,0.5)' },
  { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg', color: 'rgba(92,62,232,0.5)' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', color: 'rgba(0,150,136,0.5)' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg', color: 'rgba(100,108,255,0.5)' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', color: 'rgba(255,202,40,0.5)' }
];

export default function Skills() {
  const ref = useScrollReveal(0.05);

  // Generate simulated GitHub data
  const githubCols = Array.from({ length: 42 }, () =>
    Array.from({ length: 7 }, () => {
      const val = Math.random();
      if (val < 0.45) return 0;
      if (val < 0.75) return Math.floor(Math.random() * 2) + 1;
      return Math.floor(Math.random() * 2) + 3;
    })
  );

  return (
    <section id="skills" ref={ref} className="py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="reveal mb-12">
          <h2 className="section-heading mb-3" style={{ textAlign: 'left' }}>DEVELOPER ECOSYSTEM</h2>
          <div className="gold-line" />
        </div>

        {/* Dynamic Glowing Logo Grid */}
        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-3">
          {techGrid.map((tech, i) => (
            <div
              key={tech.name}
              id={`tech-${i}`}
              className={`tech-card reveal reveal-scale d${(i % 6) + 1}`}
              style={{
                '--hover-glow': tech.color,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.65rem',
                padding: '1.15rem 0.5rem',
                background: 'rgba(15, 20, 40, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '14px',
                cursor: 'default',
              }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                style={{
                  width: '36px',
                  height: '36px',
                  objectFit: 'contain',
                  filter: tech.invert ? 'brightness(0) invert(1)' : 'none',
                  transition: 'transform 0.3s ease',
                }}
              />
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.05em' }}>
                {tech.name.toUpperCase()}
              </span>
            </div>
          ))}
        </div>

        {/* Dashboard Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">

          {/* Card 1: GitHub Contribution Grid */}
          <div className="card reveal p-6 flex flex-col justify-between" style={{ background: 'rgba(15, 20, 40, 0.7)' }}>
            <div>
              <div className="flex justify-between items-center mb-6 text-[10px] uppercase font-mono tracking-wider text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active Contribution
                </span>
                <span className="flex items-center gap-1 select-none">
                  Jan &nbsp; Feb &nbsp; Mar &nbsp; Apr &nbsp; May &nbsp; Jun
                </span>
              </div>

              {/* Grid Wrapper */}
              <div className="flex gap-[3.5px] overflow-x-auto scrollbar-none pb-2 select-none justify-center">
                {githubCols.map((col, cIdx) => (
                  <div key={cIdx} className="flex flex-col gap-[3.5px] flex-shrink-0">
                    {col.map((level, rIdx) => {
                      const colors = ['rgba(255,255,255,0.05)', '#0e4429', '#006d32', '#26a641', '#39d353'];
                      return (
                        <div
                          key={rIdx}
                          className="hover:scale-125 transition-transform duration-150"
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '1.5px',
                            backgroundColor: colors[level]
                          }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-3 text-[9px] text-slate-500 font-mono select-none">
                <span>Less</span>
                <div className="flex gap-[3px]">
                  <span className="w-2 h-2 rounded-[1.5px] bg-[rgba(255,255,255,0.05)]" />
                  <span className="w-2 h-2 rounded-[1.5px] bg-[#0e4429]" />
                  <span className="w-2 h-2 rounded-[1.5px] bg-[#006d32]" />
                  <span className="w-2 h-2 rounded-[1.5px] bg-[#26a641]" />
                  <span className="w-2 h-2 rounded-[1.5px] bg-[#39d353]" />
                </div>
                <span>More</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/40">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 900, color: '#f3c623', lineHeight: 1 }}>972</span>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>contributions in the last year</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.75rem', fontSize: '0.75rem', color: '#cbd5e1' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.086 1.837 1.237 1.837 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.285c0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                <span className="font-mono text-slate-400">@koyelya2004</span>
              </div>
            </div>
          </div>

          {/* Card 2: Contribution Line Graph (spans 2 columns on lg screens) */}
          <div className="card reveal d2 p-6 flex flex-col justify-between lg:col-span-2" style={{ background: 'rgba(15, 20, 40, 0.7)' }}>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 style={{ color: '#f3c623', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', fontFamily: "'Poppins', sans-serif" }}>
                  KOYELIYA'S CONTRIBUTION GRAPH
                </h4>
                <span style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>PAST 21 DAYS</span>
              </div>

              {/* SVG Curved Graph */}
              <div style={{ position: 'relative', width: '100%', height: '140px' }}>
                <svg viewBox="0 0 600 140" width="100%" height="100%" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f3c623" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#f3c623" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal dotted gridlines */}
                  <line x1="0" y1="20" x2="600" y2="20" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                  <line x1="0" y1="60" x2="600" y2="60" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                  <line x1="0" y1="100" x2="600" y2="100" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />

                  {/* Y Axis Labels */}
                  <text x="-12" y="24" fill="rgba(255,255,255,0.25)" fontSize="9" textAnchor="end" fontFamily="monospace">120</text>
                  <text x="-12" y="64" fill="rgba(255,255,255,0.25)" fontSize="9" textAnchor="end" fontFamily="monospace">80</text>
                  <text x="-12" y="104" fill="rgba(255,255,255,0.25)" fontSize="9" textAnchor="end" fontFamily="monospace">40</text>
                  <text x="-12" y="138" fill="rgba(255,255,255,0.25)" fontSize="9" textAnchor="end" fontFamily="monospace">0</text>

                  {/* Filled Gradient Path */}
                  <path
                    d="M 10,135 C 30,120 50,45 80,48 C 110,50 140,82 170,80 C 200,78 230,55 260,50 C 290,45 320,62 350,55 C 380,48 410,105 440,100 C 470,95 490,20 520,22 C 555,25 570,85 590,95 L 590,138 L 10,138 Z"
                    fill="url(#chartGlow)"
                  />

                  {/* Curvy Line Path */}
                  <path
                    d="M 10,135 C 30,120 50,45 80,48 C 110,50 140,82 170,80 C 200,78 230,55 260,50 C 290,45 320,62 350,55 C 380,48 410,105 440,100 C 470,95 490,20 520,22 C 555,25 570,85 590,95"
                    fill="none"
                    stroke="#f3c623"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    style={{
                      filter: 'drop-shadow(0 0 6px rgba(243,198,35,0.45))'
                    }}
                  />

                  {/* Data Point Circles */}
                  {[
                    [10, 135], [45, 95], [80, 48], [115, 68], [150, 78], [185, 80],
                    [220, 62], [255, 52], [290, 46], [325, 58], [360, 52], [395, 80],
                    [430, 102], [465, 96], [500, 26], [535, 34], [570, 88], [590, 95]
                  ].map(([x, y], idx) => (
                    <circle
                      key={idx}
                      cx={x}
                      cy={y}
                      r="3.5"
                      fill="#f3c623"
                      stroke="#0f1428"
                      strokeWidth="1.5"
                      style={{ filter: 'drop-shadow(0 0 4px rgba(243,198,35,0.6))' }}
                    />
                  ))}
                </svg>
              </div>

              {/* X Axis Labels */}
              <div className="flex justify-between mt-3 text-[8.5px] text-slate-500 font-mono px-2 select-none">
                {['26', '27', '28', '29', '30', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'].map((day, idx) => (
                  <span key={idx}>{day}</span>
                ))}
              </div>
              <div className="text-center text-[9px] uppercase tracking-wider text-slate-600 font-mono mt-1 select-none">
                Days
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Three Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

          {/* Dev & Design Card */}
          <div className="card reveal d3 p-6 flex flex-col justify-between" style={{ background: 'rgba(15, 20, 40, 0.7)' }}>
            <div>
              <div className="flex items-center gap-6 my-6 relative justify-center">
                {/* Connector line behind */}
                <div style={{
                  position: 'absolute',
                  left: '12%',
                  right: '12%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #a855f7 0%, #f3c623 50%, #ec4899 100%)',
                  zIndex: 0
                }} />
                {/* Node 1 */}
                <div className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sm z-10" style={{ color: '#a855f7' }}>
                  📱
                </div>
                {/* Central glowing Node 2 */}
                <div className="w-15 h-15 rounded-full bg-slate-900 border-2 border-[#f3c623] shadow-[0_0_20px_rgba(243,198,35,0.45)] flex items-center justify-center text-xl z-10" style={{ padding: '2px' }}>
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center border border-slate-800/40">
                    💻
                  </div>
                </div>
                {/* Node 3 */}
                <div className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sm z-10" style={{ color: '#ec4899' }}>
                  ✏️
                </div>
              </div>

              <h3 style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.5rem', fontFamily: "'Poppins', sans-serif" }}>
                Dev & <span style={{ color: '#f3c623', fontStyle: 'italic' }}>Design</span>
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.6 }}>
                Excels in both development and design to create a seamless and intuitive user experience.
              </p>
            </div>
          </div>

          {/* Open to Collaborations Card */}
          <div className="card reveal d4 p-6 flex flex-col justify-between" style={{ background: 'rgba(15, 20, 40, 0.7)' }}>
            <div>
              <div className="flex items-center justify-center my-6">
                <div className="w-15 h-15 rounded-full bg-[#f3c623]/10 border border-[#f3c623]/25 flex items-center justify-center text-xl shadow-[0_0_24px_rgba(243,198,35,0.08)] relative">
                  <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#f3c623]/10 opacity-75" />
                  👥
                </div>
              </div>

              <h3 style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.5rem', fontFamily: "'Poppins', sans-serif" }}>
                Open to <span style={{ color: '#f3c623' }}>Collaborations</span>
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.6 }}>
                Whether a small project or your next big SaaS, I am always open to collaborate and build something impactful.
              </p>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div className="card reveal d5 p-6" style={{ background: 'rgba(15, 20, 40, 0.7)' }}>
            <h3 style={{ color: '#f3c623', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              ⚡ TECH STACK
            </h3>
            <div className="space-y-3">
              {[
                ['React', 90],
                ['Node.js', 80],
                ['Python', 75],
                ['Figma', 85],
                ['SQL', 70],
              ].map(([name, pct]) => (
                <div key={name}>
                  <div className="flex justify-between mb-0.5">
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#e2e8f0' }}>{name}</span>
                    <span style={{ fontSize: '0.7rem', color: '#f3c623', fontWeight: 700 }}>{pct}%</span>
                  </div>
                  <div style={{ height: 5, background: 'rgba(255,255,255,0.05)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{
                      width: `${pct}%`, height: '100%', borderRadius: 3,
                      background: 'linear-gradient(90deg, #f3c623, #d4a017)',
                    }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {['TypeScript', 'Tailwind', 'MongoDB', 'Git'].map(t => {
                const colors = {
                  'TypeScript': 'rgba(49,120,198,0.15)',
                  'Tailwind': 'rgba(6,182,212,0.15)',
                  'MongoDB': 'rgba(71,162,72,0.15)',
                  'Git': 'rgba(240,80,50,0.15)'
                };
                const textColors = {
                  'TypeScript': '#3178C6',
                  'Tailwind': '#06B6D4',
                  'MongoDB': '#47A248',
                  'Git': '#F05032'
                };
                return (
                  <span
                    key={t}
                    className="tag select-none"
                    style={{
                      fontSize: '0.65rem',
                      padding: '0.15rem 0.5rem',
                      background: colors[t] || 'rgba(255,255,255,0.04)',
                      borderColor: colors[t] || 'rgba(255,255,255,0.08)',
                      color: textColors[t] || '#fff'
                    }}
                  >
                    {t}
                  </span>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
