import { AppleCarousel } from "@/components/AppleCarousel";
import { Typewriter } from "@/components/Typewriter";
import { cards } from "@/data/HeaderData";
import React from "react";

const Projects = () => {
  // Convert cards data to AppleCarousel format with actual descriptions
  const projectCards = cards.map(card => ({
    title: card.title,
    src: card.thumbnail,
    description: card.description, // Use the actual JSX description
    link: card.link
  }));

  return (
    <div className="min-h-[70vh] py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Typewriter
          words={[
            { text: "My", className: "text-gray-800" },
            { text: "Featured", className: "text-blue-600" },
            { text: "Projects", className: "text-purple-600" },
          ]}
          className="text-center mb-6"
        />
        
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto text-center leading-relaxed mb-12">
          A showcase of my latest work, demonstrating expertise in full-stack development, modern UI/UX design, and scalable web applications
        </p>
        
        <AppleCarousel cards={projectCards} />
      </div>
    </div>
  );
};

export default Projects;
