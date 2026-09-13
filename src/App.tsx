
import { useSmoothScroll } from './lib/lenis';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero/Hero';
import { CapabilityBar } from './components/CapabilityBar';
import { SelectedWork } from './components/SelectedWork/SelectedWork';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  // Initialize Lenis smooth scroll
  useSmoothScroll();

  const handleStartProject = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#05070d] text-white selection:bg-cyan-500 selection:text-black">
      {/* Desktop Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Persistent Frosted Header */}
      <Header onStartProject={handleStartProject} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Cinematic 3D Hero */}
        <Hero onStartProject={handleStartProject} />

        {/* 2. Capability Bar */}
        <CapabilityBar />

        {/* 3. Selected Work (Bella Liveaboard) */}
        <SelectedWork />

        {/* 4. About Me */}
        <About />

        {/* 5. Services (6 Spotlight Cards) */}
        <Services />

        {/* 6. Process Workflow */}
        <Process />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
