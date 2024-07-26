// next js
import Link from "next/link";

// shadcn utils
import { cn } from "@/lib/utils";

// zustand store hooks
import { useStore } from "@/hooks/use-store";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

// sidebar components
import SidebarToggle from "@/components/panel/panel-components/sidebar-toggle";
import Menu from "@/components/panel/panel-components/menu";

// shadcn ui components
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        sidebar?.isOpen === false ? "w-[90px]" : "w-72"
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <Link href="/" className="flex items-center gap-2">
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap transition-[opacity,display] ease-in-out duration-300 bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent",
                sidebar?.isOpen === true ? "opacity-0 hidden" : "opacity-100"
              )}
            >
              PW
            </h1>
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300 bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent",
                sidebar?.isOpen === false
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100"
              )}
            >
              POLLWAVE
            </h1>
          </Link>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  );
};

export default Sidebar;
