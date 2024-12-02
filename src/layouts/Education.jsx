import { StickyScroll } from "@/components/StickyScroll";
import { Typewriter } from "@/components/Typewriter";
import { educationContent } from "@/data/HeaderData";
import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col gap-4 my-2">
      <Typewriter
        words={[
          { text: "My", className: "text-black" },
          { text: "Education", className: "text-blue-600" },
        ]}
      />

      <StickyScroll content={educationContent} contentClassName="custom-class" />
    </div>
  );
};

export default Education;
