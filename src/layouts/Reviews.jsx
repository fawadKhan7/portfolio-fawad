import { Typewriter } from "@/components/Typewriter";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonialsData } from "@/data/HeaderData";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IconStar, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  return (
    <div className="min-h-[70vh] py-12">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-4">
          Reviews
        </h1>
        
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto text-center leading-relaxed mb-10">
          What my clients say about working with me and the results we've achieved together
        </p>

        {/* Main Testimonial Display */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Side - Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* Stars Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} className="w-5 h-5 fill-zinc-400 text-zinc-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl font-light text-white leading-relaxed">
                  "{testimonialsData[currentIndex].quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 p-0.5">
                    <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center">
                      <Image
                        src={testimonialsData[currentIndex].src}
                        alt={testimonialsData[currentIndex].name}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      {testimonialsData[currentIndex].designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Side - Visual Elements */}
            <div className="relative">
              
              {/* Client Avatars Grid */}
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {testimonialsData.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`relative p-1 rounded-2xl transition-all duration-300 cursor-pointer ${
                      index === currentIndex
                        ? 'bg-zinc-700 scale-110'
                        : 'bg-zinc-800/50 hover:bg-zinc-700/50'
                    }`}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                      // Resume auto-play after 5 seconds
                      setTimeout(() => setIsAutoPlaying(true), 5000);
                    }}
                    whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="bg-zinc-950/70 rounded-2xl p-6 h-32 flex flex-col justify-center items-center text-center border border-zinc-800/50">
                      <Image
                        src={testimonial.src}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="object-contain mb-2"
                      />
                      <p className="text-sm font-medium text-white truncate w-full">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-zinc-400 truncate w-full">
                        {testimonial.designation}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-zinc-950/70 shadow-lg hover:shadow-xl border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300 group"
            >
              <IconChevronLeft className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                    // Resume auto-play after 5 seconds
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-zinc-400 scale-125'
                      : 'bg-zinc-700 hover:bg-zinc-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-zinc-950/70 shadow-lg hover:shadow-xl border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300 group"
            >
              <IconChevronRight className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
            </button>
          </div>


        </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Reviews;
