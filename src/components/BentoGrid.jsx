import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-zinc-800/50 bg-zinc-950/70 backdrop-blur-sm p-4 shadow-lg transition duration-200 hover:shadow-xl hover:border-zinc-700",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-white">
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-zinc-400">
          {description}
        </div>
      </div>
    </div>
  );
}; 