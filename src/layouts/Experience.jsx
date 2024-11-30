import { Timeline } from "@/components/Timeline";
import { timelineData } from "@/data/HeaderData";
import React from "react";

const Experience = () => {
  return (
    <div>
      <Timeline data={timelineData} />
    </div>
  );
};

export default Experience;
