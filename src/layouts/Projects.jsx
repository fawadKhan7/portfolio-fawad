import { GlowingEffect } from "@/components/GlowingEffect";
import ScrollReveal from "@/components/ScrollReveal";
import { cards } from "@/data/HeaderData";
import { 
  IconExternalLink, 
  IconEye, 
  IconFilter,
  IconWorld,
  IconX,
  IconChevronRight
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(cards);

  // Define project categories
  const categories = [
    { name: "All", count: cards.length },
    { name: "E-commerce", count: cards.filter(p => p.title.toLowerCase().includes('shop') || p.title.toLowerCase().includes('labzkit')).length },
    { name: "Education", count: cards.filter(p => p.title.toLowerCase().includes('course') || p.title.toLowerCase().includes('tution') || p.title.toLowerCase().includes('coach')).length },
    { name: "Real-time", count: cards.filter(p => p.title.toLowerCase().includes('stream') || p.title.toLowerCase().includes('chat') || p.title.toLowerCase().includes('croom')).length },
    { name: "Management", count: cards.filter(p => p.title.toLowerCase().includes('task') || p.title.toLowerCase().includes('tenant') || p.title.toLowerCase().includes('property') || p.title.toLowerCase().includes('spaderent') || p.title.toLowerCase().includes('onboarding')).length },
    { name: "Services", count: cards.filter(p => p.title.toLowerCase().includes('soft') || p.title.toLowerCase().includes('service')).length }
  ];

  // Filter projects based on category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(cards);
    } else {
      const filtered = cards.filter(project => {
        const title = project.title.toLowerCase();
        switch (selectedCategory) {
          case "E-commerce":
            return title.includes('shop') || title.includes('labzkit');
          case "Education":
            return title.includes('course') || title.includes('tution') || title.includes('coach');
          case "Real-time":
            return title.includes('stream') || title.includes('chat') || title.includes('croom');
          case "Management":
            return title.includes('task') || title.includes('tenant') || title.includes('property') || title.includes('spaderent') || title.includes('onboarding');
          case "Services":
            return title.includes('soft') || title.includes('service');
          default:
            return true;
        }
      });
      setFilteredProjects(filtered);
    }
  }, [selectedCategory]);

  const handleProjectClick = (project) => {
    if (project.link && project.link !== "#") {
      window.open(project.link, "_blank", "noopener,noreferrer");
    } else {
      setSelectedProject(project);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen py-20">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
        </h1>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Explore my collection of full-stack applications, showcasing expertise in modern web technologies, 
            scalable architectures, and innovative user experiences.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                  selectedCategory === category.name
                    ? 'bg-white text-black border-white shadow-lg'
                    : 'bg-zinc-900/50 text-zinc-300 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <IconFilter className="w-4 h-4" />
                  {category.name}
                  <span className="text-xs bg-zinc-700 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-2xl bg-zinc-950/70 backdrop-blur-sm border border-zinc-800/50 cursor-pointer transition-all duration-500 hover:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-500/10 ${
                    project.className?.includes('col-span-2') ? 'md:col-span-2' : ''
                  }`}
                  onClick={() => handleProjectClick(project)}
            >
              <GlowingEffect 
                    proximity={100}
                    spread={30}
                    movementDuration={2}
                borderWidth={2}
                className="z-10"
              />
              
              {/* Project Image */}
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-zinc-300/80">
                <Image
                      src={project.thumbnail}
                      alt={project.title}
                  fill
                      className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 4}
                />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
                
                {/* External Link Icon */}
                    {project.link && project.link !== "#" && (
                  <div className="absolute top-4 right-4 p-2 bg-zinc-900/80 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <IconExternalLink className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                        {project.title}
                  </h3>
                      <IconChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                    
                    {/* Project Description (truncated) */}
                    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {typeof project.description === 'string' 
                        ? project.description 
                        : project.description.props.children[0].props.children
                      }
                    </p>
                    
                    {/* Action Button */}
                    <div className="flex items-center gap-3 pt-2">
                      {project.link && project.link !== "#" ? (
                        <div className="flex items-center gap-2 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                          <IconWorld className="w-4 h-4" />
                          <span>View Live</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                          <IconEye className="w-4 h-4" />
                          <span>View Details</span>
                        </div>
                      )}
              </div>
            </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-zinc-700"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-zinc-900 p-6 border-b border-zinc-700 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
                  >
                    <IconX className="w-5 h-5 text-zinc-400" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="relative h-64 mb-6 rounded-xl overflow-hidden bg-zinc-300/80">
                    <Image
                      src={selectedProject.thumbnail}
                      alt={selectedProject.title}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 100vw, 896px"
                    />
                  </div>
                  
                  <div className="prose prose-zinc prose-invert max-w-none">
                    {typeof selectedProject.description === 'string' 
                      ? <p>{selectedProject.description}</p>
                      : selectedProject.description
                    }
                  </div>
                  
                  <div className="mt-6 flex gap-4">
                    {selectedProject.link && selectedProject.link !== "#" && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors"
                      >
                        <IconWorld className="w-4 h-4" />
                        Visit Project
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Projects;
