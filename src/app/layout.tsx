import "@/styles/globals.css";
import Navbar from "../components/Navbar";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import {
  Instrument_Serif,
  Instrument_Sans,
  DM_Sans,
  DM_Mono,
} from "next/font/google";
import { type Metadata } from "next";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const instrumentSans = Instrument_Sans({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] });
const dmMono = DM_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Origami",
  description: "Dashboards made easy.",
  icons: [{ rel: "icon", url: "/small-icon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html
        lang="en"
        className={`${instrumentSans.className} dark bg-black`}
      >
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
