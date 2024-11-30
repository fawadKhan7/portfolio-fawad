import { Tooltip } from "@/components/Tooltips";
import { Typewriter } from "@/components/Typewriter";
import { frontend, people } from "@/data/HeaderData";
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
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 w-full">
          <div className="text-center text-3xl font-semibold">Frontend</div>
          <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full">
            <Tooltip items={frontend} />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="text-center text-3xl font-semibold">Backend</div>
          <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full">
            <Tooltip items={people} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
