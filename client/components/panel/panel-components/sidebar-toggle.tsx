// lucide-react icons
import { ChevronLeft } from "lucide-react";

// shadcn cn util
import { cn } from "@/lib/utils";

// shadcn ui component
import { Button } from "@/components/ui/button";

interface SidebarToggleProps {
  isOpen: boolean | undefined;
  setIsOpen?: () => void;
}

const SidebarToggle = ({ isOpen, setIsOpen }: SidebarToggleProps) => {
  return (
    <div className="invisible lg:visible absolute top-[12px] -right-[16px] z-20 rounded-md w-8 h-8">
      <Button
        onClick={() => setIsOpen?.()}
        className="rounded-md w-8 h-8"
        variant="outline"
        size="icon"
      >
        <ChevronLeft
          className={cn(
            "h4 w-4 transition-transform ease-in-out duration-700",
            isOpen === false ? "rotate-180" : "rotate-0"
          )}
        />
      </Button>
    </div>
  );
};

export default SidebarToggle;
