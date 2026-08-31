import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Principles from "@/components/Principles";
import HorizontalProjects from "@/components/HorizontalProjects";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProgressIndicator from "@/components/ProgressIndicator";
import CommandPalette from "@/components/CommandPalette";
import SectionRail from "@/components/SectionRail";

export default function Home() {
  return (
    <>
      <ProgressIndicator />
      <CommandPalette />
      <SectionRail />
      <Nav />
      <main className="flex-1 pt-14">
        <Hero />
        <Marquee />
        <Manifesto />
        <Principles />
        <HorizontalProjects />
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
