import React from "react";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverButtonProps {
  text?: string;
  className?: string;
  icon?: React.ReactNode;
  type?: string;
}

export function InteractiveHoverButton({
  text = "Button",
  className,
  icon = <ArrowRight className="h-4 w-4" />,
}: InteractiveHoverButtonProps = {}) {
  return (
    <button
      className={`group relative cursor-pointer overflow-hidden rounded-lg border-[2px] border-neutral-600 bg-neutral-200 p-2 text-center font-semibold text-black antialiased backdrop-blur-xl transition-all duration-500 hover:bg-white/10 ${className}`}
    >
      <span className="inline-block w-full translate-x-1 tracking-tight transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 tracking-tight text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        {icon}
      </div>
      <div
        className={`absolute left-[12.5%] top-[40%] h-2 w-2 scale-[100%] rounded-lg bg-black transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.75] dark:group-hover:bg-transparent`}
      ></div>
    </button>
  );
}
