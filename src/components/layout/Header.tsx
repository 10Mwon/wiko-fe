import Alarm from "../../../public/assets/icons/Alarm";

export default function Header() {
  return (
    <header className="w-full flex items-cen ter justify-end gap-4 p-4 fixed top-0 right-0">
      <Alarm color="#777777" />
      {/* <Menu /> */}
    </header>
  );
}
