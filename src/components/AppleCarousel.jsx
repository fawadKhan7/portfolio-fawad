"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AppleCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying && cards?.length > 4) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, cards?.length]);

  // Handle manual scroll
  const handleScroll = (direction) => {
    setIsAutoPlaying(false);
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  // Open modal with project details
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setIsAutoPlaying(false);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setIsAutoPlaying(true);
  };

  // Get visible cards (4 at a time)
  const getVisibleCards = () => {
    if (!cards || cards.length === 0) return [];
    
    const visibleCards = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % cards.length;
      visibleCards.push({ ...cards[index], displayIndex: i });
    }
    return visibleCards;
  };

  if (!cards || cards.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No projects found
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex gap-6 transition-transform duration-700 ease-out pb-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / 4)}%)`,
          }}
        >
          {/* Render all cards for smooth infinite scroll */}
          {[...cards, ...cards].map((card, index) => {
            const actualIndex = index % cards.length;
            const isVisible = index >= currentIndex && index < currentIndex + 4;
            
            return (
              <motion.div
                key={`${card.title}-${index}`}
                className="flex-shrink-0 w-1/4 px-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0.7,
                  y: 0,
                  scale: isVisible ? 1 : 0.95
                }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              >
                <div className="group relative bg-transparent rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-64">
                  {/* Full Image Card */}
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={card.src}
                      alt={card.title}
                      fill
                      className="object-contain transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    
                    {/* Hover Overlay with Title and Buttons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-lg font-semibold text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {card.title}
                      </h3>

                      {/* Action Buttons */}
                      <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(card);
                          }}
                          className="flex-1 px-4 py-2 bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 rounded-lg transition-all duration-200 text-sm font-medium hover:scale-105 backdrop-blur-sm"
                        >
                          About
                        </button>
                        
                        {card.link && card.link !== "#" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(card.link, '_blank');
                            }}
                            className="flex-1 px-4 py-2 bg-white/90 hover:bg-white text-gray-900 border border-white/50 hover:border-white rounded-lg transition-all duration-200 text-sm font-medium hover:scale-105 backdrop-blur-sm"
                          >
                            View
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => handleScroll('prev')}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
        >
          <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Custom Scrollbar/Progress Indicator */}
        <div className="flex-1 max-w-xs mx-4">
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-700"
              style={{
                width: `${((currentIndex + 1) / cards.length) * 100}%`,
              }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>{currentIndex + 1}</span>
            <span>{cards.length}</span>
          </div>
        </div>

        <button
          onClick={() => handleScroll('next')}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
        >
          <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[99999] flex items-center justify-center p-4"
            onClick={closeModal}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-8 pb-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {selectedProject.title}
                    </h2>
                    {selectedProject.link && selectedProject.link !== "#" && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-400">Live Project</span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 backdrop-blur-sm hover:scale-110 group"
                  >
                    <svg className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="p-8 pt-6 pr-6">
                <div className="modal-description-content max-h-96 overflow-y-auto pr-2">
                  <div className="prose prose-lg prose-invert max-w-none pb-6">
                    {selectedProject.description}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="p-8 pt-6 border-t border-white/10">
                <div className="flex gap-4">
                  {selectedProject.link && selectedProject.link !== "#" && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl transition-all duration-300 text-center font-semibold hover:scale-105 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      Visit Project
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  <button
                    onClick={closeModal}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 rounded-2xl transition-all duration-300 font-semibold backdrop-blur-sm hover:scale-105 transform hover:-translate-y-0.5"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 