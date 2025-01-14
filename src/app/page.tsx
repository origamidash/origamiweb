import Link from "next/link";
import {
  Instrument_Serif,
  Instrument_Sans,
  DM_Sans,
  DM_Mono,
} from "next/font/google";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { InteractiveHoverButton } from "@/components/ui/interactive-button";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const instrumentSans = Instrument_Sans({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] });
const dmMono = DM_Mono({ weight: "400", subsets: ["latin"] });

export default function HomePage() {
  return (
    <main className="grain flex min-h-screen flex-row justify-center text-white">
      <div className="w-full max-w-[100rem]">
        <div className="relative m-4 overflow-hidden rounded-lg border border-neutral-800 shadow-xl">
          <AuroraBackground
            showRadialGradient={true}
            className="h-[24rem] hue-rotate-180"
          >
            <div className="z-20 flex flex-col items-center justify-center gap-3">
              <div
                className={`${instrumentSerif.className} text-6xl text-neutral-200`}
              >
                Origami
              </div>
              <p
                className={`${instrumentSans.className} text-2xl tracking-tight text-neutral-200`}
              >
                Dashboards made easy.
              </p>

              <div className="mt-4 flex flex-row items-center gap-1">
                <Link href={"/dashboard?onboarding=true"}>
                  <InteractiveHoverButton
                    className="w-60"
                    text="Get started today"
                  />
                </Link>
              </div>
            </div>
          </AuroraBackground>
        </div>
        <div className="neumoirphic m-4 h-96 w-96 rounded-lg"></div>
      </div>
    </main>
  );
}
