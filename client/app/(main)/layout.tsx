// panel layout
import PanelLayout from "@/components/layouts/panel-layout";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <PanelLayout>{children}</PanelLayout>;
};

export default MainLayout;
