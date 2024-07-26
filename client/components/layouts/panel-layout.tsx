"use client";

// shadcn cn util
import { cn } from "@/lib/utils";

// store
import { useStore } from "@/hooks/use-store";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

// components
import Sidebar from "@/components/panel/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) {
    return null;
  }

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh)] transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
