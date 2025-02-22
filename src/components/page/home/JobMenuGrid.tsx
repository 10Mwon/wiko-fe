import { useTranslations } from "next-intl";
import job from "../../../../public/assets/home/job-human.png";
import resume from "../../../../public/assets/home/resume-human.png";
import MenuItem from "./MenuItem";
export default function JobMenuGrid() {
  const menuItems = [
    {
      id: 1,
      img: resume,
      text: "jobInfo",
      href: "/job",
      position: "top-left" as const,
    },
    { id: 2, img: job, text: `createResume`, href: "/resume/create" },
  ];
  const t = useTranslations("home");
  return (
    <section className="grid grid-cols-2 gap-4">
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          text={t(item.text)}
          href={item.href}
          img={item.img}
        />
      ))}
    </section>
  );
}
