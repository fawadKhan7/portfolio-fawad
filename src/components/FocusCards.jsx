"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "../../lib/utils";

export const FocusCards = ({ cards }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto w-full">
      {cards.map((card, index) => (
        <div
          key={card.title}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setHovered(hovered === index ? null : index)} // Toggle on mobile
          className={cn(
            "rounded-2xl relative bg-white overflow-hidden h-80 md:h-96 w-full transition-all duration-300 ease-out border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl cursor-pointer",
            hovered !== null && hovered !== index && "md:blur-sm md:scale-[0.98]"
          )}
        >
          {/* Image Container with proper aspect ratio */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
            <Image
              src={card.src}
              alt={card.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          {/* Title overlay (always visible on mobile, hover on desktop) */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-blue-600/90 via-transparent to-transparent flex items-end py-6 px-6 transition-opacity duration-300",
              "md:opacity-0 md:hover:opacity-100", // Hidden on desktop until hover
              hovered === index ? "opacity-100" : "opacity-100 md:opacity-0" // Always visible on mobile
            )}
          >
            <div className="text-xl md:text-2xl font-bold text-white">
              {card.title}
            </div>
          </div>
          
          {/* Detailed hover overlay (desktop only) */}
          <div
            className={cn(
              "absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col p-6 transition-all duration-300",
              "hidden md:flex", // Only show on desktop
              hovered === index ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
            <div className="flex-1 overflow-y-auto pr-1 mb-4 custom-scrollbar">
              <p className="text-gray-600 text-sm leading-relaxed pr-3">
                {card.description}
              </p>
            </div>
            {/* Only show View Project button for specific projects */}
            {(card.title === "Prime Tution" || card.title === "Softlogic" || card.title === "Labzkit") && (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                View Project →
              </a>
            )}
          </div>

          {/* Mobile overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col p-4 transition-all duration-300",
              "md:hidden", // Only show on mobile
              hovered === index ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHovered(null);
                }}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pr-1 mb-4 custom-scrollbar">
              <p className="text-gray-600 text-sm leading-relaxed pr-3">
                {card.description}
              </p>
            </div>
            {/* Only show View Project button for specific projects */}
            {(card.title === "Prime Tution" || card.title === "Softlogic" || card.title === "Labzkit") && (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-200 text-sm"
              >
                View Project →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}; 