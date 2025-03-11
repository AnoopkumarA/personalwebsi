"use client";
import { TracingBeam } from "./ui/tracing-beam";
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import { WorkExperience } from "./WorkExperiences";
import { Education } from "./Education";
import { Publications } from "./Publications";
import { Achievements } from "./Achievements";

export function Beam() {
  return (
    <TracingBeam className="px-0">
      <About />
      <WorkExperience />
      <Education />
      <Publications />
      <Achievements />
      <Skills />
      <Contact />
    </TracingBeam>
  );
}

export default Beam;