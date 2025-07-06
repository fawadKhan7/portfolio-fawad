"use client";
import { useMouseEnter } from "@/hooks/useMouseEnter";
import { cn } from "../../lib/utils";

export const CardSpotlight = ({ children, radius = 350, color = "#262626", className, ...props }) => {
  const [mousePosition, onMouseEnter] = useMouseEnter();

  return (
    <div
      onMouseMove={onMouseEnter}
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black shadow-[inset_0_0_0_1px_rgb(148_163_184_/_0.1)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255_/_0.05)]",
        className
      )}
      {...props}
    >
      <Motion mousePosition={mousePosition} radius={radius} color={color} />
      {children}
    </div>
  );
};

const Motion = ({ mousePosition, color, radius }) => {
  const background = `radial-gradient(${radius}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${color}, transparent 40%)`;
  return (
    <div
      className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
      style={{
        background,
      }}
    />
  );
}; 