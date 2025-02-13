import Link from "next/link";

export default async function HomeNav({ isAuth }: { isAuth: boolean }) {
  return (
    <nav className="font-lexend text-sm  border-b-[1px] w-full py-1 flex justify-between px-6 mt-2 gap-20">
      <Link href="" className="nav-link">
        job
      </Link>
      <Link href="" className="nav-link">
        resume
      </Link>
      {isAuth ? (
        <Link href="/mypage" className="nav-link">
          My page
        </Link>
      ) : (
        <Link href="/login" className="nav-link">
          Login
        </Link>
      )}
    </nav>
  );
}
