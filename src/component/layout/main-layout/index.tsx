import Navbar from "@/component/layout/navbar";
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen  flex flex-col justify-between overflow-auto">
      <Navbar />
      <div>{children}</div>

    </div>
  );
};

export default MainLayout;
