"use client";
import { BackgroundBeams } from "./ui/background-beams";
import Hero from "../components/Hero";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[50rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <Hero />
      <BackgroundBeams />
    </div>
  );
}
