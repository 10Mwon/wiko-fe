import Link from "next/link";

export default function InfoAndLink({
  title,
  text,
  href,
  phone,
}: {
  title: string;
  text: string;
  href: string;
  phone: string;
}) {
  return (
    <div className="bg-wikoGray rounded-md inline-block p-1.5">
      <h1 className="text-xs font-semibold">{title}</h1>
      <h2 className="text-[11px] mt-1"> {text}</h2>
      <h2 className="text-[11px]"> {phone}</h2>
      <Link
        href={href}
        className="block bg-[#DADADA] rounded-md w-[117px] mx-auto text-center text-[7px] font-semibold py-1 mt-2"
      >
        홈페이지 바로가기
      </Link>
    </div>
  );
}
