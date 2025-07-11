import { Spotlight } from "@/components/Spotlight";
import ScrollReveal from "@/components/ScrollReveal";
import React from "react";

const About = () => {
  return (
    <div className="min-h-[70vh] relative overflow-hidden py-12">
      <ScrollReveal>
        <div className="px-6 sm:px-8 lg:px-12 py-4 max-w-6xl mx-auto relative z-10 w-full pt-12 md:pt-0">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-4">
          About Me
        </h1>
        <p className="mt-2 font-medium text-base md:text-lg text-zinc-300 max-w-3xl text-center mx-auto leading-relaxed mb-3">
          Delivering premium web development services with exceptional craftsmanship and attention to detail
        </p>
        <p className="font-normal text-sm md:text-base text-zinc-400 max-w-2xl text-center mx-auto leading-relaxed">
          Specializing in comprehensive full-stack development services, I provide end-to-end solutions from concept to deployment, ensuring your project is built with the highest standards of quality and performance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          <div className="group relative bg-zinc-950/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-zinc-800/50 hover:border-zinc-700">
            <div className="absolute inset-0 bg-zinc-900/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Cutting-Edge Technologies
              </h3>
              <p className="text-zinc-400 mb-3 leading-relaxed text-sm">
                Leveraging the latest industry-leading technologies to build sophisticated, high-performance applications. 
                Expert proficiency in modern frameworks and tools that power today's most successful digital platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
                  React.js & Next.js
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
                  Node.js & Express.js
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
                  MongoDB & PostgreSQL
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
                  Tailwind CSS & Framer Motion
                </li>
              </ul>
            </div>
          </div>
          
          <div className="group relative bg-zinc-950/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-zinc-800/50 hover:border-zinc-700">
            <div className="absolute inset-0 bg-zinc-900/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Premium Design Services
              </h3>
              <p className="text-zinc-400 mb-3 leading-relaxed text-sm">
                Crafting sophisticated user interfaces and experiences that elevate your digital presence. 
                Every design element is meticulously crafted to deliver both aesthetic excellence and optimal functionality.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
                  Custom UI/UX Design
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
                  Responsive Development
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
                  Interactive Animations
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
                  Cross-Platform Compatibility
                </li>
              </ul>
            </div>
          </div>
          
          <div className="group relative bg-zinc-950/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-zinc-800/50 hover:border-zinc-700">
            <div className="absolute inset-0 bg-zinc-900/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Premium Development Services
              </h3>
              <p className="text-zinc-400 mb-3 leading-relaxed text-sm">
                Comprehensive full-stack development services delivered with meticulous attention to detail. 
                From concept to deployment, I provide end-to-end solutions that exceed expectations and deliver exceptional results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
                  Full-Stack Development
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
                  Performance Optimization
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
                  Deployment & Support
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
                  Code Quality Assurance
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default About; 