import * as React from "react";

import Link from "next/link";

import {
  ChevronRight,
  SquareTerminal,
  Book,
  type LucideIcon,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { PlusIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import { getDashboards } from "@/server/dashboards";
import { dashboards } from "@/server/db/schema";

import { notFound } from "next/navigation";

export async function NavMain() {
  let dashboards = await getDashboards();

  if (!dashboards) {
    dashboards = [];
  }

  const items = [
    {
      title: "Dashboards",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        ...dashboards.map((dashboard: any) => ({
          title: dashboard.name,
          url: `/dashboard/${dashboard.internalID}`,
          internalID: dashboard.internalID,
        })),
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: Book,
      isActive: false,
      items: [
        ...dashboards.map((dashboard: any) => ({
          title: dashboard.name,
          url: `/dashboard/${dashboard.internalID}`,
          internalID: dashboard.internalID,
        })),
      ],
    },
  ];
  return (
    <SidebarGroup className="pt-0">
      <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
      <SidebarMenu>
        <Collapsible
          key={"Dashboards"}
          asChild
          defaultOpen={true}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={"Dashboards"}>
                {SquareTerminal && <SquareTerminal />}
                <span>Dashboards</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {...dashboards.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.internalID}>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/dashboard/${subItem.internalID}`}>
                        <span>{subItem.name}</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
}
