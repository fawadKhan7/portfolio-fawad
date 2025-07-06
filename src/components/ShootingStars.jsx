"use client";
import { cn } from "../../lib/utils";
import React, { useState, useEffect } from "react";

// Seeded random function for consistent values
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export const ShootingStars = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = (index) => {
      const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const leftPosition = seededRandom(index * 1234) * (viewportWidth - 100); // Subtract 100px to prevent overflow
      
      return {
        id: index,
        left: Math.max(0, Math.min(leftPosition, viewportWidth - 50)), // Clamp between 0 and viewport width
        animationDuration: seededRandom(index * 5678) * (maxSpeed - minSpeed) + minSpeed,
        animationDelay: seededRandom(index * 9012) * (maxDelay - minDelay) + minDelay,
      };
    };

    const initializeStars = () => {
      const newStars = Array.from({ length: 20 }, (_, index) => createStar(index));
      setStars(newStars);
    };

    initializeStars();

    let counter = 20;
    const interval = setInterval(() => {
      setStars((currentStars) => [
        ...currentStars.slice(-15),
        createStar(counter++),
      ]);
    }, maxDelay);

    return () => clearInterval(interval);
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  return (
    <div className={cn("absolute inset-0 h-full w-full overflow-hidden", className)}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute top-0 h-0.5 w-0.5 rounded-full bg-white opacity-0 animate-shooting-star"
          style={{
            left: `${star.left}px`,
            background: `linear-gradient(45deg, ${starColor}, ${trailColor})`,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}ms`,
          }}
        />
      ))}
    </div>
  );
};

export const StarsBackground = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = (numStars) => {
      const generatedStars = [];
      const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
      
      for (let i = 0; i < numStars; i++) {
        const shouldTwinkle =
          allStarsTwinkle || seededRandom(i * 111) < twinkleProbability;
        
        const xPos = seededRandom(i * 222) * (viewportWidth - 20); // Subtract 20px buffer
        const yPos = seededRandom(i * 333) * (viewportHeight - 20); // Subtract 20px buffer
        
        generatedStars.push({
          id: i,
          x: Math.max(0, Math.min(xPos, viewportWidth - 10)), // Clamp position
          y: Math.max(0, Math.min(yPos, viewportHeight - 10)), // Clamp position
          size: seededRandom(i * 444) * 2 + 1,
          opacity: seededRandom(i * 555) * 0.8 + 0.2,
          twinkle: shouldTwinkle,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed + seededRandom(i * 666) * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        });
      }
      return generatedStars;
    };

    const numStars = Math.floor(
      (typeof window !== 'undefined' ? window.innerWidth * window.innerHeight : 1200 * 800) * starDensity
    );
    setStars(generateStars(numStars));

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const numStars = Math.floor(window.innerWidth * window.innerHeight * starDensity);
        setStars(generateStars(numStars));
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]);

  return (
    <div className={cn("absolute inset-0 h-full w-full overflow-hidden", className)}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: star.twinkle
              ? `twinkle ${star.twinkleSpeed}s ease-in-out infinite alternate`
              : undefined,
          }}
        />
      ))}
    </div>
  );
}; 