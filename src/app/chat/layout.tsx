// import AppBar from "@/components/layout/AppBar";
import { ReactNode } from "react";
import ChatRoomHeader from "./ChatRoomHeader";

interface LayoutProps {
  children: ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <>
      <ChatRoomHeader />
      <main className="min-h-screen bg-white px-4 pt-8 pb-20">{children}</main>
      {/* <AppBar /> */}
    </>
  );
}

export default layout;
