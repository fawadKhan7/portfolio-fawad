import { useState } from "react";

export const useMouseEnter = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseEnter = (event) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - left,
      y: event.clientY - top,
    });
  };

  return [mousePosition, onMouseEnter];
}; 