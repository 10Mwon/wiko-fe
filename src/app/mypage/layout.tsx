import AppBar from "@/components/layout/AppBar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen   bg-white">
      {children}
      <AppBar />
    </main>
  );
}

export default layout;
