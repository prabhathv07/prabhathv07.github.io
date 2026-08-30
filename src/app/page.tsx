import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
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
        <Stats />
        <Marquee />
        <Manifesto />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
