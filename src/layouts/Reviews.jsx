import { Typewriter } from "@/components/Typewriter";
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
    <div className="min-h-[70vh] py-12 relative overflow-hidden">
      {/* Cohesive Background matching website's blue-purple theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Subtle sparkle effect similar to header */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <div className="w-1 h-1 bg-blue-300 rounded-full opacity-60" />
          </div>
        ))}
      </div>
      
      {/* Soft gradient overlays matching your site's aesthetic */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100/20 via-transparent to-purple-100/20" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent" />
      
      {/* Subtle geometric shapes in your brand colors */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200/15 to-purple-200/15 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-32 left-16 w-40 h-40 bg-gradient-to-br from-purple-200/15 to-indigo-200/15 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-100/10 to-purple-100/10 rounded-full blur-3xl animate-pulse delay-500" />
      
              <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Typewriter
          words={[
            { text: "Client", className: "text-gray-800" },
            { text: "Reviews", className: "text-blue-600" },
            { text: "&", className: "text-gray-800" },
            { text: "Testimonials", className: "text-purple-600" },
          ]}
          className="text-center mb-6"
        />
        
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto text-center leading-relaxed mb-10">
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
                    <IconStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl font-light text-gray-800 leading-relaxed">
                  "{testimonialsData[currentIndex].quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <Image
                        src={testimonialsData[currentIndex].src}
                        alt={testimonialsData[currentIndex].name}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain p-1.5"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonialsData[currentIndex].designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Side - Visual Elements */}
            <div className="relative">
              {/* Large Quote Mark */}
              <div className="absolute -top-8 -left-8 text-9xl text-blue-100 font-serif leading-none select-none">
                "
              </div>
              
              {/* Client Avatars Grid */}
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {testimonialsData.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`relative p-1 rounded-2xl transition-all duration-300 cursor-pointer ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-110'
                        : 'bg-gray-200 hover:bg-gray-300'
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
                    <div className="bg-white rounded-2xl p-6 h-32 flex flex-col justify-center items-center text-center">
                      <Image
                        src={testimonial.src}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="object-contain mb-2"
                      />
                      <p className="text-sm font-medium text-gray-800 truncate w-full">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-600 truncate w-full">
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
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
            >
              <IconChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
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
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
            >
              <IconChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Reviews;
