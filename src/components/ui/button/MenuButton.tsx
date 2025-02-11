"use client";

import Menu from "../../../../public/assets/icons/MenuIcon";

export default function MenuButton({
  setOpenSideMenu,
}: {
  setOpenSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleSidebar = () => {
    setOpenSideMenu((prev) => !prev);
  };
  return (
    <button onClick={handleSidebar}>
      <Menu size="32" />
    </button>
  );
}
