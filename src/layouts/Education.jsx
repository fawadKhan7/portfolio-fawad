import { StickyScroll } from "@/components/StickyScroll";
import { Typewriter } from "@/components/Typewriter";
import ScrollReveal from "@/components/ScrollReveal";
import { educationContent } from "@/data/HeaderData";
import React from "react";

const Education = () => {
  return (
    <div className="min-h-[70vh] py-12">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-4">
            Education
          </h1>
          
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto text-center leading-relaxed mb-10">
            My academic background and educational achievements that laid the foundation for my career in technology.
          </p>

          <StickyScroll content={educationContent} contentClassName="custom-class" />
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Education;
