"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function TeamSwitcher() {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu className="flex flex-col">
      <SidebarMenuItem>
        <Link
          href={"/dashboard"}
          className="flex flex-row items-center justify-center"
        >
          <Image
            alt="Origami logo"
            src={"/icon.svg"}
            height={90}
            width={90}
            className="h-9 w-7"
          ></Image>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
