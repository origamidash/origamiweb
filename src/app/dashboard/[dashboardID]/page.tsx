import { deleteDashboard, getDashboard } from "@/server/dashboards";
import { auth, currentUser } from "@clerk/nextjs/server";
import { DM_Mono } from "next/font/google";

import { InfoIcon } from "lucide-react";

import { redirect } from "next/navigation";

import DashboardMenubar from "./menubar";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";


const dmMono = DM_Mono({ weight: "400", subsets: ["latin"] });

export default async function dashboardDashboard({
  params,
}: {
  params: { dashboardID: string };
}) {
  const id = await params;

  const dashboard = await getDashboard(id.dashboardID);

  if (!dashboard) {
    return redirect("/dashboard");
  }

  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth();

  if (userId) {
    // Query DB for user specific information or display assets only to signed in users
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  // Use `user` to render user details or create UI elements

  return (
    <div className="grain m-2.5 ml-0 flex h-full flex-col justify-center text-white">
      <DashboardMenubar dashboard={dashboard} user={user} />

      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <div className="mt-3 flex h-1/2 w-full flex-col gap-4 p-3">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Nodes
            </h1>

            <div className="flex w-full flex-row flex-wrap gap-2.5">
              <div className="gap- flex w-56 flex-col rounded-lg border border-neutral-800 bg-neutral-900 p-3 text-white">
                <h1 className="text-lg">New users</h1>
                <h3 className="text-md opacity-70">
                  Source table: <span>users</span>{" "}
                  <InfoIcon className="mx-1 inline-block h-4 w-4" />
                </h3>
              </div>
              <div className="gap- flex w-56 flex-col rounded-lg border border-neutral-800 bg-neutral-900 p-3 text-white">
                <h1 className="text-lg">Avg. session duration</h1>
                <h3 className="text-md opacity-70">
                  Source table: <span>users</span>{" "}
                  <InfoIcon className="mx-1 inline-block h-4 w-4" />
                </h3>
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={35}>
          <div className="mt-3 flex h-1/2 w-full flex-col gap-4 p-3 px-6">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Node creator
            </h1>

            <div className="flex w-full flex-row flex-wrap gap-2.5">
              
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
