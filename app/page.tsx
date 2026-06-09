import Image from "next/image";

import { Navbar, LandingSection, AboutSection, ContactSection, ProjectSection, SkillsSection, ExperienceSection } from "./sections"

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <section className="">
        <LandingSection/>
        <AboutSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <ProjectSection/>
        <ContactSection/>
      </section>
    </div>
  );
}
