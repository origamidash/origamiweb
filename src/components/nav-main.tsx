"use client";

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

export function NavMain() {
  const [dashboards, setDashboards] = React.useState([]);

  React.useEffect(() => {
    getDashboards().then((dashboards: any) => {
      setDashboards(dashboards);
    });
  }, []);

  // This is sample data.
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
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.internalID}>
                      <SidebarMenuSubButton asChild>
                        <Link href={subItem.url}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
