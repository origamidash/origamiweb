import Link from "next/link";
import { Instrument_Serif, DM_Mono } from "next/font/google";

import { SidebarTrigger } from "@/components/ui/sidebar";

const instrumentSerif = Instrument_Serif({ weight: "400" });
const dmMono = DM_Mono({ weight: "400" });

import { AuroraBackground } from "@/components/ui/aurora-background";

export default function DashboardPage() {
  return (
    <div className="grain m-2.5 ml-0 flex flex-row justify-center text-white">
      <SidebarTrigger className="absolute bottom-2 left-0 z-10"></SidebarTrigger>
      <div className="h-[20rem] w-full overflow-hidden rounded-lg border border-neutral-800 shadow-xl">
        <AuroraBackground
          showRadialGradient={true}
          className="h-[20rem] hue-rotate-180"
        >
          <div className="z-20 flex flex-col items-center justify-center gap-3">
            <div
              className={`${instrumentSerif.className} text-5xl text-neutral-200`}
            >
              Origami
            </div>
            <p className={`text-center text-lg text-neutral-100`}>
              Here are some resources to help you get started.
            </p>

            <div className="mt-2 flex flex-row items-center gap-3">
              <Link
                href={"/dashboard/newapp"}
                className="rounded-full border border-neutral-700 bg-white/10 p-2 px-5 font-bold text-white hue-rotate-180 backdrop-blur-lg"
              >
                Create a new dashboard
              </Link>
              <Link
                href={"/docs"}
                className="rounded-full border border-neutral-700 bg-white/5 p-2 px-5 font-bold text-white hue-rotate-180 backdrop-blur-lg"
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
