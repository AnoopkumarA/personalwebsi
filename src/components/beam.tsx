"use client";
import { TracingBeam } from "./ui/tracing-beam";
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import { WorkExperience } from "./WorkExperiences";
import { Education } from "./Education";

export function Beam() {
  return (
    <TracingBeam className="px-0">
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Contact />
    </TracingBeam>
  );
}

export default Beam;