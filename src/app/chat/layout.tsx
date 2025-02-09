import AppBar from "@/components/layout/AppBar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <>
      <main className="min-h-screen bg-white px-6 pt-8 pb-20">{children}</main>
      <AppBar />
    </>
  );
}

export default layout;
