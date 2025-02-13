import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("jobDetail");
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center justify-center w-full h-12 rounded-2xl bg-wikoBlue text-white font-semibold font-lexend">
        {t("apply")}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="relative">
          <DrawerTitle></DrawerTitle>
          <DrawerClose className="absolute top-0 right-6 ">
            <X size={16} />
          </DrawerClose>
        </DrawerHeader>
        <ul className="flex flex-col gap-4 mx-8 mb-6 text-sm">
          <li className="contact_li">
            <Person />
            <span className="contact_category ">{t("owner")}</span>
            <span>{owner}</span>
          </li>
          <li className="contact_li">
            <Call />
            <span className="contact_category">{t("phone")}</span>
            <span>{phone}</span>
          </li>
          <li className="contact_li">
            <Mail />
            <span className="contact_category">{t("email")}</span>
            <span>{email}</span>
          </li>
        </ul>
      </DrawerContent>
    </Drawer>
  );
}
