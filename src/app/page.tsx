import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Identity from '@/components/sections/Identity';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import AgriVision from '@/components/sections/AgriVision';
import Exploring from '@/components/sections/Exploring';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Navbar />
      <main id="main-content" className="flex flex-col">
        <Hero />
        <Identity />
        <Projects />
        <Experience />
        <TechStack />
        <AgriVision />
        <Exploring />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
