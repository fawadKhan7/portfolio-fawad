"use client";
import { cn } from "../../lib/utils";
import React, { useState, useEffect } from "react";

export const BackgroundBeams = ({ className }) => {
  const [beams, setBeams] = useState([]);
  
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
  ];

  useEffect(() => {
    // Generate consistent beam positions within safe bounds
    const beamData = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      top: Math.min(85, (i * 15 + 10)) + '%', // Cap at 85% to prevent overflow
      left: Math.min(90, (i * 12 + 5)) + '%', // Cap at 90% to prevent overflow
      animationDelay: i * 0.5 + 's',
      animationDuration: (3 + (i * 0.3)) + 's',
    }));
    setBeams(beamData);
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full overflow-hidden",
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full overflow-hidden"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g opacity="0.7">
          {paths.map((path, index) => (
            <path
              key={index}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.6"
              strokeWidth="0.8"
            />
          ))}
        </g>
        <defs>
          {paths.map((_, index) => (
            <linearGradient
              key={index}
              id={`linearGradient-${index}`}
              x1="1%"
              x2="86%"
              y1="0%"
              y2="0%"
            >
              <stop stopColor="#00D4FF" stopOpacity="0" />
              <stop stopColor="#00D4FF" />
              <stop offset="32.5%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
      </svg>

      {/* Animated beams with consistent positioning */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        {beams.map((beam) => (
          <div
            key={beam.id}
            className="absolute h-0.5 w-px animate-pulse bg-gradient-to-l from-transparent via-blue-400 to-transparent"
            style={{
              top: beam.top,
              left: beam.left,
              animationDelay: beam.animationDelay,
              animationDuration: beam.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/30 to-transparent" />
    </div>
  );
}; 