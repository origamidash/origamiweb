"use client";

import Link from "next/link";
import Image from "next/image";
import { Instrument_Serif, DM_Mono } from "next/font/google";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const dmMono = DM_Mono({ weight: "400", subsets: ["latin"] });

import { AuroraBackground } from "@/components/ui/aurora-background";
import { InteractiveHoverButton } from "@/components/ui/interactive-button";
import { BookOpen, PlusIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { Order } from "./templateCreator";

export default function NewAppPage() {
  return (
    <div className="grain flex h-full w-full flex-col items-center p-2.5 pl-0 text-white">
      <div className="relative h-16 w-full overflow-hidden rounded-lg border border-neutral-800 shadow-xl">
        <AuroraBackground
          showRadialGradient={true}
          className="h-16 hue-rotate-180"
        >
          <div className="z-20 flex flex-col items-center justify-center gap-3">
            <div className="flex flex-row items-center justify-center gap-2">
              <Image
                src={"/icon.svg"}
                alt="Origami logo"
                width={115}
                height={115}
                className="aspect-sqaure h-10 w-10 opacity-90"
              ></Image>
            </div>
          </div>
        </AuroraBackground>
      </div>

      <div className="mt-2.5 flex w-full max-w-[100rem] flex-row items-center justify-center gap-2">
        <div className="flex h-full w-full flex-col justify-start rounded-lg border border-neutral-800 p-5 px-6 shadow shadow-xl">
          <h1 className="text-xl font-semibold tracking-tight">Manual</h1>
          <h2 className="text-sm opacity-80">
            Create a dashboard from a community-made template and with the API.
          </h2>

          <Order></Order>
        </div>
        <Separator orientation="vertical" className="h-2/3" />
        <div className="flex h-full max-w-[45rem] flex-col justify-start rounded-lg border border-neutral-800 p-5 px-6 shadow shadow-xl">
          <h1 className="text-xl font-semibold tracking-tight">
            Create from Database (Pro)
          </h1>
          <h2 className="text-sm line-through decoration-dotted opacity-80">
            Let Origami create a dashboard from your database automatically
            using AI.
          </h2>
        </div>
      </div>
    </div>
  );
}
