"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-black",
          className,
          showRadialGradient && "dark:bg-black",
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1200 1200"
            opacity="0.7"
            className={cn(
              `absolute inset-0 z-10 h-max w-max`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          >
            <defs>
              <filter
                id="nnnoise-filter"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                colorInterpolationFilters="linearRGB"
              >
                <feTurbulence
                  type="turbulence"
                  baseFrequency="0.2"
                  numOctaves="4"
                  seed="15"
                  stitchTiles="stitch"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  result="turbulence"
                ></feTurbulence>
                <feSpecularLighting
                  surfaceScale="7"
                  specularConstant="0.8"
                  specularExponent="20"
                  lightingColor="#4f12a3"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="turbulence"
                  result="specularLighting"
                >
                  <feDistantLight azimuth="3" elevation="82"></feDistantLight>
                </feSpecularLighting>
                <feColorMatrix
                  type="saturate"
                  values="0"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="specularLighting"
                  result="colormatrix"
                ></feColorMatrix>
              </filter>
            </defs>
            <rect width="1200" height="1200" fill="transparent"></rect>
            <rect
              width="1200"
              height="1200"
              fill="#4f12a3"
              filter="url(#nnnoise-filter)"
            ></rect>
          </svg>
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] [background-image:var(--white-gradient),var(--aurora)] [background-position:50%_50%,50%_50%] [background-size:300%,_200%] after:absolute after:inset-0 after:animate-aurora after:mix-blend-difference after:content-[""] after:[background-attachment:fixed] after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] dark:invert-0 dark:[background-image:var(--dark-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
