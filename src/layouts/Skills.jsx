import { Typewriter } from "@/components/Typewriter";
import { skills } from "@/data/HeaderData";
import {
  IconCode,
  IconBrandReact,
  IconBrandNodejs,
  IconDatabase,
  IconPalette,
  IconDeviceMobile,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const Skills = () => {
  // Frontend Technologies
  const frontendSkills = skills.filter(skill => 
    ['Html', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Bootstrap', 'Tailwind CSS'].includes(skill.name)
  );
  
  // Backend Technologies
  const backendSkills = skills.filter(skill => 
    ['Node.js', 'Express.js', 'NestJS'].includes(skill.name)
  );
  
  // Database Technologies
  const databaseSkills = skills.filter(skill => 
    ['MongoDb', 'Sql', 'PostgreSQL'].includes(skill.name)
  );
  
  // UI/UX Tools
  const uiSkills = skills.filter(skill => 
    ['Material Ui', 'AntDesign', 'Framer Motion'].includes(skill.name)
  );
  
  // State Management
  const stateManagementSkills = skills.filter(skill => 
    ['Redux', 'Zustand'].includes(skill.name)
  );

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building modern, responsive user interfaces",
      skills: frontendSkills,
      icon: <IconBrandReact className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
    },
    {
      title: "Backend Development", 
      description: "Server-side development and API creation",
      skills: backendSkills,
      icon: <IconBrandNodejs className="h-6 w-6" />,
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
    },
    {
      title: "Database Management",
      description: "Data storage and management solutions", 
      skills: databaseSkills,
      icon: <IconDatabase className="h-6 w-6" />,
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
    },
    {
      title: "UI/UX Libraries",
      description: "Component libraries and design systems",
      skills: uiSkills,
      icon: <IconPalette className="h-6 w-6" />,
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      textColor: "text-pink-700",
    },
    {
      title: "State Management",
      description: "Application state management tools",
      skills: stateManagementSkills,
      icon: <IconCode className="h-6 w-6" />,
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700",
    },
  ];

  return (
    <div className="min-h-[70vh] py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <Typewriter
            words={[
              { text: "My", className: "text-gray-800" },
              { text: "Technical", className: "text-blue-600" },
              { text: "Skills", className: "text-purple-600" },
            ]}
            className="text-center mb-4"
          />
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of the technologies and frameworks I use to build modern, scalable web applications
          </p>
        </div>
        
        {/* Custom Skills Grid Layout */}
        <div className="max-w-5xl mx-auto">
          
          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden space-y-4">
            <SkillCard 
              category={skillCategories.find(cat => cat.title === "Frontend Development")} 
            />
            <SkillCard 
              category={skillCategories.find(cat => cat.title === "Backend Development")} 
            />
            <SkillCard 
              category={skillCategories.find(cat => cat.title === "Database Management")} 
            />
            <SkillCard 
              category={skillCategories.find(cat => cat.title === "UI/UX Libraries")} 
            />
            <SkillCard 
              category={skillCategories.find(cat => cat.title === "State Management")} 
            />
          </div>
          
          {/* Desktop Layout - Custom Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-4">
            
            {/* Left Column - Frontend Development (Full Height) */}
            <div className="row-span-2">
              <SkillCard 
                category={skillCategories.find(cat => cat.title === "Frontend Development")} 
                isFullHeight={true}
              />
            </div>
            
            {/* Middle Column - Backend + UI/UX (Stacked) */}
            <div className="space-y-4">
              <SkillCard 
                category={skillCategories.find(cat => cat.title === "Backend Development")} 
                isCompact={true}
              />
              <SkillCard 
                category={skillCategories.find(cat => cat.title === "UI/UX Libraries")} 
                isCompact={true}
              />
            </div>
            
            {/* Right Column - Database + State Management (Stacked) */}
            <div className="space-y-4">
              <SkillCard 
                category={skillCategories.find(cat => cat.title === "Database Management")} 
                isCompact={true}
              />
              <SkillCard 
                category={skillCategories.find(cat => cat.title === "State Management")} 
                isCompact={true}
              />
            </div>
            
          </div>
        </div>

        {/* All Skills Overview */}
        <div className="mt-10 text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-6">
            All Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:border-blue-300"
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={20}
                  height={20}
                  className="rounded"
                />
                <span className="text-xs font-medium text-gray-700">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ category, isFullHeight = false, isCompact = false }) => {
  if (!category) return null;
  
  return (
    <div className={`${category.bgColor} rounded-2xl ${isCompact ? 'p-4' : 'p-6'} border ${category.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isFullHeight ? 'h-full min-h-[600px]' : 'h-fit'}`}>
      {/* Header */}
      <div className={`flex items-center gap-3 ${isCompact ? 'mb-4' : 'mb-6'}`}>
        <div className={`${isCompact ? 'p-2' : 'p-3'} rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-lg`}>
          {React.cloneElement(category.icon, { 
            className: isCompact ? 'h-6 w-6' : 'h-8 w-8' 
          })}
        </div>
        <div>
          <h3 className={`${isCompact ? 'text-lg' : 'text-xl'} font-bold text-gray-800`}>
            {category.title}
          </h3>
          <p className={`${isCompact ? 'text-xs' : 'text-sm'} text-gray-600`}>
            {category.description}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className={`${isFullHeight ? 'space-y-4' : 'space-y-3'} ${isFullHeight ? 'flex-1' : ''}`}>
        {category.skills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 bg-white/70 rounded-lg ${isCompact ? 'p-2.5' : 'p-3'} hover:bg-white transition-colors border border-white/50 hover:shadow-sm`}
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={isCompact ? 24 : 28}
              height={isCompact ? 24 : 28}
              className="rounded"
            />
            <span className={`font-medium text-gray-800 ${isCompact ? 'text-sm' : 'text-base'}`}>
              {skill.name}
            </span>
          </div>
        ))}
        
        {/* Add some spacing for full height cards */}
        {isFullHeight && (
          <div className="flex-1 flex items-center justify-center mt-8">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <IconCode className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-sm">
                Building modern, scalable<br />
                web applications with<br />
                cutting-edge technologies
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
