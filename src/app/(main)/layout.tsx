import AppBar from "@/components/layout/AppBar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <>
      <main className="min-h-screen bg-wikoBlue px-9 pt-8 pb-20">
        {children}
      </main>
      <AppBar />
    </>
  );
}

export default layout;
