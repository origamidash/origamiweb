import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar variant="floating" />
      <SidebarInset>
        <div className="grain flex min-h-screen flex-row text-white">
          <div className="flex w-full flex-col text-white">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
