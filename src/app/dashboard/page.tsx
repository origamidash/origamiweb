import Link from "next/link";
import Image from "next/image";
import { Instrument_Serif, DM_Mono } from "next/font/google";

import { SidebarTrigger } from "@/components/ui/sidebar";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const dmMono = DM_Mono({ weight: "400", subsets: ["latin"] });

import { AuroraBackground } from "@/components/ui/aurora-background";
import { InteractiveHoverButton } from "@/components/ui/interactive-button";
import { BookOpen, PlusIcon } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="grain m-2.5 ml-0 flex flex-col justify-center text-white">
      <SidebarTrigger className="absolute bottom-2 left-0 z-10"></SidebarTrigger>
      <div className="relative h-[15rem] w-full overflow-hidden rounded-lg border border-neutral-800 shadow-xl">
        <AuroraBackground
          showRadialGradient={true}
          className="h-[15rem] hue-rotate-180"
        >
          <div className="z-20 flex flex-col items-center justify-center gap-3">
            <div className="flex flex-row items-center justify-center gap-2">
              <Image
                src={"/icon.svg"}
                alt="Origami logo"
                width={115}
                height={115}
                className="aspect-sqaure h-12 w-14 opacity-90"
              ></Image>
              <div
                className={`${instrumentSerif.className} text-5xl tracking-tight text-neutral-200`}
              >
                Origami
              </div>
            </div>

            <div className="mt-2 flex flex-row items-center gap-3">
              <Link href={"/dashboard/newapp"}>
                <InteractiveHoverButton
                  text="Create a dashboard"
                  className="w-60"
                  icon={<PlusIcon className="h-5 w-5" />}
                />
              </Link>
              <Link
                href={"/docs"}
                className="z-50 rounded-lg border border-neutral-700 bg-white/5 p-2 px-5 font-bold tracking-tight text-white hue-rotate-180 backdrop-blur-lg transition-all duration-300 hover:bg-white/15"
              >
                View docs
              </Link>
            </div>
          </div>
        </AuroraBackground>
      </div>
    </div>
  );
}
