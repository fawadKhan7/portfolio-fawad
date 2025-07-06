import { Timeline } from "@/components/Timeline";
import { Typewriter } from "@/components/Typewriter";
import { timelineData } from "@/data/HeaderData";
import React from "react";

const Experience = () => {
  return (
    <div className="min-h-[70vh] py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <Typewriter
          words={[
            { text: "Professional", className: "text-gray-800" },
            { text: "Experience", className: "text-blue-600" },
            { text: "&", className: "text-gray-800" },
            { text: "Journey", className: "text-purple-600" },
          ]}
          className="text-center mb-6"
        />
        
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto text-center leading-relaxed mb-10">
          My professional journey in software development, from internships to full-time positions, building expertise in modern web technologies.
        </p>
        
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default Experience;
