"use client";
import { GridBackground } from "@/components/GridBackground";
import { FloatingNav } from "@/components/Navbar";
import Education from "@/layouts/Education";
import Experience from "@/layouts/Experience";
import Header from "@/layouts/Header";
import Projects from "@/layouts/Projects";
import Reach from "@/layouts/Reach";
import Reviews from "@/layouts/Reviews";
import Skills from "@/layouts/Skills";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const reviewsRef = useRef(null);
  const reachRef = useRef(null);
  const projectsRef = useRef(null);
  const navItems = [
    { name: "About", link: "#", ref: aboutRef },
    { name: "Skill", link: "#", ref: skillsRef },
    { name: "Education", link: "#", ref: educationRef },
    { name: "Projects", link: "#", ref: projectsRef },
    { name: "Reviews", link: "#", ref: reviewsRef },
  ];
  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="bg-white">
      <FloatingNav navItems={navItems} handleScrollTo={handleScrollTo} />
      <div className="flex flex-col w-full mb-8">
        <div ref={aboutRef}>
          <Header />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={reviewsRef}>
          <Reviews />
        </div>
        <div ref={reachRef}>
          <Reach />
        </div>
      </div>
      {/* </GridBackground> */}
    </div>
  );
}
