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
  return (
    <div className="min-h-screen relative" style={{ background: '#0a0f1d' }}>
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
