"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { getDashboards } from "@/server/dashboards";
import { dashboards } from "@/server/db/schema";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [dashboards, setDashboards] = React.useState([]);

  React.useEffect(() => {
    getDashboards().then((dashboards: any) => {
      setDashboards(dashboards);
    });
  }, []);

  // This is sample data.
  const data = {
    navMain: [
      {
        title: "Dashboards",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          ...dashboards.map((dashboard: any) => ({
            title: dashboard.name,
            url: `/dashboard/${dashboard.id}`,
            internalID: dashboard.internalID,
          })),
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Billing",
            url: "/billing",
          },
          {
            title: "Upgrade to pro",
            url: `/billing/upgrade?plan=pro`,
          },
        ],
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="pb-0">
        <TeamSwitcher></TeamSwitcher>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
