import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function layout({ children }: LayoutProps) {
  return <main className="min-h-screen  bg-wikoBlue">{children}</main>;
}

export default layout;
