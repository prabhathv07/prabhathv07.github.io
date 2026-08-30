import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProgressIndicator from "@/components/ProgressIndicator";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  return (
    <>
      <ProgressIndicator />
      <CommandPalette />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Manifesto />
        <Stats />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
