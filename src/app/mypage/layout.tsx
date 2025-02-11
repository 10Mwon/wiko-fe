import AppBar from "@/components/layout/AppBar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen   bg-[#f0f0f0]">
      {children}
      <AppBar />
    </main>
  );
}

export default layout;
