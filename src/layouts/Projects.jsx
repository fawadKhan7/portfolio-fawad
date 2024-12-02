import { LayoutGrid } from "@/components/LayoutGrid";
import { Skeleton } from "@/components/ProjectSkeleton";
import { Typewriter } from "@/components/Typewriter";
import { cards } from "@/data/HeaderData";
import React from "react";
const Projects = () => {
  return (
    <>
      <Typewriter
        words={[
          { text: "My", className: "text-black" },
          { text: "Projects", className: "text-blue-600" },
        ]}
      />

      <div className=" py-20 w-full">
        <LayoutGrid cards={projectCards} />
      </div>
    </>
  );
};

const projectCards = cards.map((elem) => ({
  ...elem,
  content: <Skeleton title={elem.title} description={elem.description} key={elem.id}/>,
}));
export default Projects;
