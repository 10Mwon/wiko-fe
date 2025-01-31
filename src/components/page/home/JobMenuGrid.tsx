import MenuItem from "./MenuItem";

export default function JobMenuGrid() {
  const menuItems = [
    {
      letter: "W",
      text: "일자리 찾기",
      href: "/find-job",
      position: "top-left" as const,
    },
    {
      letter: "I",
      text: "일자리 매칭",
      href: "/job-matching",
      position: "top-right" as const,
    },
    {
      letter: "K",
      text: "계약서 쓰기",
      href: "/contract",
      position: "bottom-left" as const,
    },
    {
      letter: "O",
      text: "이력서 쓰기",
      href: "/cover-letter",
      position: "bottom-right" as const,
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-4 px-5">
      {menuItems.map((item) => (
        <MenuItem
          key={item.letter}
          letter={item.letter}
          text={item.text}
          position={item.position}
          href={item.href}
        />
      ))}
    </section>
  );
}
