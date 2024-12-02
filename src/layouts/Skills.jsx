import { Tooltip } from "@/components/Tooltips";
import { Typewriter } from "@/components/Typewriter";
import { skills } from "@/data/HeaderData";
import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col gap-10">
      <Typewriter
        words={[
          { text: "My", className: "text-black" },
          { text: "Professional", className: "text-black" },
          { text: "Toolkit", className: "text-blue-600" },
        ]}
      />
      <div className="flex flex-wrap justify-center items-center md:w-[600px] p-4 mx-auto gap-4 bg-gray-400 bg-opacity-10 rounded-xl">
        <Tooltip items={skills.sort(() => Math.random() - 0.5)} />
      </div>
    </div>
  );
};

export default Skills;
