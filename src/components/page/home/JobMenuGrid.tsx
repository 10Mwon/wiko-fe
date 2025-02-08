import job from "../../../../public/assets/home/job-human.png";
import resume from "../../../../public/assets/home/resume-human.png";
import MenuItem from "./MenuItem";
export default function JobMenuGrid() {
  const menuItems = [
    {
      id: 1,
      img: job,
      text: `일자리\n정보`,
      href: "/find-job",
      position: "top-left" as const,
    },
    { id: 2, img: resume, text: `이력서\n작성`, href: "/job-matching" },
  ];

  return (
    <section className="grid grid-cols-2 gap-4 px-5">
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          text={item.text}
          href={item.href}
          img={item.img}
        />
      ))}
    </section>
  );
}
