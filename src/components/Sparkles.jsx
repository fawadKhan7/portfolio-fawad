"use client";
import { useId, useState, useEffect } from "react";
import { cn } from "../../lib/utils";

// Simple seeded random function
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export const Sparkles = ({
  id,
  className,
  background = "#FFF",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 120,
  particleColor = "#FFF",
  ...props
}) => {
  const sparklesId = useId();
  const gradientId = `gradient-${sparklesId}`;
  const clipPathId = `clip-${sparklesId}`;
  
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Generate particles with consistent seeded random values
    const newParticles = [...Array(particleDensity)].map((_, i) => {
      const seed = i * 123.456; // Use index as seed for consistency
      const size = seededRandom(seed + 1) * (maxSize - minSize) + minSize;
      const cx = seededRandom(seed + 2) * 400;
      const cy = seededRandom(seed + 3) * 400;
      const opacity = seededRandom(seed + 4) * 0.8 + 0.2;
      const animDur1 = seededRandom(seed + 5) * 3 + 1;
      const animDur2 = seededRandom(seed + 6) * 2 + 1;
      
      return {
        id: i,
        size,
        cx,
        cy,
        opacity,
        animDur1,
        animDur2,
      };
    });
    setParticles(newParticles);
  }, [particleDensity, minSize, maxSize]);

  return (
    <div
      className={cn("absolute inset-0 h-full w-full", className)}
      {...props}
    >
      <svg
        className="absolute inset-0 h-full w-full animate-pulse"
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={gradientId}>
            <stop offset="0%" stopColor={particleColor} stopOpacity="1" />
            <stop offset="100%" stopColor={particleColor} stopOpacity="0" />
          </radialGradient>
          <clipPath id={clipPathId}>
            <rect width="100%" height="100%" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipPathId})`}>
          {particles.map((particle) => (
            <circle
              key={particle.id}
              cx={particle.cx}
              cy={particle.cy}
              r={particle.size}
              fill={`url(#${gradientId})`}
              opacity={particle.opacity}
            >
              <animate
                attributeName="opacity"
                values="0.2;1;0.2"
                dur={`${particle.animDur1}s`}
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.2;1"
                dur={`${particle.animDur2}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
}; 