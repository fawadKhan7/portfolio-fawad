import React from "react";
import { Vortex } from "@/components/Vortex";
import { Sparkles } from "@/components/Sparkles";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { Typewriter } from "@/components/Typewriter";
import { ShootingStars } from "@/components/ShootingStars";
import { BackgroundBeams } from "@/components/BackgroundBeams";

const Header = ({ onViewWork }) => {
  const handleDownloadResume = () => {
    try {
      const link = document.createElement('a');
      link.href = '/Fawad%20Resume.pdf'; // URL encoded for spaces
      link.download = 'Fawad_Resume.pdf'; // Safe filename for download
      link.target = '_blank'; // Open in new tab as fallback
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open('/Fawad%20Resume.pdf', '_blank');
    }
  };

  const handleViewWork = () => {
    if (onViewWork) {
      onViewWork();
    } else {
      // Fallback: scroll to projects section
      const projectsSection = document.querySelector('[data-section="projects"]');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-blue-100 via-white to-purple-100 overflow-hidden">
      {/* Background Effects */}
      <BackgroundBeams />
      <ShootingStars />
      
      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[80vh] px-6 sm:px-8 lg:px-12 text-center py-12">
        {/* Greeting */}
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500/90 to-purple-600/90 text-white text-xs font-normal rounded-full shadow-md backdrop-blur-sm">
            👋 Welcome to my portfolio
          </span>
        </div>

        {/* Name with animated gradient */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-3 relative tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-shift">
            Fawad Khan
          </span>
        </h1>

        {/* Animated Title */}
        <div className="mb-6">
          <Typewriter
            words={[
              { text: "Full", className: "text-gray-700" },
              { text: "Stack", className: "text-blue-600" },
              { text: "Developer", className: "text-purple-600" },
            ]}
            className="text-lg md:text-xl font-normal tracking-wide"
          />
        </div>

        {/* Description with Text Generate Effect */}
        <div className="max-w-xl mb-8">
          <TextGenerateEffect
            words="Passionate Full-stack developer crafting exceptional digital experiences. I transform ideas into powerful web applications with AI integration, real-time features, and modern architectures."
            className="text-sm md:text-base text-gray-600 leading-relaxed font-light"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <button 
            onClick={handleViewWork}
            className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 text-sm">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={handleDownloadResume}
            className="px-6 py-2.5 bg-white/80 backdrop-blur-sm text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-blue-400 hover:bg-white hover:text-blue-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
          >
            Download Resume
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/fawadKhan7"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-gray-200 hover:border-gray-300"
          >
            <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          <a
            href="https://linkedin.com/in/fawadkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-gray-200 hover:border-blue-300"
          >
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a
            href="mailto:fawadanwar.dev@gmail.com"
            className="p-2.5 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-gray-200 hover:border-green-300"
          >
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
