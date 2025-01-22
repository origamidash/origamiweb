import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { SidebarTrigger } from "@/components/ui/sidebar";

import { Suspense } from "react";
import { redirect } from "next/navigation";

import { deleteDashboard } from "@/server/dashboards";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DM_Mono } from "next/font/google";
const dmMono = DM_Mono({ weight: "400", subsets: ["latin"] });

export default function DashboardMenubar({
  user,
  dashboard,
}: {
  user: any;
  dashboard: any;
}) {
  return (
    <div className="flex w-full items-center rounded-lg border border-neutral-800 p-0.5">
      <Menubar className="border-none">
        <MenubarMenu>
          <SidebarTrigger></SidebarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <Suspense fallback={<div>Loading...</div>}>
            <MenubarTrigger className={` ${dmMono.className}`}>
              {user?.username}/{dashboard.name}
            </MenubarTrigger>
          </Suspense>

          <MenubarContent>
            <MenubarItem>
              View settings <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New node <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New source <MenubarShortcut>⌘^A</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New action <MenubarShortcut>⌘A</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Command Pallete <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
            <MenubarItem
              onClick={async () => {
                "use server";
                await deleteDashboard(dashboard.internalID);

                redirect("/dashboard");
              }}
              className="text-red-500 hover:text-red-700"
            >
              Delete dashboard <MenubarShortcut>⌘D</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Permissions</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              View access permissions <MenubarShortcut>⌘D</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Generate preview link <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="text-red-500 hover:text-red-700">
              Transfer <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem className="text-red-500 hover:text-red-700">
              Archive
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="h-px w-full grow"></div>
      <Select>
        <SelectTrigger className="w-[160px] border-0 rounded-none border-l p-5">
          <SelectValue placeholder="Nodes" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="nodes">Nodes</SelectItem>
          <SelectItem value="actions">Actions</SelectItem>
          <SelectItem value="sites">Sites</SelectItem>
          <SelectItem value="permissions">Permissions</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
