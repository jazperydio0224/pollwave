import Navbar from "@/components/panel/navbar";
import React from "react";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

const ContentLayout = ({ title, children }: ContentLayoutProps) => {
  return (
    <div>
      <Navbar title={title} />
      <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>
  );
};

export default ContentLayout;
