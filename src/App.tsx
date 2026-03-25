import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/shared/CustomCursor";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import { useLenis } from "./hooks/useLenis";

export default function App() {
  useLenis();

  return (
    <div className="bg-surface min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Skills />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <CustomCursor />
    </div>
  );
}
