const data = [
  "강원특별자치도",
  "경상남도",
  "경상북도",
  "광주광역시",
  "대구광역시",
  "대전광역시",
  "부산광역시",
  "세종특별자치시",
  "울산광역시",
  "전라남도",
  "전북특별자치도",
  "제주특별자치도",
  "충청남도",
  "충청북도",
];

export default function ChatRegionSelector({
  data,
  sendMessage,
}: {
  data: string[];
  sendMessage: (input: string) => void;
}) {
  return (
    <div className="rounded-b-3xl rounded-r-3xl inline-block bg-wikoGray p-4 mb-2">
      어느 지역으로 기관을 찾아드릴까요?
      <ul className="py-3">
        {data.map((item) => (
          <li
            key={item}
            className="bg-white py-1 text-center mt-2 rounded-lg"
            onClick={() => sendMessage(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
