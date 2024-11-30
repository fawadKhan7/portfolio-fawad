import { AnimatedTestimonials } from "@/components/Testimonials";
import { Typewriter } from "@/components/Typewriter";
import { testimonialsData } from "@/data/HeaderData";
import React from "react";

const Reviews = () => {
  return (
    <div className="flex flex-col gap-4">
      <Typewriter
        words={[
          { text: "Reviews", className: "text-black" },
          { text: "&", className: "text-black" },
          { text: "Recommendations", className: "text-blue-600" },
        ]}
      />
      <AnimatedTestimonials testimonials={testimonialsData} />;
    </div>
  );
};

export default Reviews;
