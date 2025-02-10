import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Phone, X } from "lucide-react";
import Call from "../../../../public/assets/icons/Call";
import Mail from "../../../../public/assets/icons/Mail";
import Person from "../../../../public/assets/icons/Person";
export default function ContactDrawer({
  owner,
  phone,
  email,
}: {
  owner: string;
  phone: string;
  email: string;
}) {
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center justify-center w-12 h-12 rounded-lg bg-wikoBlue">
        <Phone className="w-5 h-5 text-white" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="relative">
          <DrawerTitle></DrawerTitle>
          <DrawerClose className="absolute top-0 right-6 ">
            <X size={16} />
          </DrawerClose>
        </DrawerHeader>
        <ul className="flex flex-col gap-4 mx-8 mb-6 text-[11px]">
          <li className="contact_li">
            <Person />
            <span className="contact_category ">담당자</span>
            <span className="">{owner}</span>
          </li>
          <li className="contact_li">
            <Call />
            <span className="contact_category">전화번호</span>
            <span className="">{phone}</span>
          </li>
          <li className="contact_li">
            <Mail />
            <span className="contact_category">이메일</span>
            <span className="">{email}</span>
          </li>
        </ul>
      </DrawerContent>
    </Drawer>
  );
}
