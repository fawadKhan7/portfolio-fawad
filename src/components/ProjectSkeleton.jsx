import React from "react";

export const Skeleton = ({ title, description }) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        {title || "House in the woods"}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description || "A serene and tranquil retreat."}
      </p>
    </div>
  );
};
