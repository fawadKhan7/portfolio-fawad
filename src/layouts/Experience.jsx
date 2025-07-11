import { Timeline } from "@/components/Timeline";
import { Typewriter } from "@/components/Typewriter";
import ScrollReveal from "@/components/ScrollReveal";
import { timelineData } from "@/data/HeaderData";
import React from "react";

const Experience = () => {
  return (
    <div className="min-h-[70vh] py-12">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-4">
          Professional Journey
        </h1>
        
        <p className="text-zinc-400 text-sm md:text-base max-w-3xl mx-auto text-center leading-relaxed mb-4">
          A proven track record of delivering exceptional results across diverse projects and industries
        </p>
        
        <p className="text-zinc-500 text-xs md:text-sm max-w-2xl mx-auto text-center leading-relaxed mb-12">
          From foundational internships to senior development roles, each experience has shaped my expertise in creating premium digital solutions
        </p>
        
        <Timeline data={timelineData} />
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Experience;
