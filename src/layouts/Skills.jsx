import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import ScrollReveal from "@/components/ScrollReveal";
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

  const SkillIcon = ({ skill }) => (
    <Image
      src={skill.image}
      alt={skill.name}
      width={32}
      height={32}
      className="rounded"
    />
  );

  const SkillsGrid = ({ skills: skillList }) => (
    <div className="py-6 px-4 flex flex-wrap gap-2">
      {skillList.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-2 bg-zinc-700 rounded-lg p-2 border border-zinc-800/30"
        >
          <SkillIcon skill={skill} />
          <span className="text-xs font-medium text-zinc-300">{skill.name}</span>
        </div>
      ))}
    </div>
  );

  const bentoItems = [
    {
      title: "Frontend Development",
      description: "Building modern, responsive user interfaces with cutting-edge technologies and frameworks.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700/50 overflow-hidden">
          <div className="flex items-center justify-center w-full">
            <SkillsGrid skills={frontendSkills} />
          </div>
        </div>
      ),
      className: "md:col-span-2",
      icon: <IconBrandReact className="h-6 w-6 text-zinc-300" />,
    },
    {
      title: "Backend Development",
      description: "Server-side development and API creation using modern Node.js frameworks.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700/50 overflow-hidden">
          <div className="flex items-center justify-center w-full">
            <SkillsGrid skills={backendSkills} />
          </div>
        </div>
      ),
      className: "md:col-span-1",
      icon: <IconBrandNodejs className="h-6 w-6 text-zinc-300" />,
    },
    {
      title: "Database Management",
      description: "Data storage and management solutions with both SQL and NoSQL databases.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700/50 overflow-hidden">
          <div className="flex items-center justify-center w-full">
            <SkillsGrid skills={databaseSkills} />
          </div>
        </div>
      ),
      className: "md:col-span-1",
      icon: <IconDatabase className="h-6 w-6 text-zinc-300" />,
    },
    {
      title: "UI/UX Libraries",
      description: "Component libraries and design systems for beautiful user interfaces.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700/50 overflow-hidden">
          <div className="flex items-center justify-center w-full">
            <SkillsGrid skills={uiSkills} />
          </div>
        </div>
      ),
      className: "md:col-span-1",
      icon: <IconPalette className="h-6 w-6 text-zinc-300" />,
    },
    {
      title: "State Management",
      description: "Application state management tools for scalable React applications.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700/50 overflow-hidden">
          <div className="flex items-center justify-center w-full">
            <SkillsGrid skills={stateManagementSkills} />
          </div>
        </div>
      ),
      className: "md:col-span-1",
      icon: <IconCode className="h-6 w-6 text-zinc-300" />,
    },
  ];

  return (
    <div className="min-h-[70vh] py-12">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-4">
            My Skills
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of the technologies and frameworks I use to build modern, scalable web applications
          </p>
        </div>
        
        {/* Bento Grid */}
        <BentoGrid className="max-w-6xl mx-auto">
          {bentoItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>

        {/* All Skills Overview */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-bold text-white mb-6">
            All Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-zinc-950/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md hover:shadow-lg hover:bg-zinc-900/50 transition-all duration-200 border border-zinc-800/50 hover:border-zinc-700"
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={24}
                  height={24}
                  className="rounded"
                />
                <span className="text-sm font-medium text-zinc-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Skills;
