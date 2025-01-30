import Alarm from "../../../public/assets/icons/Alarm";
import Menu from "../../../public/assets/icons/Menu";

export default function Header() {
  return (
    <header className="flex items-center justify-end gap-4 p-4">
      <Alarm />
      <Menu />
    </header>
  );
}
