export default function SubQuestions({
  question,
  sendMessage,
  className = "",
}: {
  sendMessage: (input: string) => void;
  question: string[];
  className?: string;
}) {
  const handleClick = (e: React.MouseEvent<HTMLLIElement>, item: string) => {
    const element = e.currentTarget; // event.target 대신 currentTarget 사용
    element.classList.add("bg-wikoYellow", "border-[#E3F3A3]", "font-semibold");
    sendMessage(item);
  };
  return (
    <div className={`${className}`}>
      <ul className={`flex flex-wrap gap-1 justify-center text-xs mt-2`}>
        {question.map((item) => (
          <li
            className="bg-[#F8F9FB] px-3.5 py-1.5 rounded-3xl border border-[#E5E9EC] cursor-pointer transition-colors"
            key={item}
            onClick={(e) => handleClick(e, item)} // 이벤트 객체 전달
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
