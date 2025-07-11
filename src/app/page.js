"use client";
import { StickyNavbar } from "@/components/StickyNavbar";
import { Meteors } from "@/components/Meteors";
import { Sparkles } from "@/components/Sparkles";
import About from "@/layouts/About";
import Experience from "@/layouts/Experience";
import Header from "@/layouts/Header";
import Projects from "@/layouts/Projects";
import Reach from "@/layouts/Reach";
import Reviews from "@/layouts/Reviews";
import Skills from "@/layouts/Skills";

import { useRef } from "react";
import {
  IconHome,
  IconUser,
  IconCode,
  IconBriefcase,
  IconFolder,
  IconStar,
  IconMail,
} from "@tabler/icons-react";

export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const reviewsRef = useRef(null);
  const reachRef = useRef(null);
  const projectsRef = useRef(null);
  const headerRef = useRef(null);

  const navItems = [
    { title: "Home", icon: <IconHome className="h-4 w-4" />, ref: headerRef },
    { title: "About", icon: <IconUser className="h-4 w-4" />, ref: aboutRef },
    { title: "Skills", icon: <IconCode className="h-4 w-4" />, ref: skillsRef },
    { title: "Experience", icon: <IconBriefcase className="h-4 w-4" />, ref: experienceRef },
    { title: "Projects", icon: <IconFolder className="h-4 w-4" />, ref: projectsRef },
    { title: "Reviews", icon: <IconStar className="h-4 w-4" />, ref: reviewsRef },
    { title: "Contact", icon: <IconMail className="h-4 w-4" />, ref: reachRef },
  ];

  const handleScrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative bg-black min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <Sparkles 
        id="sparkles-bg"
        background="transparent"
        minSize={0.1}
        maxSize={0.3}
        particleDensity={20}
        className="fixed inset-0 pointer-events-none z-0 opacity-5"
      />
      
      {/* Subtle dark overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-900/10 via-transparent to-black/20 pointer-events-none z-0" />
      
      {/* Sticky Navigation */}
      <StickyNavbar 
        items={navItems.map(item => ({
          ...item,
          onClick: () => handleScrollTo(item.ref)
        }))}
      />
      
      <div className="relative z-10 w-full overflow-x-hidden">
        {/* Hero Section */}
        <div ref={headerRef} className="relative w-full overflow-hidden bg-black">
          <Header onViewWork={() => handleScrollTo(projectsRef)} />
        </div>

        {/* About Section */}
        <div ref={aboutRef} className="relative w-full overflow-hidden bg-zinc-950">
          <About />
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="relative w-full overflow-hidden bg-black">
          <Skills />
        </div>

        {/* Experience Section */}
        <div ref={experienceRef} className="relative w-full overflow-hidden bg-zinc-950">
          <Experience />
        </div>

        {/* Projects Section */}
        <div ref={projectsRef} data-section="projects" className="relative w-full overflow-hidden bg-black z-20">
          <Projects />
        </div>

        {/* Reviews Section */}
        <div ref={reviewsRef} className="relative w-full overflow-hidden bg-zinc-950">
          <Reviews />
        </div>

        {/* Contact Section */}
        <div ref={reachRef} className="relative w-full overflow-hidden bg-black">
          <Reach />
        </div>
      </div>
    </div>
  );
}
