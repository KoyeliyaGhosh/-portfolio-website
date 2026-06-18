import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WaveBackground from './components/WaveBackground';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 1.8s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    // Remove loader completely from DOM after 2.4s (fade duration is 600ms)
    const removeTimer = setTimeout(() => setLoading(false), 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="min-h-screen relative" style={{ background: '#0a0f1d' }}>
      {/* Visual Preloader overlay screen */}
      {loading && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: '#0a0f1d',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            opacity: fadeOut ? 0 : 1,
            transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: fadeOut ? 'none' : 'auto',
          }}
        >
          {/* Glowing Animated Logo */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <div
              style={{
                width: 70,
                height: 70,
                background: 'linear-gradient(135deg, #f3c623, #ec4899, #a855f7)',
                borderRadius: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'rotate(45deg)',
                boxShadow: '0 0 40px rgba(243,198,35,0.4), 0 0 10px rgba(236,72,153,0.3)',
                animation: 'pulse 1.8s ease-in-out infinite',
              }}
            >
              <span style={{ transform: 'rotate(-45deg)', color: '#fff', fontSize: '1.8rem', fontWeight: 900, fontFamily: "'Poppins', sans-serif" }}>
                K
              </span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  letterSpacing: '0.2em',
                  color: '#fff',
                  textTransform: 'uppercase',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                KOYELIYA
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  color: '#f3c623',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                AI & SOFTWARE DEVELOPER
              </span>
            </div>

            {/* Glowing progress line */}
            <div style={{ width: 140, height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 1, overflow: 'hidden', marginTop: '0.5rem' }}>
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  background: 'linear-gradient(90deg, #f3c623, #ec4899)',
                  animation: 'loadingBar 1.8s ease-in-out infinite',
                  transformOrigin: 'left',
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Fixed wave animation across entire site */}
      <WaveBackground />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
