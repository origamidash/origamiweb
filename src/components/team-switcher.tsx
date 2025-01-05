"use client";

import * as React from "react";

import { PlusIcon } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function TeamSwitcher() {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton className="bg-stone-100 font-semibold text-neutral-900 transition-colors hover:bg-neutral-200 hover:text-neutral-900 active:bg-neutral-300 active:text-neutral-900">
          <PlusIcon></PlusIcon>New dashboard
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
