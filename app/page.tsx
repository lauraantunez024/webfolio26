import Image from "next/image";

import { Navbar, LandingSection, AboutSection, ContactSection, ProjectSection, SkillsSection, ExperienceSection } from "./sections"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <section>
        <LandingSection/>
        <AboutSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <ProjectSection/>
        <ContactSection/>
        <div className="flex flex-row justify-between p-4 my-8 text-(--text-darker) ibm-mono-font text-xs">
          <span>© 2026 Laura Antunez — lauraantunez.com</span>
          <span>Built with Next.js and Tailwind</span>
        </div>
      </section>
    </main>
  );
}
