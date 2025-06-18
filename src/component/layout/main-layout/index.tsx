import Navbar from "@/component/layout/navbar";
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-between">
      <Navbar />
      <main>{children}</main>

      <footer className="p-4 bg-gray-100 text-center">
        © {new Date().getFullYear()} My App
      </footer>
    </div>
  );
};

export default MainLayout;
